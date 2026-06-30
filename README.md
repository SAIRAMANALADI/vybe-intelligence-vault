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



## ── Dossier Overview

The velocity of the AI landscape is unprecedented. Curation of tools, retrieval paradigms, agent protocols, and template architectures requires active synthesis. Vybe Intelligence Vault processes emerging public signals, scoring and indexing repositories using local and cloud LLM evaluations.

---

<!-- VAULT_STATS:START -->

<div align="center">
  <h2>📊 Intelligence Analytics Dashboard</h2>
  <p><em>Real-time metrics generated from active vault contents.</em></p>
  
  <table>
    <tr>
      <td align="center">
        <h3>🗄️ Core Storage</h3>
        <p><b>Resources tracked:</b> 10,845</p>
        <p><b>Active:</b> 10,568 | <b>Inactive:</b> 277</p>
      </td>
      <td align="center">
        <h3>📂 Archives & Maps</h3>
        <p><b>Archive Files:</b> 41,358</p>
        <p><b>Builder Maps:</b> 8</p>
      </td>
      <td align="center">
        <h3>⚡ Status</h3>
        <p><b>Last Update:</b> 2026-06-30 10:22 IST</p>
        <p><b>Health:</b> 🟢 Optimal</p>
      </td>
    </tr>
  </table>
</div>

<br/>

### 📈 Trending Signals
> Top rising resources based on momentum and community velocity.

- 🔼 **[.self: A new top-level domain designed to support self-hosting](ai/community/self-a-new-top-level-domain-designed-to-support-se.md)** • <kbd>+244 pts</kbd>
- 🔼 **[Working With AI: A concrete example](ai/community/working-with-ai-a-concrete-example.md)** • <kbd>+55 pts</kbd>
- 🔼 **[psf/requests](ai/resources/psf-requests.md)** • Rank: <kbd>+1610</kbd>
- 🔼 **[NVIDIA Documentation Hub - NVIDIA Docs](ai/rag/nvidia-documentation-hub-nvidia-docs.md)** • Rank: <kbd>+3445</kbd>
- 🔼 **[Alabaster: a Sphinx theme — Alabaster documentation](ai/resources/alabaster-a-sphinx-theme-alabaster-documentation.md)** • Rank: <kbd>+319</kbd>

### 🌟 New Discoveries
> Fresh intelligence recently indexed into the vault.

- 🆕 **[Developer Guides — Twisted 25.5.0 documentation](ai/rag/developer-guides-twisted-25-5-0-documentation.md)** • Score: `0`
- 🆕 **[Models | Django documentation | Django](ai/rag/models-django-documentation-django.md)** • Score: `0`
- 🆕 **[twisted/twisted](ai/resources/twisted-twisted.md)** • Score: `0`
- 🆕 **[Twisted Web In 60 Seconds — Twisted 25.5.0 documentation](ai/resources/twisted-web-in-60-seconds-twisted-25-5-0-documenta.md)** • Score: `0`
- 🆕 **[django/django](ai/rag/django-django.md)** • Score: `0`

### 💤 Recently Inactive
> Resources showing declined activity or relevance.

- 💤 **[Ornith-1.0: Self-scaffolding LLMs for agentic coding](ai/community/ornith-1-0-self-scaffolding-llms-for-agentic-codin.md)**

The stats shown here are generated from the current vault content. They refresh automatically when the bot finds changes.

<!-- Automated Stats Injection Block -->

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
