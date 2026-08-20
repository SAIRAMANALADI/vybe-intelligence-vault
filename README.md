<div align="center">

# 🌌 VYBE INTELLIGENCE VAULT
### *The Autonomous Knowledge Graph for AI Engineers & Agentic Systems*

<p align="center">
  <b>A living, self-synthesizing intelligence repository indexing the frontier of AI Agents, RAG Architectures, MCP Tooling, and LLM Engineering.</b>
</p>

<p align="center">
  <a href="https://github.com/sairaman436/vybe-intelligence-vault/actions"><img src="https://img.shields.io/github/actions/workflow/status/sairaman436/vybe-intelligence-vault/harvester.yml?style=for-the-badge&label=INTELLIGENCE%20PIPELINE&color=10b981&logo=githubactions&logoColor=white" alt="Pipeline Status" /></a>
  <a href="#"><img src="https://img.shields.io/badge/INDEXED%20NODES-160%2C000%2B-8b5cf6?style=for-the-badge&logo=databricks&logoColor=white" alt="Indexed Nodes" /></a>
  <a href="./mcp-server"><img src="https://img.shields.io/badge/MCP%20SERVER-AGENT%20NATIVE-ec4899?style=for-the-badge&logo=anthropic&logoColor=white" alt="MCP Server" /></a>
  <a href="./world"><img src="https://img.shields.io/badge/3D%20GRAPH-WEBGL%20LIVE-0ea5e9?style=for-the-badge&logo=three.js&logoColor=white" alt="3D WebGL" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-22c55e?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <a href="#-the-manifesto"><b>Manifesto</b></a> •
  <a href="#-core-architecture"><b>Architecture</b></a> •
  <a href="#-mcp-agent-integration"><b>MCP Integration</b></a> •
  <a href="#-3d-spatial-graph-explorer"><b>3D Graph</b></a> •
  <a href="#-cognitive-taxonomy"><b>Taxonomy</b></a> •
  <a href="#-production-blueprints--sprints"><b>Blueprints</b></a> •
  <a href="#-quick-start"><b>Quick Start</b></a>
</p>

</div>

---

## ⚡ The Manifesto

> **Static "Awesome Lists" are dead.** They rot the day after they are curated, filled with abandoned forks, broken links, and yesterday's hype.

**Vybe Intelligence Vault is an autonomous, self-evolving intelligence engine.**

Powered by a distributed harvesting mesh and multi-model LLM evaluators, the vault continuously monitors global AI research, repository ecosystems, technical disclosures, and foundation model releases. It extracts core architecture patterns, filters out boilerplate noise, calculates multidimensional quality scores, constructs semantic vector graphs, and publishes production-grade intelligence nodes directly into this repository.

No manual curation. No stale archives. Just clean, queryable, high-signal intelligence for modern AI builders.

---

## 🏛️ Core Architecture

The vault operates as an end-to-end autonomous intelligence lifecycle:

```
                                  ┌───────────────────────────────┐
                                  │   GLOBAL INTELLIGENCE MESH    │
                                  │ ArXiv • HuggingFace • GitHub │
                                  │   Tech Blogs • PapersWithCode │
                                  └───────────────┬───────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │        DISTRIBUTED HARVESTING PIPELINE            │
                        │ • Rate-adaptive scrapers & canonical deduplication│
                        │ • Jaccard semantic matching & PII sanitization    │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │          COGNITIVE EVALUATION ENGINE              │
                        │ • Multi-model LLM verification & scoring (1-10)   │
                        │ • RAG relevance, tech stack, and complexity audit │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                                  ▼
                        ┌───────────────────────────────────────────────────┐
                        │          SEMANTIC GRAPH RECONSTRUCTION            │
                        │ • Vector embedding pass over all active nodes     │
                        │ • Bidirectional relationship synthesis:           │
                        │   [similar_to] • [depends_on] • [references]      │
                        │ • Generates optimized: vault-index.json           │
                        └─────────────────────────┬─────────────────────────┘
                                                  │
                                  ┌───────────────┴───────────────┐
                                  │                               │
                                  ▼                               ▼
                    ┌───────────────────────────┐   ┌───────────────────────────┐
                    │    🌐 3D SPATIAL GRAPH    │   │    🤖 NATIVE MCP GATEWAY   │
                    │ React 19 • R3F • WebGL    │   │ Claude • Cursor • Swarms  │
                    │ Real-time cluster viewer  │   │ Direct context injection  │
                    └───────────────────────────┘   └───────────────────────────┘
```

