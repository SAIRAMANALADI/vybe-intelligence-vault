---
title: "sachitrafa/YourMemory"
category: "Agent Framework"
tech_stack: ["Python", "SQLite/DuckDB/Postgres", "Ollama (local LLM)", "NetworkX/Neo4j (graph backend)", "FastAPI (MCP server)", "Pydantic", "spaCy", "pgvector (Postgres extension)"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "Ebbinghaus forgetting curve", "hybrid retrieval", "MCP integration", "agentic AI"]
source: "https://github.com/sachitrafa/YourMemory"
discovered_at: "2026-07-02T19:21:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
YourMemory is a persistent memory layer for AI agents that mimics human cognition using an Ebbinghaus forgetting curve for memory decay, entity graph connections, and hybrid retrieval (vector + graph + BM25). It integrates seamlessly with MCP clients like Claude or Cursor and supports zero-infrastructure SQLite/DuckDB or Postgres deployments.

## Key Features
- Memory decay modeled on human forgetting curves for natural pruning of stale context
- Hybrid retrieval combining vector search, BM25, and entity graph traversal for superior recall
- Zero-infrastructure SQLite/DuckDB or scalable Postgres backend with pgvector support
- MCP tools for recall, store, and update memory with spatial and temporal context awareness
- API proxy for guaranteed memory injection in LLM calls without client-side configuration

## Why It Matters for RAG Builders
YourMemory provides a critical persistent memory layer for RAG/AI agents, enabling long-term context retention with biologically inspired decay and hybrid retrieval, significantly improving recall accuracy over traditional vector-only systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite/DuckDB/Postgres
Automated review identified **SQLite/DuckDB/Postgres** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local LLM)
Automated review identified **Ollama (local LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NetworkX/Neo4j (graph backend)
Automated review identified **NetworkX/Neo4j (graph backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (MCP server)
Automated review identified **FastAPI (MCP server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spaCy
Automated review identified **spaCy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector (Postgres extension)
Automated review identified **pgvector (Postgres extension)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
