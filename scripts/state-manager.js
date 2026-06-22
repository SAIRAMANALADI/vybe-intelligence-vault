const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT_DIR, 'vault-core', 'vault-index.json');
const EVENTS_PATH = path.join(ROOT_DIR, 'vault-core', 'vault-events.log');
const LOCK_PATH = path.join(ROOT_DIR, 'state.lock');

// Ensure vault-core directory exists
const vaultCoreDir = path.dirname(INDEX_PATH);
if (!fs.existsSync(vaultCoreDir)) {
  fs.mkdirSync(vaultCoreDir, { recursive: true });
}

// In-memory cache for index
let cachedIndex = null;
let lastReadTime = 0;
const CACHE_TTL = 30000; // 30 seconds

// Sleep helper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Acquire lock
async function acquireLock(maxRetries = 150, delayMs = 100) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const fd = fs.openSync(LOCK_PATH, 'wx');
      fs.writeSync(fd, `pid=${process.pid}\ntime=${new Date().toISOString()}\n`);
      fs.closeSync(fd);
      return true;
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
      await sleep(delayMs);
    }
  }
  throw new Error('Timeout acquiring state lock');
}

// Release lock
function releaseLock() {
  try {
    if (fs.existsSync(LOCK_PATH)) {
      fs.unlinkSync(LOCK_PATH);
    }
  } catch (err) {
    // Ignore error if file was already removed
  }
}

// Read index with cache TTL
function readIndex() {
  const now = Date.now();
  if (cachedIndex && (now - lastReadTime < CACHE_TTL)) {
    return cachedIndex;
  }
  
  if (!fs.existsSync(INDEX_PATH)) {
    const initialIndex = {
      version: "2.0",
      last_updated: new Date().toISOString(),
      nodes: [],
      edges: [],
      system_health: {
        last_pipeline_run: new Date().toISOString(),
        repos_discovered_today: 0,
        repos_evaluated: 0,
        avg_quality_score: 0,
        mcp_requests_served: 0,
        web_sessions: 0
      }
    };
    cachedIndex = initialIndex;
    lastReadTime = now;
    return cachedIndex;
  }
  
  try {
    const raw = fs.readFileSync(INDEX_PATH, 'utf-8');
    cachedIndex = JSON.parse(raw);
    lastReadTime = now;
    return cachedIndex;
  } catch (err) {
    console.error('Failed to read index, using fallback:', err);
    return cachedIndex || { version: "2.0", nodes: [], edges: [], system_health: {} };
  }
}

// Write index atomically
function writeIndex(index) {
  const data = JSON.stringify(index, null, 2);
  fs.writeFileSync(INDEX_PATH, data, 'utf-8');
  
  // Keep copy in root directory
  const rootIndex = path.join(ROOT_DIR, 'vault-index.json');
  fs.writeFileSync(rootIndex, data, 'utf-8');
  
  cachedIndex = index;
  lastReadTime = Date.now();
}

// Append event to events log
async function appendEvent(type, payload, correlationId = '') {
  await acquireLock();
  try {
    const event = {
      timestamp: new Date().toISOString(),
      type,
      payload,
      correlation_id: correlationId
    };
    const line = JSON.stringify(event) + '\n';
    
    fs.appendFileSync(EVENTS_PATH, line, 'utf-8');
    
    // Copy events log to root directory
    const rootEvents = path.join(ROOT_DIR, 'vault-events.log');
    fs.appendFileSync(rootEvents, line, 'utf-8');
  } finally {
    releaseLock();
  }
}

// Update or create node in the index
async function updateNode(id, mutations) {
  await acquireLock();
  try {
    const index = readIndex();
    let node = index.nodes.find(n => n.id === id);
    const nowStr = new Date().toISOString();
    
    if (node) {
      Object.assign(node, mutations);
      node.last_modified = nowStr;
    } else {
      node = {
        id,
        path: mutations.path || id,
        title: mutations.title || path.basename(id, '.md'),
        category: mutations.category || 'skills',
        tags: mutations.tags || [],
        tech_stack: mutations.tech_stack || [],
        quality_score: mutations.quality_score || 0,
        rag_relevance: mutations.rag_relevance || 0,
        embedding_vector_id: mutations.embedding_vector_id || '',
        last_modified: nowStr,
        access_count: mutations.access_count || 0,
        last_accessed: mutations.last_accessed || ''
      };
      index.nodes.push(node);
    }
    
    index.last_updated = nowStr;
    writeIndex(index);
    return node;
  } finally {
    releaseLock();
  }
}

