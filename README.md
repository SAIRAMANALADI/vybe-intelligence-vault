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
        <p><b>Resources tracked:</b> 9,300</p>
        <p><b>Active:</b> 9,041 | <b>Inactive:</b> 259</p>
      </td>
      <td align="center">
        <h3>📂 Archives & Maps</h3>
        <p><b>Archive Files:</b> 35,213</p>
        <p><b>Builder Maps:</b> 8</p>
      </td>
      <td align="center">
        <h3>⚡ Status</h3>
        <p><b>Last Update:</b> 2026-06-29 04:02 IST</p>
        <p><b>Health:</b> 🟢 Optimal</p>
      </td>
    </tr>
  </table>
</div>

<br/>

### 📈 Trending Signals
> Top rising resources based on momentum and community velocity.

- 🔼 **[Librepods: AirPods liberated](ai/community/librepods-org-librepods.md)** • <kbd>+185 pts</kbd> • Rank: <kbd>+4</kbd>
- 🔼 **[Working around dragons with the Lemote Yeeloong laptop and OpenBSD](ai/community/working-around-dragons-with-the-lemote-yeeloong-la.md)** • <kbd>+22 pts</kbd>
- 🔼 **[A way to exclude sensitive files issue still open for OpenAI Codex](ai/community/openai-codex.md)** • <kbd>+16 pts</kbd>
- 🔼 **[Computer-Aided Language Development in Nonspeaking Children (1968) [pdf]](ai/community/computer-aided-language-development-in-nonspeaking.md)** • <kbd>+10 pts</kbd>
- 🔼 **[Overview - Knative](ai/rag/overview-knative.md)** • Rank: <kbd>+971</kbd>

### 🌟 New Discoveries
> Fresh intelligence recently indexed into the vault.

- 🆕 **[Daisugi, the Japanese technique of growing trees out of other trees (2020)](ai/community/daisugi-the-japanese-technique-of-trees-out-of-tre.md)** • Score: `87`
- 🆕 **[Professor denounces mass AI fraud on an exam at Brown](ai/community/professor-denounces-mass-ai-fraud-on-an-exam-at-br.md)** • Score: `82`
- 🆕 **[Do LLMs pass the mirror test?](ai/community/do-llms-pass-the-mirror-test.md)** • Score: `19`
- 🆕 **[Show HN: Bash4LLM+ – A lightweight, dependency-free Bash wrapper for LLM APIs](ai/community/kamaludu-bash4llm.md)** • Score: `15`
- 🆕 **[Gemini Enterprise app: Best of Google AI for Business | Google Cloud](ai/rag/gemini-enterprise-app-best-of-google-ai-for-busine.md)** • Score: `0`

### 💤 Recently Inactive
> Resources showing declined activity or relevance.

- 💤 **[Ford rehires 'gray beard' engineers after AI falls short](ai/community/ford-rehires-gray-beard-engineers-after-ai-falls-s.md)**

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
