<p align="center">
  <img src="assets/vault-hero.png" alt="Vybe Intelligence Vault" width="100%">
</p>

<div align="center">

# Vybe Intelligence Vault

An automated, self-reinforcing knowledge repository for AI Engineering, Agentic Workflows, Model Context Protocol (MCP) integrations, RAG architectures, and modern web application development.

[![License](https://img.shields.io/badge/License-MIT-111111?style=flat-square)]()
[![Pipeline Status](https://img.shields.io/badge/Pipeline-Active-1f2937?style=flat-square)]()
[![Update Cycle](https://img.shields.io/badge/Updates-3--Hour%20Interval-374151?style=flat-square)]()
[![Model Protocol](https://img.shields.io/badge/MCP-Integrated-4b5563?style=flat-square)]()

</div>

---

> [!NOTE]
> ### 🌐 [Launch Interactive 3D Web Dashboard (Local: 5173)](http://localhost:5173/)
> Experience the vault in a premium WebGL environment. Paired with dynamic D3-force physical layouts, cylinder shaders, and scroll-driven GSAP camera flight path trajectories.

---

## ── Dossier Overview

The velocity of the AI landscape is unprecedented. Curation of tools, retrieval paradigms, agent protocols, and template architectures requires active synthesis. Vybe Intelligence Vault processes emerging public signals, scoring and indexing repositories using local and cloud LLM evaluations.

---

<!-- VAULT_STATS:START -->

## Vault Stats

| Metric | Count |
|---|---:|
| Resources tracked | 5927 |
| Active resources | 5784 |
| Inactive resources | 143 |
| Archive files | 24571 |
| Archive categories | 35 |
| Builder maps | 8 |
| Learning paths | 8 |
| Build ideas | 8 |
| Best-of guides | 6 |
| Last meaningful update | 2026-06-22 15:59 IST |

### Trend Intelligence Dashboard

#### Trending Resources
- **[Danish privacy activist Lars Andersen raided by police](ai/community/danish-privacy-activist-lars-andersen-raided-by-po.md)** (Rank: +2) (+195 points)
- **[Apertus – Open Foundation Model for Sovereign AI](ai/community/apertus-open-foundation-model-for-sovereign-ai.md)** (+82 points)
- **[Good results fine tuning a local LLM like Qwen 3:0.6B to categorize questions](ai/community/good-results-fine-tuning-a-local-llm-like-qwen-3-0.md)** (+51 points)
- **[JSON-LD explained for personal websites](ai/community/json-ld-explained-for-personal-websites.md)** (+28 points)
- **[PEP 0 – Index of Python Enhancement Proposals (PEPs) | peps.python.org](ai/rag/pep-0-index-of-python-enhancement-proposals-peps-p.md)** (Rank: +125)

#### New Discoveries
- **[Munich 1991: The Roots of the Current AI Boom](ai/community/munich-1991-the-roots-of-the-current-ai-boom.md)** (Score: 53)
- **[Customer Support](ai/resources/customer-support.md)** (Score: 0)
- **[How to Apply for a Federal Funding Opportunity on Grants.gov – Grants.gov Community Blog](ai/resources/how-to-apply-for-a-federal-funding-opportunity-on.md)** (Score: 0)
- **[Tanium Titans Community](ai/resources/tanium-titans-community.md)** (Score: 0)
- **[Solodit](ai/resources/solodit.md)** (Score: 0)

#### Recently Inactive Resources
- **[chopratejas/headroom](ai/rag/chopratejas-headroom.md)**

The stats shown here are generated from the current vault content. They refresh automatically when the bot finds changes.

<!-- VAULT_STATS:END -->

---

## ── Core Architecture (Vault 2.0)

Vybe Vault 2.0 establishes a closed-loop system syncing automated harvesting, local vector inference, and visual analytics:

```mermaid
graph TD
    A[Cron / Dispatch Trigger] -->|1. Discover| B(evaluate_repo.py)
    B -->|2. Evaluate via Cloud/Local LLM| C{Decision Engine}
    C -->|Commit Nodes & Logs| D[vault-core/]
    D -->|3. Trigger push| E(rebuild-index.yml)
    E -->|4. Generate vector coordinates| F[vault-index.json]
    F -->|5. SWR Polling| G[React 3D Intelligence Map]
    H[AI Agent] -->|6. MCP Request| I[Orchestrator HTTP Bridge: 3456]
    I -->|Read & Inject| D
```

### 1. State Management & Event Sourcing
State write-locks (`state.lock`) prevent collision writes. Updates append to `vault-events.log` (JSONL format) while reads leverage a 30s TTL in memory.

*Commented node index updates:*
```javascript
// scripts/state-manager.js
async function updateNode(id, mutations) {
  // Acquire lock using 'wx' flag on state.lock file to prevent collisions
  await acquireLock();
  try {
    const index = readIndex();
    let node = index.nodes.find(n => n.id === id);
    const nowStr = new Date().toISOString();
    
    if (node) {
      // Merge node properties and update modified timestamp
      Object.assign(node, mutations);
      node.last_modified = nowStr;
    } else {
      // Initialize node using the version 2.0 schema structure
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
        access_count: 0,
        last_accessed: ''
      };
      index.nodes.push(node);
    }
    
    // Write out updated index to source of truth and root copy
    writeIndex(index);
    return node;
  } finally {
    // Gracefully release lock file
    releaseLock();
  }
}
```

### 2. Embeddings & Relation Edges
Runs cosine similarity (`sim > 0.75`) using local Ollama (`nomic-embed-text`) to establish semantic edges, combining tag overlap and parsed relative markdown links.

*Commented similarity edge evaluations:*
```javascript
// scripts/build-index.js
// Calculate similarity and tags to dynamically draw edges
const sim = cosineSimilarity(vector1, vector2);
const sharedTags = tags2.filter(t => tags1.has(t));

if (sim > 0.75 || sharedTags.length >= 1) {
  // Select type based on tech stack or category overlaps
  let type = 'similar_to';
  if (sharedTech.length >= 1) type = 'depends_on';
  else if (n1.category === n2.category) type = 'references';
  
  edges.push({
    source: n1.path,
    target: n2.path,
    type,
    weight: parseFloat((sim + sharedTags.length * 0.08).toFixed(2))
  });
}
```

### 3. Agentic Command gateway
Runs concurrently on port `3456` enabling local agents to inject clean prompt contexts dynamically:

*Commented injection formatter:*
```javascript
// scripts/orchestrator/context-injector.js
function injectFile(filePath) {
  const fullPath = path.resolve(ROOT_DIR, filePath);
  
  // Enforce directory boundaries
  if (!fullPath.startsWith(ROOT_DIR)) {
    throw new Error('Access denied: Out of bounds path');
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  // Formats file cleanly for the LLM context window
  let header = `=== VAULT ENTRY: ${filePath} ===\n`;
  header += `================================================\n\n`;
  
  return `${header}${content}\n\n=== END VAULT ENTRY ===`;
}
```

---

## ⚡ Execution Control

Launch local orchestration using the concurrent init script:

```bash
# 1. Start Ollama and download models
ollama pull nomic-embed-text
ollama pull qwen2.5:14b

# 2. Run system init (concurrently runs MCP, Orchestrator, & Web UI)
bash scripts/vault-init.sh
```

Audit system ports, events, and health metrics:
```bash
bash scripts/vault-status.sh
```

---

## 📁 Repository Layout

```txt
.
├── vault-core/
│   ├── config.yaml          # Search topics and token budget limits
│   ├── vault-index.json     # Compiled relation graph (nodes and edges)
│   └── vault-events.log     # Event sourced pipeline ledger
├── intelligence-map/        # React 19 3D visual WebGL dashboard
├── mcp-server/              # FastMCP integration server
├── scripts/
│   ├── orchestrator/        # Context window optimization engines
│   ├── state-manager.js     # Lock-safe state management module
│   ├── build-index.js       # Index compiler and embedding calculator
│   ├── vault-init.sh        # Startup orchestrator daemon
│   └── vault-status.sh      # Service health status query script
└── search-index.md
```

---

## 🤝 Contributing & License

- Submit issues or pull requests conforming to guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).
- Code is released under the **MIT License**. Details available in [LICENSE](LICENSE).
