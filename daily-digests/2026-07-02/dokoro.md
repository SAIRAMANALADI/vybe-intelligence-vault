---
title: "byPawel/dokoro"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js (>=22)", "MCP (Model Context Protocol) TypeScript SDK", "SQLite (Drizzle ORM)", "LanceDB (vector storage)", "Ollama (optional local LLM for embeddings)", "FTS5 (full-text search)", "Reciprocal Rank Fusion (hybrid search)"]
quality_score: 9
rag_relevance: 9
tags: ["agent memory", "multi-layer memory", "MCP server", "coding agents", "bi-temporal facts"]
source: "https://github.com/byPawel/dokoro"
discovered_at: "2026-07-02T10:03:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dokoro is a multi-layer agent memory MCP server designed as a persistent brain for LLM coding agents. It organizes memory into five functional layers (working, episodic, semantic, procedural, and affective) to enable context-aware recall, bi-temporal fact tracking, and tool performance routing across sessions.

## Key Features
- Five distinct memory layers (working, episodic, semantic, procedural, affective) for targeted recall and organization
- Bi-temporal fact tracking with validity windows for time-travel queries over knowledge graphs
- Affective memory system for ranking tool performance using Wilson lower bound and recency decay
- Hybrid search combining SQLite FTS5 and LanceDB vectors for efficient retrieval
- Workspace locking and handoff mechanisms to prevent agent collisions in multi-agent environments

## Why It Matters for RAG Builders
dokoro provides structured, persistent memory and performance-aware tool routing for coding agents, enabling them to resume work intelligently and avoid repeating past mistakes across sessions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=22)
Automated review identified **Node.js (>=22)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) TypeScript SDK
Automated review identified **MCP (Model Context Protocol) TypeScript SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (Drizzle ORM)
Automated review identified **SQLite (Drizzle ORM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB (vector storage)
Automated review identified **LanceDB (vector storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (optional local LLM for embeddings)
Automated review identified **Ollama (optional local LLM for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (full-text search)
Automated review identified **FTS5 (full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (hybrid search)
Automated review identified **Reciprocal Rank Fusion (hybrid search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
