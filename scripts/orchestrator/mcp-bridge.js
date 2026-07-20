const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');
const net = require('net');
const stateManager = require('../state-manager');
const contextInjector = require('./context-injector');
const decisionEngine = require('./decision-engine');

const PORT = parseInt(process.env.ORCHESTRATOR_PORT, 10) || 3456;
const MCP_PORT = parseInt(process.env.MCP_SERVER_PORT, 10) || 8000;
const WEB_PORT = parseInt(process.env.WEB_PORT, 10) || 5173;
const ROOT_DIR = path.resolve(__dirname, '../..');
const EVENTS_PATH = path.join(ROOT_DIR, 'vault-core', 'vault-events.log');

// Port check helper
function checkPortReachable(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 400;
    
    socket.setTimeout(timeout);
    socket.on('connect', () => {
      socket.end();
      resolve(true);
    });
    socket.on('error', () => resolve(false));
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, '127.0.0.1');
  });
}

// GitHub action dispatch trigger
function triggerGithubDispatch(workflowFile, inputs = {}) {
  return new Promise((resolve, reject) => {
    const token = process.env.GITHUB_TOKEN || process.env.VAULT_GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPOSITORY || 'sairaman436/vybe-intelligence-vault';
    
    if (!token) {
      return reject(new Error('GITHUB_TOKEN or VAULT_GITHUB_TOKEN missing from environment'));
    }
    
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${repo}/actions/workflows/${workflowFile}/dispatches`,
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Vault-Orchestrator-Bridge',
        'Content-Type': 'application/json'
      }
    };
    
    const payload = JSON.stringify({
      ref: 'main',
      inputs: inputs
    });
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode <= 299) {
          resolve({ success: true, message: `Dispatched workflow ${workflowFile}` });
        } else {
          reject(new Error(`GitHub Actions API returned ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', (e) => reject(e));
    req.write(payload);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  const sendJSON = (statusCode, payload) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
  };

  // 1. GET /health
  if (pathname === '/health' && req.method === 'GET') {
    const mcpServerUp = await checkPortReachable(MCP_PORT);
    const webUp = await checkPortReachable(WEB_PORT);
    const index = stateManager.readIndex();
    
    sendJSON(200, {
      status: 'healthy',
      services: {
        mcp_server: mcpServerUp ? 'running' : 'offline',
        orchestrator: 'running',
        web_interface: webUp ? 'running' : 'offline'
      },
      last_pipeline_run: index.system_health?.last_pipeline_run || ''
    });
    return;
  }

  // 2. GET /events
  if (pathname === '/events' && req.method === 'GET') {
    const limit = parseInt(parsedUrl.searchParams.get('limit')) || 10;
    let events = [];
    if (fs.existsSync(EVENTS_PATH)) {
      try {
        const lines = fs.readFileSync(EVENTS_PATH, 'utf-8').trim().split('\n');
        events = lines.slice(-limit).map(l => l ? JSON.parse(l) : null).filter(Boolean);
      } catch (e) {
        console.error('Failed to parse events log:', e);
      }
    }
    sendJSON(200, events);
    return;
  }

  // 3. POST /orchestrate
  if (pathname === '/orchestrate' && req.method === 'POST') {
    let body = '';
    let bodyTooLarge = false;
    const MAX_BODY_BYTES = 1024 * 1024; // 1MB limit

    req.on('data', chunk => {
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        bodyTooLarge = true;
        req.destroy();
      }
    });

    req.on('end', async () => {
      if (bodyTooLarge) {
        sendJSON(413, { error: 'Payload too large. Maximum request body is 1MB.' });
        return;
      }
      try {
        const data = JSON.parse(body);
        const action = data.action;
        const params = data.parameters || {};
        const corrId = data.correlation_id || `corr_${Date.now()}`;

        if (!action) {
          sendJSON(400, { error: 'Missing field: action' });
          return;
        }

        // Action routing
        switch (action) {
          case 'harvest': {
            const topic = params.topic || params.topic_filter || 'ai-agent,mcp-server,rag-stack';
            const maxRepos = String(params.max_repos || 5);
            const forceCloud = params.force_cloud_llm !== false;

            // Trigger budget calculation first
            const route = decisionEngine.getLLMRoute('evaluation', forceCloud);
            const isUsingCloud = route.provider === 'openai';

            triggerGithubDispatch('harvester.yml', {
              topic_filter: topic,
              max_repos: maxRepos,
              force_cloud_llm: String(isUsingCloud)
            })
            .then(githubRes => {
              stateManager.appendEvent('pipeline.triggered', { 
                workflow: 'harvester.yml', 
                topic, 
                maxRepos, 
                llm_provider: route.provider 
              }, corrId);
              sendJSON(200, { success: true, message: githubRes.message, correlation_id: corrId });
            })
            .catch(err => {
              stateManager.appendEvent('pipeline.failed', { error: err.message }, corrId);
              sendJSON(500, { error: err.message });
            });
            break;
          }

          case 'query': {
            const results = stateManager.queryGraph({
              category: params.category,
              tags: params.tags,
              min_score: params.min_score,
              tech_stack: params.tech_stack,
              limit: params.limit
            });
            
            // Append access log event
            stateManager.appendEvent('mcp.accessed', { 
              query: params.category || params.tags || 'graph_query', 
              results_count: results.length 
            }, corrId);
            
            sendJSON(200, { nodes: results });
            break;
          }

          case 'status': {
            const index = stateManager.readIndex();
            let recentEvents = [];
            if (fs.existsSync(EVENTS_PATH)) {
              try {
                const raw = fs.readFileSync(EVENTS_PATH, 'utf-8').trim().split('\n');
                recentEvents = raw.slice(-10).map(line => line ? JSON.parse(line) : null).filter(Boolean);
              } catch (e) {}
            }
            sendJSON(200, {
              system_health: index.system_health || {},
              last_updated: index.last_updated,
              recent_events: recentEvents
            });
            break;
          }

          case 'rebuild': {
            triggerGithubDispatch('rebuild-index.yml')
            .then(githubRes => {
              stateManager.appendEvent('index.rebuild.triggered', {}, corrId);
              sendJSON(200, { success: true, message: githubRes.message });
            })
            .catch(err => {
              sendJSON(500, { error: err.message });
            });
            break;
          }

          case 'inject': {
            if (!params.path) {
              sendJSON(400, { error: 'Missing field: parameters.path' });
              return;
            }
            try {
              const fileContent = contextInjector.injectFile(params.path);
              stateManager.appendEvent('mcp.accessed', { resource: params.path, agent: 'orchestrator' }, corrId);
              sendJSON(200, { content: fileContent });
            } catch (err) {
              sendJSON(404, { error: err.message });
            }
            break;
          }

          default:
            sendJSON(400, { error: `Unknown orchestrator action: ${action}` });
        }

      } catch (err) {
        sendJSON(400, { error: 'Invalid JSON request body' });
      }
    });
    return;
  }

  // Not Found fallback
  sendJSON(404, { error: 'Not Found' });
});

server.listen(PORT, () => {
  console.log(`Vault Orchestrator Bridge running on port ${PORT}`);
});