---

## 🤖 MCP Agent Integration

The vault is built from the ground up for the **Model Context Protocol (MCP)**. Your AI coding assistants (Claude Desktop, Cursor, Windsurf, LangGraph agents) can interface with 160,000+ intelligence nodes without reading raw files or cloning full repositories.

```
                  ┌─────────────────┐       MCP Tool Call       ┌────────────────────────┐
                  │  Claude/Cursor  │ ───────────────────────▶ │  Vault FastMCP Gateway │
                  │  Agent Assistant│ ◀─────────────────────── │   (Port :3456 / stdio) │
                  └─────────────────┘     LLM Context Block     └───────────┬────────────┘
                                                                            │
                                                                            ▼
                                                                ┌────────────────────────┐
                                                                │  vault-index.json      │
                                                                │  Semantic Node Matrix  │
                                                                └────────────────────────┘
```

### 1. Claude Desktop Integration
Add the vault to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "vybe-vault": {
      "command": "node",
      "args": ["/path/to/vybe-intelligence-vault/mcp-server/index.js"]
    }
  }
}
```

### 2. Cursor IDE Integration
In `.cursor/mcp.json` or `.cursorrules`:

```json
{
  "mcpServers": {
    "intelligence-vault": {
      "command": "node",
      "args": ["scripts/orchestrator/context-injector.js"]
    }
  }
}
```

### 3. Programmatic Context Gateway
Query node contexts directly from any agentic runtime:

```bash
curl -X POST http://localhost:3456/inject \
  -H "Content-Type: application/json" \
  -d '{"path": "ai/agents/vostride-agent-qa.md"}'
```

---

## 🌐 3D Spatial Graph Explorer

Experience knowledge exploration in full 3D. The vault includes an interactive WebGL knowledge constellation built with **React 19**, **React Three Fiber (R3F)**, **Drei**, and **GSAP**:

- **Real-Time Force Clustering**: Nodes group organically based on vector similarity and shared technologies.
- **Instant Search & Command Palette**: Press <kbd>Cmd</kbd> + <kbd>K</kbd> to jump between 160,000+ nodes instantly.
- **Level of Detail (LOD) Proximity Rendering**: Smooth, high-performance rendering of dense node graphs.

```bash
# Launch the 3D visualizer locally
cd intelligence-map
npm install
npm run dev
```

---

## 🧠 Cognitive Taxonomy

The vault categorizes the AI landscape into high-impact engineering sectors:

<table>
  <tr>
    <th width="25%">Sector</th>
    <th width="50%">Focus Areas</th>
    <th width="25%">Primary Directory</th>
  </tr>
  <tr>
    <td><b>🤖 AI Agents</b></td>
    <td>Autonomous loops, tool calling, memory persistence, multi-agent swarms, ReAct architectures.</td>
    <td><code>ai/agents/</code></td>
  </tr>
  <tr>
    <td><b>🔍 RAG Systems</b></td>
    <td>GraphRAG, hybrid retrieval, vector indices, semantic caching, rerankers, contextual embeddings.</td>
    <td><code>ai/rag/</code></td>
  </tr>
  <tr>
    <td><b>🔌 MCP Protocols</b></td>
    <td>Model Context Protocol servers, stdio bridges, agent tools, local context adapters.</td>
    <td><code>mcp-server/</code></td>
  </tr>
  <tr>
    <td><b>⚡ Inference & Ops</b></td>
    <td>vLLM, TensorRT-LLM, Ollama, quantization (GGUF, EXL2), structured outputs, edge runtimes.</td>
    <td><code>ai/models/</code></td>
  </tr>
  <tr>
    <td><b>🔬 Breakthroughs</b></td>
    <td>High-impact preprints, frontier model papers, evaluation benchmarks, architectural disclosures.</td>
    <td><code>ai/research/</code></td>
  </tr>
</table>

---

## 🎓 Production Blueprints & Sprints

Accelerate your engineering lifecycle with curated execution plans and system architectures:

### 🚀 8 Accelerated 7-Day Sprints
| Track | Focus | Blueprint |
|---|---|:---:|
| **Agent Engineering** | Multi-agent coordination, tool execution & self-correction | [7-Day Agent Builder](learning-paths/7-day-agent-builder.md) |
| **Foundation Engineering** | Fine-tuning, quantization, evaluations & synthetic data | [7-Day AI Engineering](learning-paths/7-day-ai-engineering.md) |
| **Generative Frontend** | Real-time streaming UI, visual agents & WebGL interfaces | [7-Day AI Frontend](learning-paths/7-day-ai-frontend.md) |
| **Enterprise SaaS** | Multi-tenant RAG, billing integration & tenant security | [7-Day AI SaaS Builder](learning-paths/7-day-ai-saas-builder.md) |
| **Pipeline Automation** | Fault-tolerant workers, scheduled triggers & resilience | [7-Day Automation Builder](learning-paths/7-day-automation-builder.md) |
| **Production LLMOps** | Tracing, telemetry, semantic caching & cost controls | [7-Day LLMOps](learning-paths/7-day-llmops.md) |
| **MCP Tool Authoring** | Protocol server development, stdio clients & tools | [7-Day MCP Builder](learning-paths/7-day-mcp-builder.md) |
| **Advanced RAG** | Hierarchical chunking, hybrid vector search & reranking | [7-Day RAG Builder](learning-paths/7-day-rag-builder.md) |

### 🛠️ 6 Production Stacks
- 🌐 [Essential 3D WebDev Blueprint](workspace-archive/best-of/essential-3d-webdev.md)
- 🤖 [Essential Agent Building Blueprint](workspace-archive/best-of/essential-agent-building.md)
- 🧠 [Essential AI Engineering Blueprint](workspace-archive/best-of/essential-ai-engineering.md)
- ⚙️ [Essential Automation Blueprint](workspace-archive/best-of/essential-automation.md)
- 💻 [Essential Frontend AI UI Blueprint](workspace-archive/best-of/essential-frontend-ai-ui.md)
- 📚 [Essential RAG Stack Blueprint](workspace-archive/best-of/essential-rag-stack.md)

---

## 🚀 Quick Start

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/sairaman436/vybe-intelligence-vault.git
cd vybe-intelligence-vault

# Install workspace dependencies
npm install
pip install -r requirements.txt
```

