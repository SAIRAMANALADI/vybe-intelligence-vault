const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const stateManager = require('./state-manager');

const VAULT_ROOT = path.resolve(__dirname, '..');
const EMBEDDINGS_DIR = path.join(VAULT_ROOT, 'vault-core', 'embeddings');
const REACT_PUBLIC_DIR = path.resolve(VAULT_ROOT, 'world', 'public');

if (!fs.existsSync(EMBEDDINGS_DIR)) {
  fs.mkdirSync(EMBEDDINGS_DIR, { recursive: true });
}

console.log(`Resolved Vault Root: ${VAULT_ROOT}`);

// Stable deterministic UUID generator based on file path
function getDeterministicUuid(relPath) {
  const hash = crypto.createHash('md5').update(relPath).digest('hex');
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}-${hash.slice(16, 20)}-${hash.slice(20, 32)}`;
}

// Simple zero-dependency frontmatter parser
function parseMarkdown(content) {
  const result = { metadata: {}, body: content, title: '' };
  
  if (content.startsWith('---')) {
    const parts = content.split('---');
    if (parts.length >= 3) {
      const yamlText = parts[1];
      result.body = parts.slice(2).join('---');
      const lines = yamlText.split('\n');
      let currentKey = null;
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith('-')) {
          if (currentKey && Array.isArray(result.metadata[currentKey])) {
            const val = trimmed.substring(1).trim().replace(/^['"]|['"]$/g, '');
            result.metadata[currentKey].push(val);
          }
        } else {
          const colonIdx = trimmed.indexOf(':');
          if (colonIdx !== -1) {
            const key = trimmed.substring(0, colonIdx).trim();
            let val = trimmed.substring(colonIdx + 1).trim();
            if (val === '[' || val === '') {
              result.metadata[key] = [];
              currentKey = key;
            } else {
              val = val.replace(/^['"]|['"]$/g, '');
              if (val.toLowerCase() === 'true') val = true;
              else if (val.toLowerCase() === 'false') val = false;
              else if (!isNaN(val) && val.trim() !== '') val = Number(val);
              result.metadata[key] = val;
              currentKey = null;
            }
          }
        }
      }
    }
  }
  
  if (result.metadata.title) {
    result.title = result.metadata.title;
  } else {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      result.title = titleMatch[1].trim();
    }
  }
  
  return result;
}

const IGNORED_DIR_NAMES = ['node_modules', '.git', '.venv', 'dist', 'build', 'cache', '.cache', 'temp', 'tmp','world','scripts'];
const MAX_TOTAL_EDGES = Math.min(Math.max(Number(process.env.VAULT_MAX_TOTAL_EDGES || 50000), 100), 100000);
const MAX_EDGES_PER_NODE = Math.min(Math.max(Number(process.env.VAULT_MAX_EDGES_PER_NODE || 24), 1), 100);
const MAX_SIMILARITY_CANDIDATES = Math.min(Math.max(Number(process.env.VAULT_MAX_SIMILARITY_CANDIDATES || 2500), 10), 5000);
const IGNORED_TOP_LEVEL_DIR_NAMES = new Set([
  'node_modules',
  'vault-core',
  'scripts',
  'temp_vault',
  'temp_vault2',
  'world',
  'dist',
  'build',
  'cache',
  '.cache',
  'temp',
  'tmp',
  '_index',
  'assets',
  '.git'
]);

// Recurse directories safely tracking visited paths to prevent infinite junction/symlink loops
function getMarkdownFiles(dir, fileList = [], visited = new Set()) {
  if (!fs.existsSync(dir)) return fileList;
  
  let realDir;
  try {
    realDir = fs.realpathSync(dir);
  } catch (e) {
    realDir = dir;
  }
  
  // Guard: prevent escaping the repository vault root via symlinks or NTFS junctions
  if (!realDir.toLowerCase().replace(/\\/g, '/').startsWith(VAULT_ROOT.toLowerCase().replace(/\\/g, '/'))) {
    return fileList;
  }
  
  if (visited.has(realDir)) return fileList;
  visited.add(realDir);

  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return fileList;
  }

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const stat = fs.lstatSync(filePath);
      if (stat.isSymbolicLink()) continue;
      
      if (stat.isDirectory()) {
        if (file.startsWith('.') || IGNORED_DIR_NAMES.includes(file.toLowerCase())) {
          continue;
        }
        getMarkdownFiles(filePath, fileList, visited);
      } else if (stat.isFile()) {
        // Only index documentation files — no code or config
        const ext = path.extname(file).toLowerCase();
        const DOCS_EXTENSIONS = ['.md', '.txt', '.rst', '.csv', '.tsv'];
        if (DOCS_EXTENSIONS.includes(ext)) {
          fileList.push(filePath);
          if (fileList.length % 5000 === 0) {
            console.log(`Discovered ${fileList.length} files...`);
          }
        }
      }
    } catch (err) {
      // Skip files with read errors or permission locks
    }
  }
  return fileList;
}

// Vector similarity helper functions
function dotProduct(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

function magnitude(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * a[i];
  }
  return Math.sqrt(sum);
}

function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length) return 0;
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (magA === 0 || magB === 0) return 0;
  return dotProduct(a, b) / (magA * magB);
}

let isOllamaAvailable = null;

async function checkOllama() {
  try {
    const response = await fetch('http://localhost:11434/api/tags', { signal: AbortSignal.timeout(500) });
    isOllamaAvailable = response.ok;
  } catch (e) {
    isOllamaAvailable = false;
  }
  console.log(`Checking local Ollama status... Available: ${isOllamaAvailable}`);
}

// Generate embeddings via local Ollama, with cache & hash-based fallback
async function getEmbedding(text, relPath) {
  const safeName = relPath.replace(/\//g, '_') + '.json';
  const embedFilePath = path.join(EMBEDDINGS_DIR, safeName);
  
  if (fs.existsSync(embedFilePath)) {
    try {
      return JSON.parse(fs.readFileSync(embedFilePath, 'utf-8'));
    } catch (err) {
      // Re-fetch on parse error
    }
  }
  
  const cleanedText = text.replace(/[#*`_\[\]()\-]/g, ' ').substring(0, 3000);
  
  if (isOllamaAvailable === null) {
    await checkOllama();
  }
  
  if (isOllamaAvailable) {
    try {
      const response = await fetch('http://localhost:11434/api/embeddings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'nomic-embed-text',
          prompt: cleanedText
        }),
        signal: AbortSignal.timeout(3000)
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.embedding) {
          fs.writeFileSync(embedFilePath, JSON.stringify(result.embedding), 'utf-8');
          return result.embedding;
        }
      }
    } catch (err) {
      try {
        const response = await fetch('http://localhost:11434/api/embed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'nomic-embed-text',
            input: cleanedText
          }),
          signal: AbortSignal.timeout(3000)
        });
        if (response.ok) {
          const result = await response.json();
          const vector = result.embedding || (result.embeddings && result.embeddings[0]);
          if (vector) {
            fs.writeFileSync(embedFilePath, JSON.stringify(vector), 'utf-8');
            return vector;
          }
        }
      } catch (e2) {
        // Fall through to fallback mock vector
      }
    }
  }
  
  // Deterministic mock vector (768 dimensions)
  const vector = [];
  let hash = 0;
  for (let i = 0; i < cleanedText.length; i++) {
    hash = (hash << 5) - hash + cleanedText.charCodeAt(i);
    hash |= 0;
  }
  const factor = hash / 1000000;
  for (let d = 0; d < 768; d++) {
    vector.push(Math.sin(factor + d));
  }
  return vector;
}

