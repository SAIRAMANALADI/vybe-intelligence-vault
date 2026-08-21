---
title: edheltzel/Recall
content_type: repo
engine: v2
category: daily-digests/2026-08-21
tech_stack:
- TypeScript
- SQLite
- Bun
- Model Context Protocol (MCP)
- FTS5 (Full-Text Search)
- Embeddings (Ollama or sqlite-vec)
- Node.js
- CLI Tools
quality_score: 9
rag_relevance: 10
deployment_complexity: Medium
tags:
- persistent memory
- coding agents
- SQLite
- MCP integration
- hybrid search
source: https://github.com/edheltzel/Recall
stars: 3
language: TypeScript
last_updated: '2026-07-15T18:05:59Z'
discovered_at: '2026-07-15T18:06:18Z'
evaluated_by: mistral-small-latest
---

## Summary
Recall is a local-first, SQLite-backed persistent memory layer for coding agents that captures, indexes, and retrieves session data across multiple AI harnesses. It provides hybrid search (FTS5 + embeddings), tiered recall (L0/L1/L2), and MCP tooling for seamless integration with agents like Claude Code, Pi, and OpenCode.

## Key Features
- Local-first SQLite database for zero-infrastructure memory storage with WAL mode and secure permissions
- Hybrid search combining FTS5 keyword search and semantic embeddings (Ollama/sqlite-vec) with Reciprocal Rank Fusion
- Tiered recall system (L0 identity, L1 top-ranked records, L2/L3 on-demand) injected at session start
- Multi-agent compatibility via MCP tools, enabling shared memory across Claude Code, Pi, OpenCode, and future agents
- Structured taxonomy for decisions, learnings, breadcrumbs, and curated Library of Alexandria entries with confidence scoring and lifecycle management

## Why It Matters for RAG Builders
Recall eliminates the critical gap of persistent memory in AI agents by providing a local, searchable, and agent-agnostic memory layer that enhances context retention and decision-making across sessions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (Ollama or sqlite-vec)
Automated review identified **Embeddings (Ollama or sqlite-vec)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