### 2. Verify Pipeline Health
```bash
# Execute local smoke tests across state manager & decision engines
node scripts/test-smoke.js
```

### 3. Rebuild the Knowledge Graph
```bash
# Recompute vector similarity edges & synchronize React assets
node scripts/build-index.js
```

---

## 📁 Repository Map

```
vybe-intelligence-vault/
├── .github/workflows/          # Continuous autonomous harvesting workflows
├── daily-digests/              # Date-indexed intelligence records (YYYY-MM-DD)
├── ai/                         # Curated domain knowledge nodes
│   ├── agents/                 # Multi-agent architectures & frameworks
│   ├── rag/                    # Retrieval & vector systems
│   ├── models/                 # Open-weight models & quantization
│   └── research/               # Cutting-edge papers & preprints
├── learning-paths/             # 7-day engineering sprint blueprints
├── maps/                       # System architecture maps
├── skills/                     # Domain capability checklists
├── mcp-server/                 # Native FastMCP server implementation
├── intelligence-map/           # React 19 + Three.js 3D WebGL explorer
├── scripts/                    # Harvesting, state management & graph compilers
└── vault-index.json            # Master semantic knowledge graph
```

---

## 🤝 Submitting Intelligence

Have you built or discovered a breakthrough AI library, paper, tool, or MCP server?

- **Submit a Candidate**: Open an issue using our [Resource Suggestion Template](https://github.com/sairaman436/vybe-intelligence-vault/issues/new?template=resource-suggestion.yml).
- **Autonomous Review**: Submitted repositories are verified, evaluated by the pipeline, and integrated into the global graph index upon approval.

---

<div align="center">

**[Vybe Intelligence Vault](https://github.com/sairaman436/vybe-intelligence-vault)** • Engineered by <a href="https://github.com/sairaman436">@sairaman436</a>

*Autonomous Intelligence Infrastructure for the Agentic Era.*

</div>
