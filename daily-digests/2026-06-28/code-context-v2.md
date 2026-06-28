---
title: "enzodevs/code-context-v2"
category: "Vector DB"
tech_stack: ["Python", "PostgreSQL/pgvector", "LanceDB", "SQLite", "tree-sitter", "Voyage AI", "Rerank-2.5", "Docker", "CLI", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
tags: ["semantic code search", "AST-aware indexing", "hybrid retrieval", "agent context engine", "local-first storage"]
source: "https://github.com/enzodevs/code-context-v2"
discovered_at: "2026-06-28T22:02:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Code Context V2 (CC2) is a context engine designed to provide coding agents with precise, agent-ready context by indexing codebases, project memory, and technical literature. It uses AST-aware chunking, hybrid retrieval (dense vectors + lexical + exact symbols), and reranking to deliver compact, relevant code snippets for agent workflows.

## Key Features
- AST-native indexing for 10+ languages (TypeScript, Python, Java, etc.) with symbol-level chunks
- Hybrid retrieval combining dense vectors, lexical search, and exact symbol matches with reciprocal-rank fusion
- Project-aware sync with incremental updates, dry-run checks, and file watchers
- Multiple backend support (PostgreSQL/pgvector, LanceDB, SQLite) for local-first storage
- Agent-shaped output with token budgets, intent controls, graph expansion, and JSON mode

## Why It Matters for RAG Builders
CC2 provides the critical middle path between noisy full-repo context and literal grep searches, enabling AI agents to retrieve precise, relevant code snippets with minimal token overhead for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL/pgvector
Automated review identified **PostgreSQL/pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Voyage AI
Automated review identified **Voyage AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rerank-2.5
Automated review identified **Rerank-2.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
