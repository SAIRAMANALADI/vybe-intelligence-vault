---
title: "n24q02m/mnemo-mcp"
category: "Agent Framework"
tech_stack: ["Python", "SQLite", "SQLite-vec", "MCP (Model Context Protocol)", "ONNX Runtime", "Qwen3", "FastAPI", "Docker", "GitHub Actions", "semantic-release", "Renovate"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "hybrid search", "knowledge graph", "multi-machine sync", "LLM compression"]
source: "https://github.com/n24q02m/mnemo-mcp"
discovered_at: "2026-07-05T13:25:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemo MCP Server provides persistent AI memory with hybrid search, embedded sync, and a temporal knowledge graph. It enables AI agents to capture, store, and retrieve contextual memories with advanced features like entity resolution, LLM-driven compression, and multi-machine sync.

## Key Features
- Hybrid retrieval combining FTS5 and vector search with Reciprocal Rank Fusion (RRF) and cross-encoder reranking
- Temporal knowledge graph with bitemporal columns and entity resolution via embedding KNN
- LLM-driven memory compression (~3x token reduction at >=0.90 retention) and importance scoring
- Multi-machine sync with E2E-encrypted passport bundles (AES-256-GCM + Argon2id) supporting S3, R2, B2, MinIO, and Google Drive
- Plugin trinity for proactive memory capture and recall, plus audit trails for state tracking

## Why It Matters for RAG Builders
Mnemo MCP is essential for RAG builders as it provides a robust, self-hostable solution for persistent AI memory with advanced retrieval, compression, and sync capabilities, enabling context-aware and long-term memory integration in AI systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3
Automated review identified **Qwen3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### semantic-release
Automated review identified **semantic-release** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Renovate
Automated review identified **Renovate** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