// Increment access metrics
async function incrementAccess(id) {
  await acquireLock();
  try {
    const index = readIndex();
    const node = index.nodes.find(n => n.id === id);
    if (node) {
      node.access_count = (node.access_count || 0) + 1;
      node.last_accessed = new Date().toISOString();
      index.last_updated = new Date().toISOString();
      writeIndex(index);
      return node;
    }
    return null;
  } finally {
    releaseLock();
  }
}

// Query graph nodes
function queryGraph({ category, tags, min_score, tech_stack, limit } = {}) {
  const index = readIndex();
  let results = [...index.nodes];
  
  if (category) {
    results = results.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }
  
  if (tags && tags.length > 0) {
    const tagsLower = tags.map(t => t.toLowerCase());
    results = results.filter(n => n.tags && n.tags.some(t => tagsLower.includes(t.toLowerCase())));
  }
  
  if (min_score !== undefined) {
    results = results.filter(n => (n.quality_score || 0) >= min_score);
  }
  
  if (tech_stack && tech_stack.length > 0) {
    const techLower = tech_stack.map(t => t.toLowerCase());
    results = results.filter(n => n.tech_stack && n.tech_stack.some(t => techLower.includes(t.toLowerCase())));
  }
  
  // Sort: RAG relevance DESC, then Quality Score DESC
  results.sort((a, b) => {
    const rDiff = (b.rag_relevance || 0) - (a.rag_relevance || 0);
    if (rDiff !== 0) return rDiff;
    return (b.quality_score || 0) - (a.quality_score || 0);
  });
  
  if (limit) {
    results = results.slice(0, limit);
  }
  
  return results;
}

// Build edges automatically based on overlaps
async function buildEdges(nodeId) {
  await acquireLock();
  try {
    const index = readIndex();
    const sourceNode = index.nodes.find(n => n.id === nodeId);
    if (!sourceNode) return [];
    
    // Remove existing edges for this node to rebuild
    index.edges = index.edges.filter(e => e.source !== nodeId && e.target !== nodeId);
    
    const newEdges = [];
    
    for (const targetNode of index.nodes) {
      if (targetNode.id === nodeId) continue;
      
      let weight = 0;
      const types = [];
      
      // Shared tags (similar_to)
      const sourceTags = new Set((sourceNode.tags || []).map(t => t.toLowerCase()));
      const sharedTags = (targetNode.tags || []).filter(t => sourceTags.has(t.toLowerCase()));
      if (sharedTags.length > 0) {
        weight += Math.min(sharedTags.length * 0.15, 0.45);
        types.push('similar_to');
      }
      
      // Tech stack overlap (depends_on)
      const sourceTech = new Set((sourceNode.tech_stack || []).map(t => t.toLowerCase()));
      const sharedTech = (targetNode.tech_stack || []).filter(t => sourceTech.has(t.toLowerCase()));
      if (sharedTech.length > 0) {
        weight += Math.min(sharedTech.length * 0.20, 0.40);
        types.push('depends_on');
      }
      
      // Path folder proximity (references)
      const p1 = sourceNode.id.split('/');
      const p2 = targetNode.id.split('/');
      if (p1[0] === p2[0]) {
        weight += 0.10;
        types.push('references');
      }
      
      weight = Math.min(weight, 0.95);
      
      if (weight >= 0.20) {
        const type = types.includes('depends_on') 
          ? 'depends_on' 
          : types.includes('similar_to') 
            ? 'similar_to' 
            : 'references';
            
        newEdges.push({
          source: nodeId,
          target: targetNode.id,
          type,
          weight: parseFloat(weight.toFixed(2))
        });
      }
    }
    
    index.edges.push(...newEdges);
    writeIndex(index);
    return newEdges;
  } finally {
    releaseLock();
  }
}

// Update system health metrics
async function updateSystemHealth(metrics) {
  await acquireLock();
  try {
    const index = readIndex();
    index.system_health = Object.assign({}, index.system_health, metrics);
    writeIndex(index);
  } finally {
    releaseLock();
  }
}

module.exports = {
  readIndex,
  writeIndex,
  appendEvent,
  updateNode,
  incrementAccess,
  queryGraph,
  buildEdges,
  updateSystemHealth
};
