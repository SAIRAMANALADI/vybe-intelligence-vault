const fs = require('fs');
const path = require('path');
const stateManager = require('../state-manager');

const ROOT_DIR = path.resolve(__dirname, '../..');

function getContext(query) {
  const index = stateManager.readIndex();
  let matches = [];
  
  const q = query.toLowerCase();
  
  for (const node of index.nodes) {
    let score = 0;
    if (node.title.toLowerCase().includes(q)) score += 5;
    if (node.category.toLowerCase().includes(q)) score += 4;
    if (node.tags && node.tags.some(t => t.toLowerCase().includes(q))) score += 3;
    if (node.tech_stack && node.tech_stack.some(t => t.toLowerCase().includes(q))) score += 3;
    if (node.summary && node.summary.toLowerCase().includes(q)) score += 1;
    
    if (score > 0) {
      matches.push({ node, score });
    }
  }
  
  matches.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (b.node.rag_relevance || 0) - (a.node.rag_relevance || 0);
  });
  
  const topMatches = matches.slice(0, 3).map(m => m.node);
  
  let output = `VAULT CONTEXT: ${query}\n`;
  output += `Found ${matches.length} entries. Top matches by relevance:\n\n`;
  
  topMatches.forEach((node, idx) => {
    output += `${idx + 1}. ${node.title} (${node.path})\n`;
    output += `   Category: ${node.category} | RAG Relevance: ${node.rag_relevance || 0}/10 | Quality: ${node.quality_score || 0}/10\n`;
    output += `   Tech Stack: ${(node.tech_stack || []).join(', ')}\n`;
    output += `   Summary: ${node.summary || 'No summary available.'}\n`;
    output += `   → Use 'vault inject ${node.path}' to pull full content\n\n`;
  });
  
  const relatedTags = new Set();
  topMatches.forEach(m => (m.tags || []).forEach(t => relatedTags.add(t)));
  const tagsStr = Array.from(relatedTags).slice(0, 4).join(', ');
  
  output += `Related tags: ${tagsStr || 'none'}\n`;
  output += `Suggested Next Action: "Inject ${topMatches[0]?.path || 'a specific guide'}" or "Search for more detailed tags"\n`;
  
  return output;
}

function injectFile(filePath) {
  const fullPath = path.resolve(ROOT_DIR, filePath);
  
  if (!fullPath.startsWith(ROOT_DIR)) {
    throw new Error('Access denied: Out of bounds path');
  }
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const index = stateManager.readIndex();
  const node = index.nodes.find(n => n.path === filePath);
  
  // Log access metric atomically
  stateManager.incrementAccess(filePath);
  
  let header = `=== VAULT ENTRY: ${node ? node.title : path.basename(filePath)} (${filePath}) ===\n`;
  if (node) {
    header += `Category: ${node.category} | RAG Relevance: ${node.rag_relevance}/10 | Quality: ${node.quality_score}/10\n`;
    header += `Tech Stack: ${(node.tech_stack || []).join(', ')}\n`;
  }
  header += `================================================\n\n`;
  
  return `${header}${content}\n\n=== END VAULT ENTRY ===`;
}

module.exports = {
  getContext,
  injectFile
};
