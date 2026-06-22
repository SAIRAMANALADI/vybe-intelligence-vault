const fs = require('fs');
const path = require('path');

const VAULT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(VAULT_ROOT, 'vault-index.json');
// Optional target inside react app public folder
const REACT_PUBLIC_DIR = path.resolve(VAULT_ROOT, '..', 'intelligence-map', 'public');

console.log(`Resolved Vault Root: ${VAULT_ROOT}`);

// Simple zero-dependency frontmatter parser
function parseMarkdown(content) {
  const result = { metadata: {}, body: content, title: '' };
  
  // Try parsing frontmatter
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
  
  // Extract Title from markdown if not set in frontmatter
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

// Find all markdown files recursively
function getMarkdownFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getMarkdownFiles(filePath, fileList);
    } else if (stat.isFile() && file.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function buildGraph() {
  const foldersToScan = ['maps', 'skills', 'daily-digests', 'prompts'];
  const nodes = [];
  const edges = [];
  const nodeMap = new Map(); // filepath -> node
  
  // 1. Discover all nodes
  for (const folder of foldersToScan) {
    const folderPath = path.join(VAULT_ROOT, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = getMarkdownFiles(folderPath);
    for (const filePath of files) {
      const relPath = path.relative(VAULT_ROOT, filePath).replace(/\\/g, '/');
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = parseMarkdown(content);
        
        // Clean Title
        let title = parsed.title || path.basename(relPath, '.md');
        title = title.replace(/^["']|["']$/g, '');
        
        const node = {
          id: relPath,
          title: title,
          category: folder,
          tags: parsed.metadata.tags || [],
          tech_stack: parsed.metadata.tech_stack || [],
          stars: parsed.metadata.stars || 0,
          quality_score: parsed.metadata.quality_score || 0,
          rag_relevance: parsed.metadata.rag_relevance || 0,
          last_updated: parsed.metadata.last_updated || parsed.metadata.collected_at || '',
          summary: parsed.metadata.summary || ''
        };
        
        // Parse simple inline summaries for skills/maps that don't have frontmatter summary
        if (!node.summary) {
          // Grab the first non-header lines in body
          const lines = parsed.body.split('\n')
            .map(l => l.trim())
            .filter(l => l && !l.startsWith('#') && !l.startsWith('<!--'));
          if (lines.length > 0) {
            node.summary = lines.slice(0, 2).join(' ').substring(0, 160) + '...';
          }
        }
        
        nodes.push(node);
        nodeMap.set(relPath.toLowerCase(), node);
      } catch (err) {
        console.error(`Error reading ${relPath}:`, err);
      }
    }
  }
  
  // 2. Resolve edges from markdown links
  for (const node of nodes) {
    const filePath = path.join(VAULT_ROOT, node.id);
    const content = fs.readFileSync(filePath, 'utf-8');
    const folderDir = path.dirname(filePath);
    
    // Markdown link regex: [text](link)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const linkUrl = match[2];
      
      // We only care about relative path links to other markdown files in the vault
      if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('#')) {
        continue;
      }
      
      try {
        // Resolve link relative to the folder containing the file
        const resolvedPath = path.resolve(folderDir, linkUrl);
        const resolvedRelPath = path.relative(VAULT_ROOT, resolvedPath).replace(/\\/g, '/');
        
        const targetNode = nodeMap.get(resolvedRelPath.toLowerCase());
        if (targetNode && targetNode.id !== node.id) {
          // Prevent duplicates
          const edgeId = `${node.id}->${targetNode.id}`;
          const reverseEdgeId = `${targetNode.id}->${node.id}`;
          
          const edgeExists = edges.some(e => e.id === edgeId || e.id === reverseEdgeId);
          if (!edgeExists) {
            edges.push({
              id: edgeId,
              source: node.id,
              target: targetNode.id,
              type: 'link'
            });
          }
        }
      } catch (err) {
        // Ignore resolution errors (e.g. external link formats or local anchors)
      }
    }
  }
  
  // 3. Resolve edges from shared tags/tech stack or parent directory neighborhood
  // (Provides connectivity even if files don't link directly)
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const n1 = nodes[i];
      const n2 = nodes[j];
      
      // Shared tags
      const n1Tags = new Set(n1.tags.map(t => t.toLowerCase()));
      const shared = n2.tags.filter(t => n1Tags.has(t.toLowerCase()));
      
      if (shared.length >= 2) {
        const edgeId = `tag-${n1.id}-${n2.id}`;
        const reverseEdgeId = `tag-${n2.id}-${n1.id}`;
        const edgeExists = edges.some(e => e.id === edgeId || e.id === reverseEdgeId || e.source === n1.id && e.target === n2.id);
        
        if (!edgeExists) {
          edges.push({
            id: edgeId,
            source: n1.id,
            target: n2.id,
            type: 'shared-tags',
            weight: shared.length
          });
        }
      }
    }
  }
  
  const graph = { nodes, edges };
  console.log(`Generated graph with ${nodes.length} nodes and ${edges.length} edges.`);
  
  // Save to vault repo
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(graph, null, 2), 'utf-8');
  console.log(`Saved index to: ${OUTPUT_FILE}`);
  
  // Save to react app if directory exists
  if (fs.existsSync(REACT_PUBLIC_DIR)) {
    const reactIndexFile = path.join(REACT_PUBLIC_DIR, 'vault-index.json');
    fs.writeFileSync(reactIndexFile, JSON.stringify(graph, null, 2), 'utf-8');
    console.log(`Saved index copy to React assets: ${reactIndexFile}`);
    copyMarkdownFiles();
  } else {
    console.log(`React public assets directory not yet created. Skipping copy.`);
  }
}

function copyMarkdownFiles() {
  if (!fs.existsSync(REACT_PUBLIC_DIR)) return;
  const targetVaultDir = path.join(REACT_PUBLIC_DIR, 'vault');
  
  // Clean target directory
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
    
    // Helper to get files
    const files = getMarkdownFiles(srcDir);
    for (const file of files) {
      const relPath = path.relative(srcDir, file);
      const destFile = path.join(destDir, relPath);
      fs.mkdirSync(path.dirname(destFile), { recursive: true });
      fs.copyFileSync(file, destFile);
    }
  }
  console.log(`Copied all markdown files to React assets: ${targetVaultDir}`);
}

buildGraph();
