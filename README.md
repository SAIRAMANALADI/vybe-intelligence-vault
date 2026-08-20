<div align="center">

[![Vybe Intelligence Vault](https://github.com/sairaman436/vybe-intelligence-vault/raw/main/assets/vault-hero.png)](https://github.com/sairaman436/vybe-intelligence-vault)

# `vybe-intelligence-vault`

**Automated knowledge harvesting for AI engineers.**  
Scrapes. Scores. Commits. Every 3 hours. Zero manual effort.

[![License: MIT](https://img.shields.io/badge/License-MIT-111111?style=flat-square)](./LICENSE)
[![Pipeline](https://img.shields.io/github/actions/workflow/status/sairaman436/vybe-intelligence-vault/harvester-core.yml?style=flat-square&label=Pipeline)](https://github.com/sairaman436/vybe-intelligence-vault/actions)
[![Resources](https://img.shields.io/badge/Resources%20Indexed-244%2C470-1f2937?style=flat-square)](#)
[![MCP Ready](https://img.shields.io/badge/MCP-Agent%20Ready-4b5563?style=flat-square)](./mcp-server)
[![Last Sync](https://img.shields.io/badge/Last%20Sync-2026--08--20-374151?style=flat-square)](#)

[Overview](#-overview) · [How It Works](#-how-it-works) · [Architecture](#-architecture) · [Quick Start](#-quick-start) · [Vault Stats](#-vault-stats) · [Contributing](#-contributing)

</div>

---

## 📌 Overview

Most AI knowledge bases go stale the moment you stop updating them. Vybe Intelligence Vault doesn't — it runs itself.

A GitHub Actions pipeline wakes up every 3 hours, discovers emerging AI/ML resources, evaluates them with an LLM scoring engine, and commits the ranked results back into the repo. No human in the loop. No manual curation.

The result: a self-reinforcing knowledge graph of **244,470 indexed resources** spanning AI agents, RAG architectures, MCP servers, and modern web tooling — always current, always queryable by local agents via an HTTP gateway.

**Built for:** AI engineers who want a living knowledge base they can plug into agentic workflows, not a static awesome-list that someone forked two years ago.

---

## ⚙️ How It Works

```
Every 3 hours:

  GitHub Actions Cron
       │
       ▼
  evaluate_repo.py          ← discovers candidate resources from configured topics
       │
       ▼
  LLM Scoring Engine        ← qwen2.5:14b (local) or cloud fallback
       │  scores: quality, rag_relevance, tech_stack match
       ▼
  vault-core/               ← ranked .md files committed back to repo
       │
       ├─▶ rebuild-index.yml  ← triggers on push
       │         │
       │         ▼
       │   nomic-embed-text   ← local Ollama embeddings
       │         │
       │         ▼
       │   vault-index.json   ← semantic node/edge graph (cosine sim > 0.75)
       │         │
       │         ▼
       │   React 3D Map       ← WebGL intelligence visualization (SWR polling)
       │
       └─▶ Orchestrator :3456 ← MCP gateway for agent context injection
```

### Scoring Pipeline

Each resource is evaluated across 4 dimensions:

| Signal | Method |
|---|---|
| Content quality | LLM pass via `qwen2.5:14b` / cloud fallback |
| RAG relevance | Keyword + semantic scoring |
| Community velocity | Stars delta, fork rate |
| Tech stack match | Tag overlap with `config.yaml` topics |

### Semantic Graph

Embeddings via `nomic-embed-text` (Ollama). Two nodes are linked if:
- Cosine similarity `> 0.75` → `similar_to`
- Shared tech stack → `depends_on`  
- Same category + shared tags → `references`

Edge weight = `cosine_sim + (shared_tags × 0.08)`

### MCP Gateway

HTTP bridge on `:3456`. Send a vault file path → receive a clean, LLM-formatted context block. Agents can pull any resource into their context window without reading the filesystem directly.

```bash
# Example agent request
curl -X POST http://localhost:3456/inject \
  -d '{"path": "ai/agents/tool-use-patterns.md"}'
```

---

## 🏗 Architecture

```mermaid
graph TD
    A[⏰ Cron / Dispatch Trigger] -->|every 3h| B(evaluate_repo.py)
    B -->|LLM score| C{Decision Engine}
    C -->|pass threshold| D[vault-core/]
    C -->|reject| X[❌ Discarded]
    D -->|git push| E(rebuild-index.yml)
    E -->|nomic-embed-text| F[vault-index.json]
    F -->|SWR poll| G[🌐 React 3D Map]
    H[🤖 AI Agent] -->|MCP request| I[Orchestrator :3456]
    I -->|read + format| D

    style A fill:#1f2937,color:#e5e7eb
    style D fill:#111827,color:#e5e7eb
    style G fill:#1f2937,color:#e5e7eb
    style H fill:#374151,color:#e5e7eb
```

### Key Design Decisions

**Write-lock state management** — `state.lock` prevents collision writes when multiple pipeline jobs run concurrently. All mutations are append-only to `vault-events.log` (JSONL). In-memory reads use a 30s TTL. → [`scripts/state-manager.js`](./scripts/state-manager.js)

**Hybrid inference** — Pipeline tries local Ollama first (zero cost, no rate limits). Falls back to cloud LLM if Ollama is unavailable. Scoring is deterministic via fixed seed. → [`scripts/evaluate_repo.py`](./scripts/evaluate_repo.py)

**Bot commits on heatmap** — Git identity configured so automated commits register on the contribution graph. Pipeline runs as `vybe-bot` with a PAT scoped to `repo` only. → [`.github/workflows/harvester.yml`](./.github/workflows/harvester.yml)

---

## 🚀 Quick Start

### Prerequisites

- [Ollama](https://ollama.com) installed and running
- Node.js 18+
- Python 3.10+

### Setup

```bash
# Clone
git clone https://github.com/sairaman436/vybe-intelligence-vault.git
cd vybe-intelligence-vault

# Pull required models
ollama pull nomic-embed-text   # embeddings
ollama pull qwen2.5:14b        # scoring

# Install dependencies
npm install
pip install -r requirements.txt

# Start everything (MCP server + orchestrator + web UI)
bash scripts/vault-init.sh
```

### Verify

```bash
# Check service health, ports, and event log
bash scripts/vault-status.sh
```

Open `http://localhost:3000` for the 3D intelligence map.

### Configure Topics

Edit `vault-core/config.yaml` to control what gets harvested:

```yaml
topics:
  - ai-agents
  - rag-architectures
  - mcp-servers
  - llm-inference
  - next-gen-web

token_budget: 4096
score_threshold: 0.65
```

---

<!-- VAULT_STATS:START -->

<div align="center">
  <h2>📊 Intelligence Analytics Dashboard</h2>
  <p><em>Real-time metrics generated from active vault contents.</em></p>
  
  <table>
    <tr>
      <td align="center">
        <h3>🗄️ Core Storage</h3>
        <p><b>Resources tracked:</b> 22,629</p>
        <p><b>Active:</b> 21,959 | <b>Inactive:</b> 670</p>
      </td>
      <td align="center">
        <h3>📂 Archives & Maps</h3>
        <p><b>Archive Files:</b> 85,417</p>
        <p><b>Builder Maps:</b> 8</p>
      </td>
      <td align="center">
        <h3>⚡ Status</h3>
        <p><b>Total Vault Size:</b> 244,470 files</p>
        <p><b>Last Update:</b> 2026-08-20 09:50 IST</p>
        <p><b>Health:</b> 🟢 Optimal</p>
      </td>
    </tr>
  </table>
</div>

<br/>

### 📈 Trending Signals
> Top rising resources based on momentum and community velocity.

- 🔼 **[Google replaced Git tags for certain source code with obtaining via Google Drive](ai/community/google-replaced-git-tags-for-certain-source-code-w.md)** • <kbd>+53 pts</kbd>
- 🔼 **[A joke domain purchase turned in geopolitical warfare](ai/community/a-joke-domain-purchase-turned-in-geopolitical-warf.md)** • <kbd>+35 pts</kbd>
- 🔼 **[Feature Request: Support AGENTS.md](ai/community/anthropics-claude-code.md)** • <kbd>+26 pts</kbd>
- 🔼 **[Extensible Software in the age of LLMs](ai/community/extensible-software-in-the-age-of-llms.md)** • <kbd>+14 pts</kbd>
- 🔼 **[Air Theremin – A browser theremin you play by waving at your webcam](ai/community/air-theremin-a-browser-theremin-you-play-by-waving.md)** • <kbd>+11 pts</kbd>

### 🌟 New Discoveries
> Fresh intelligence recently indexed into the vault.

- 🆕 **[Complete, Scalable, and Robust Prioritized Planning for Multi-Robot Ordered Storage and Retrieval at Maximum Capacity](ai/rag/arxiv-2608-07734.md)** • Score: `0`
- 🆕 **[First-Token Broadcasters: Mechanistic Origins of Language Identity and Distributed Robustness in Transformers](ai/research/arxiv-2606-22361.md)** • Score: `0`
- 🆕 **[Hybrid ANN-SNN Pipeline with Local Plasticity](ai/rag/arxiv-2606-20151.md)** • Score: `0`
- 🆕 **[DELOS: Contrastive Deep Learning for Low-SNR Blind Transit Searches in Kepler Photometry](ai/research/arxiv-2605-29428.md)** • Score: `0`
- 🆕 **[ICICLE: Expanding Retrieval with In-Context Documents](ai/research/arxiv-2605-26902.md)** • Score: `0`

### 💤 Recently Inactive
> Resources showing declined activity or relevance.

- None.

The stats shown here are generated from the current vault content. They refresh automatically when the bot finds changes.

<!-- Automated Stats Injection Block -->

<!-- VAULT_STATS:END -->

---

## 📚 Learning Paths & Builder Maps

The vault includes curated paths and essential guides to help you build faster:

### 8 Learning Paths
* [7-Day Agent Builder](learning-paths/7-day-agent-builder.md)
* [7-Day AI Engineering](learning-paths/7-day-ai-engineering.md)
* [7-Day AI Frontend](learning-paths/7-day-ai-frontend.md)
* [7-Day AI SaaS Builder](learning-paths/7-day-ai-saas-builder.md)
* [7-Day Automation Builder](learning-paths/7-day-automation-builder.md)
* [7-Day LLMOps](learning-paths/7-day-llmops.md)
* [7-Day MCP Builder](learning-paths/7-day-mcp-builder.md)
* [7-Day RAG Builder](learning-paths/7-day-rag-builder.md)

### 6 Best-Of Guides
* [Essential 3D WebDev](workspace-archive/best-of/essential-3d-webdev.md)
* [Essential Agent Building](workspace-archive/best-of/essential-agent-building.md)
* [Essential AI Engineering](workspace-archive/best-of/essential-ai-engineering.md)
* [Essential Automation](workspace-archive/best-of/essential-automation.md)
* [Essential Frontend AI UI](workspace-archive/best-of/essential-frontend-ai-ui.md)
* [Essential RAG Stack](workspace-archive/best-of/essential-rag-stack.md)

---

## 📁 Repository Layout

```
vybe-intelligence-vault/
├── .github/
│   └── workflows/
│       ├── harvester.yml        # Main 1h cron pipeline
│       └── rebuild-index.yml    # Triggered on vault-core/ push
│
├── vault-core/
│   ├── config.yaml              # Topics, token budgets, score thresholds
│   ├── vault-index.json         # Compiled semantic node/edge graph
│   └── vault-events.log         # Append-only JSONL event ledger
│
├── intelligence-map/            # React 19 + WebGL 3D dashboard
│
├── mcp-server/                  # FastMCP integration server
│
├── scripts/
│   ├── evaluate_repo.py         # Resource discovery + LLM scoring
│   ├── orchestrator/
│   │   └── context-injector.js  # MCP context formatter
│   ├── state-manager.js         # Lock-safe state writes
│   ├── build-index.js           # Embedding + edge compiler
│   ├── vault-init.sh            # Startup daemon (concurrent)
│   └── vault-status.sh          # Port + health diagnostics
│
├── ai/                          # Indexed resources by category
│   ├── agents/
│   ├── rag/
│   ├── models/
│   └── mcp/
│
└── search-index.md              # Flat searchable index
```

---

## 🗺 Roadmap

- [ ] Vector search API over `vault-index.json` (FastAPI endpoint)
- [ ] Discord/Slack bot that answers "what's new in RAG this week?"
- [ ] Contributor scoring — track who surfaces the highest-value resources
- [ ] Export to Obsidian vault format
- [ ] GitHub App so others can run their own vault instance

---

## 🤝 Contributing

PRs welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

```bash
# Run the scoring pipeline locally against a single URL
python scripts/evaluate_repo.py --url https://github.com/your/repo --dry-run
```

Bug reports → [open an issue](https://github.com/sairaman436/vybe-intelligence-vault/issues)  
MIT License — see [LICENSE](./LICENSE)

---

<div align="center">
<sub>Built by <a href="https://github.com/sairaman436">@sairaman436</a> · Auto-updating since 2026</sub>
</div>