async function buildIndex() {
  // Dynamically scan all directories in the vault except for internal system/temporary folders
  const foldersToScan = fs.readdirSync(VAULT_ROOT).filter(file => {
    const filePath = path.join(VAULT_ROOT, file);
    return fs.statSync(filePath).isDirectory() && 
           !file.startsWith('.') && 
           !IGNORED_TOP_LEVEL_DIR_NAMES.has(file.toLowerCase());
  });
  console.log(`Discovered and scanning folders: ${foldersToScan.join(', ')}`);
  const nodes = [];
  const edges = [];
  const embeddingsMap = {};
  const fileContentCache = new Map();
  
  // Read existing index to preserve access metrics
  const oldIndex = stateManager.readIndex();
  const oldNodesMap = new Map();
  if (oldIndex && oldIndex.nodes) {
    oldIndex.nodes.forEach(n => oldNodesMap.set(n.path, n));
  }
  
  // 1. Parse all markdown files
  for (const folder of foldersToScan) {
    const folderPath = path.join(VAULT_ROOT, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = getMarkdownFiles(folderPath);
    
    for (const filePath of files) {
      const relPath = path.relative(VAULT_ROOT, filePath).replace(/\\/g, '/');
      try {
        // All folders get the same treatment — parse frontmatter and compute real embeddings.
        // Previously ai/ and workspace-archive/ were silently assigned a static mock vector,
        // which meant they never appeared in similarity edges. Fixed.
        const content = fs.readFileSync(filePath, 'utf-8');
        fileContentCache.set(relPath, content);
        const parsed = parseMarkdown(content);
        const title = (parsed.title || path.basename(relPath, '.md')).replace(/^["']|["']$/g, '');
        const tags = Array.isArray(parsed.metadata.tags) ? parsed.metadata.tags : (parsed.metadata.tags ? [String(parsed.metadata.tags)] : []);
        const tech_stack = Array.isArray(parsed.metadata.tech_stack) ? parsed.metadata.tech_stack : (parsed.metadata.tech_stack ? [String(parsed.metadata.tech_stack)] : []);
        const quality_score = parsed.metadata.quality_score || parsed.metadata.health_score || 0;
        const content_type = parsed.metadata.content_type || 'unknown';
        const engine = parsed.metadata.engine || (folder === 'daily-digests' ? 'v2' : 'core');

        const embedding = await getEmbedding(parsed.body || parsed.title || path.basename(relPath, '.md'), relPath);
        embeddingsMap[relPath] = embedding;

        {
        let title_block = title, tags_block = tags, tech_stack_block = tech_stack, quality_score_block = quality_score;
        
        const oldNode = oldNodesMap.get(relPath);
        
        const node = {
          id: oldNode?.id || getDeterministicUuid(relPath),
          path: relPath,
          title: title_block,
          category: folder,
          content_type: content_type,
          engine: engine,
          tags: tags_block,
          tech_stack: tech_stack_block,
          quality_score: quality_score_block,
          rag_relevance: 0,
          embedding_vector_id: `vec_${relPath.replace(/[^a-zA-Z0-9]/g, '_')}`,
          last_modified: new Date().toISOString(),
          access_count: oldNode?.access_count || 0,
          last_accessed: oldNode?.last_accessed || ''
        };
        
        nodes.push(node);
        } // end block
      } catch (err) {
        console.error(`Error processing ${relPath}:`, err);
      }
    }
  }
  
  // Map nodes by path for fast O(1) lookups
  const nodesByPathMap = new Map();
  nodes.forEach(n => nodesByPathMap.set(n.path.toLowerCase(), n));
  
  // Set to track edge existence in O(1)
  const edgeKeys = new Set();
  const edgeCountsByNode = new Map();
  
  // Helper to generate edge keys
  const getEdgeKey = (src, tgt) => {
    return src < tgt ? `${src}::${tgt}` : `${tgt}::${src}`;
  };

  const addEdge = (source, target, type, weight) => {
    if (!source || !target || source === target || edges.length >= MAX_TOTAL_EDGES) {
      return false;
    }

    const sourceCount = edgeCountsByNode.get(source) || 0;
    const targetCount = edgeCountsByNode.get(target) || 0;
    if (sourceCount >= MAX_EDGES_PER_NODE || targetCount >= MAX_EDGES_PER_NODE) {
      return false;
    }

    const edgeKey = getEdgeKey(source, target);
    if (edgeKeys.has(edgeKey)) {
      return false;
    }

    // Guard against Set capacity limits (RangeError: Set maximum size exceeded)
    if (edgeKeys.size >= MAX_TOTAL_EDGES || edgeKeys.size >= 15000000) {
      return false;
    }

    try {
      edgeKeys.add(edgeKey);
    } catch (err) {
      return false;
    }

    edgeCountsByNode.set(source, sourceCount + 1);
    edgeCountsByNode.set(target, targetCount + 1);
    edges.push({
      source,
      target,
      type,
      weight: parseFloat(Math.min(weight, 0.98).toFixed(2))
    });
    return true;
  };
  
  // 2. Resolve edges from direct markdown links
  for (const node of nodes) {
    if (edges.length >= MAX_TOTAL_EDGES) break;
    const content = fileContentCache.get(node.path) || '';
    const filePath = path.join(VAULT_ROOT, node.path);
    const folderDir = path.dirname(filePath);
    
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      if (edges.length >= MAX_TOTAL_EDGES) break;
      const linkUrl = match[2];
      
      if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('#')) {
        continue;
      }
      
      try {
        const resolvedPath = path.resolve(folderDir, linkUrl);
        const resolvedRelPath = path.relative(VAULT_ROOT, resolvedPath).replace(/\\/g, '/');
        
        const targetNode = nodesByPathMap.get(resolvedRelPath.toLowerCase());
        if (targetNode && targetNode.path !== node.path) {
          addEdge(node.path, targetNode.path, 'references', 0.95);
        }
      } catch (err) {
        // Ignore resolution errors
      }
    }
  }
  
  // 3. Compute edges using cosine similarity and tag/tech stack overlaps
  const mainCategories = ['maps', 'skills', 'daily-digests', 'prompts', 'build-ideas', 'learning-paths', 'intelligence', 'ai', 'workspace-archive'];
  const similarityCandidates = nodes
    .filter(node => {
      if (!mainCategories.includes(node.category)) return false;
      if (node.category === 'daily-digests') {
        return (node.tags && node.tags.length > 0) || (node.tech_stack && node.tech_stack.length > 0);
      }
      return true;
    })
    .sort((a, b) => {
      const scoreDiff = (b.quality_score || 0) - (a.quality_score || 0);
      if (scoreDiff !== 0) return scoreDiff;
      return String(a.path).localeCompare(String(b.path));
    })
    .slice(0, MAX_SIMILARITY_CANDIDATES);

  if (nodes.length > similarityCandidates.length) {
    console.log(
      `Similarity edge pass capped at ${similarityCandidates.length}/${nodes.length} nodes ` +
      `(MAX_SIMILARITY_CANDIDATES=${MAX_SIMILARITY_CANDIDATES}).`
    );
  }

  for (let i = 0; i < similarityCandidates.length && edges.length < MAX_TOTAL_EDGES; i++) {
    for (let j = i + 1; j < similarityCandidates.length && edges.length < MAX_TOTAL_EDGES; j++) {
      const n1 = similarityCandidates[i];
      const n2 = similarityCandidates[j];
      
      const v1 = embeddingsMap[n1.path];
      const v2 = embeddingsMap[n2.path];
      const sim = cosineSimilarity(v1, v2);
      
      const tags1 = new Set(n1.tags.map(t => String(t).toLowerCase()));
      const sharedTags = n2.tags.filter(t => tags1.has(String(t).toLowerCase()));
      
      const tech1 = new Set(n1.tech_stack.map(t => String(t).toLowerCase()));
      const sharedTech = n2.tech_stack.filter(t => tech1.has(String(t).toLowerCase()));
      
      let weight = sim;
      let type = 'similar_to';
      
      if (sharedTags.length > 0 || sharedTech.length > 0) {
        weight += (sharedTags.length * 0.08) + (sharedTech.length * 0.12);
      }
      
      // Strict Edge threshold check (sim > 0.85 or sharing significant tag/tech overlap) to prevent edge explosion
      const bothDailyDigests = n1.category === 'daily-digests' && n2.category === 'daily-digests';
      const isConnected = bothDailyDigests
        ? sharedTags.length >= 3 || sharedTech.length >= 2
        : sim > 0.85 || sharedTags.length >= 3 || sharedTech.length >= 2;
      
      if (isConnected) {
        if (sharedTech.length >= 2) {
          type = 'depends_on';
        } else if (sim > 0.85 && !bothDailyDigests) {
          type = 'similar_to';
        } else {
          type = 'references';
        }

        addEdge(n1.path, n2.path, type, weight);
      }
    }
  }

  if (edges.length >= MAX_TOTAL_EDGES) {
    console.log(`Edge generation stopped at MAX_TOTAL_EDGES=${MAX_TOTAL_EDGES}.`);
  }
  
  // Build system health from previous or initial metrics
  const systemHealth = {
    last_pipeline_run: oldIndex?.system_health?.last_pipeline_run || new Date().toISOString(),
    repos_discovered_today: oldIndex?.system_health?.repos_discovered_today || 0,
    repos_evaluated: oldIndex?.system_health?.repos_evaluated || 0,
    avg_quality_score: nodes.length ? parseFloat((nodes.reduce((acc, curr) => acc + (curr.quality_score || 0), 0) / nodes.length).toFixed(2)) : 0,
    mcp_requests_served: oldIndex?.system_health?.mcp_requests_served || 0,
    web_sessions: oldIndex?.system_health?.web_sessions || 0
  };
  
  const indexObject = {
    version: "2.0",
    last_updated: new Date().toISOString(),
    nodes,
    edges,
    system_health: systemHealth
  };
  
  // Write atomically through state-manager
  stateManager.writeIndex(indexObject);
  
  console.log(`Generated graph with ${nodes.length} nodes and ${edges.length} edges.`);
  
  // 4. Sync copy to React assets if public folder exists
  if (fs.existsSync(REACT_PUBLIC_DIR)) {
    const reactIndexFile = path.join(REACT_PUBLIC_DIR, 'vault-index.json');
    
    // The frontend React app does not use edges, so we strip them to save 85%+ bandwidth.
    const frontendPayload = {
      version: indexObject.version,
      last_updated: indexObject.last_updated,
      nodes: indexObject.nodes,
      system_health: indexObject.system_health
      // intentionally omitting 'edges'
    };
    
    fs.writeFileSync(reactIndexFile, JSON.stringify(frontendPayload), 'utf-8');
    console.log(`Saved optimized node-only index to React: ${reactIndexFile}`);
    copyMarkdownFiles();
  }
}

function copyMarkdownFiles() {
  if (!fs.existsSync(REACT_PUBLIC_DIR)) return;
  const targetVaultDir = path.join(REACT_PUBLIC_DIR, 'vault');
  
  if (fs.existsSync(targetVaultDir)) {
    fs.rmSync(targetVaultDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetVaultDir, { recursive: true });

  const folders = ['maps', 'skills', 'daily-digests', 'prompts'];
  for (const folder of folders) {
    const srcDir = path.join(VAULT_ROOT, folder);
    const destDir = path.join(targetVaultDir, folder);
    if (!fs.existsSync(srcDir)) continue;

    fs.mkdirSync(destDir, { recursive: true });
    const files = getMarkdownFiles(srcDir);
    for (const file of files) {
      const relPath = path.relative(srcDir, file);
      const destFile = path.join(destDir, relPath);
      fs.mkdirSync(path.dirname(destFile), { recursive: true });
      fs.copyFileSync(file, destFile);
    }
  }
  console.log(`Copied all markdown files to React public vault.`);
}

buildIndex();
