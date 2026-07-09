---
title: "jungjaehoon-lifegamez/MAMA"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js (>=22)", "SQLite", "Embeddings (1024-dim)", "React (Viewer UI)", "CLI Subprocesses (Claude Code, Codex)", "MCP (Model Context Protocol)", "GraphQL", "JWT", "Docker (optional)"]
quality_score: 9
rag_relevance: 9
tags: ["local memory", "knowledge graph", "agent context", "evidence-based reasoning", "provenance tracking"]
source: "https://github.com/jungjaehoon-lifegamez/MAMA"
discovered_at: "2026-07-09T19:31:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MAMA OS is a local-first operating memory substrate for AI agents that continuously ingests, structures, and exposes company records (emails, Slack, docs, etc.) as a searchable, auditable knowledge graph. It enables agents to cite raw evidence, reconstruct timelines, and operate within explicit permission boundaries.

## Key Features
- Local-first memory substrate with SQLite + embeddings for raw evidence storage and retrieval
- Runtime envelopes with signed scope, expiry, and destination limits to enforce permission boundaries
- Context Compile V0 for compiling raw evidence into auditable, cited evidence packets for agents
- 15+ connectors (Slack, Gmail, Trello, Obsidian, etc.) for continuous data ingestion
- Provenance ledger tracking memory writes, model runs, tool traces, and source refs for auditability

## Why It Matters for RAG Builders
MAMA OS provides the critical substrate for RAG/AI agents to access bounded, auditable company memory instead of fragmented prompts, enabling cited reasoning and safer decision-making.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=22)
Automated review identified **Node.js (>=22)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (1024-dim)
Automated review identified **Embeddings (1024-dim)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Viewer UI)
Automated review identified **React (Viewer UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Subprocesses (Claude Code, Codex)
Automated review identified **CLI Subprocesses (Claude Code, Codex)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
