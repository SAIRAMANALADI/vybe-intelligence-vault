---
title: "andrii-su/organon"
category: "Orchestrator"
tech_stack: ["Rust", "Python 3.12+", "SQLite", "LanceDB", "fastembed", "Model Context Protocol (MCP)", "notify", "tokio", "ruff", "pyarrow"]
quality_score: 9
rag_relevance: 10
tags: ["semantic filesystem", "MCP server", "local-first", "AI agent tooling", "knowledge graph"]
source: "https://github.com/andrii-su/organon"
discovered_at: "2026-07-07T23:55:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Organon is a local-first semantic filesystem layer that transforms raw files into a structured knowledge graph for AI agents. It provides stable identities, lifecycle tracking, relationship graphs, and semantic search capabilities over the Model Context Protocol (MCP).

## Key Features
- Stable file identities with UUIDs and lifecycle states (Born → Active → Dormant → Archived → Dead)
- Semantic and full-text search over files with hybrid retrieval modes
- Relationship graph for imports, dependencies, and impact analysis
- MCP server integration for real-time agent queries over stdio or HTTP/SSE
- 100% local execution with SQLite for graph storage and LanceDB for vectors

## Why It Matters for RAG Builders
Organon provides AI agents with structured, contextual filesystem awareness, eliminating blind file operations and enabling intelligent, dependency-aware task execution.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed
Automated review identified **fastembed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### notify
Automated review identified **notify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tokio
Automated review identified **tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyarrow
Automated review identified **pyarrow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
