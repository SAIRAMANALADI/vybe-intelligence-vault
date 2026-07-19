---
title: skynetcmd/m3-memory
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- SQLite
- BGE-M3 (GGUF)
- Rust (oxidized core)
- MCP (Model Context Protocol)
- FTS5 (full-text search)
- GGUF (quantized models)
- Git LFS
- FastAPI (embedding service)
quality_score: 9
rag_relevance: 10
tags:
- long-term memory
- hybrid retrieval
- offline-first
- MCP integration
- knowledge graph
source: https://github.com/skynetcmd/m3-memory
discovered_at: '2026-06-23T06:52:01Z'
evaluated_by: mistral-small-latest
---

## Summary
M3 Memory is a local-first memory framework for AI agents that enables persistent, long-term memory storage and retrieval with 99.2% retrieval accuracy. It supports hybrid search (FTS5 + vector + MMR), GDPR compliance, and works offline or in air-gapped environments.

## Key Features
- Hybrid retrieval combining FTS5, vector similarity, and MMR re-ranking for high-accuracy memory search
- Sovereign/local-first deployment with optional GPU acceleration and air-gapped support
- Autonomous cognitive loop for fact extraction, contradiction resolution, and knowledge graph enrichment
- Lazy tool registration to minimize MCP context overhead (only 10 tools loaded by default)
- Bitemporal versioning and contradiction handling for reliable memory updates

## Why It Matters for RAG Builders
M3 Memory enables AI agents to retain and retrieve long-term context without relying on external services, making it essential for building robust, privacy-preserving RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3 (GGUF)
Automated review identified **BGE-M3 (GGUF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (oxidized core)
Automated review identified **Rust (oxidized core)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (full-text search)
Automated review identified **FTS5 (full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF (quantized models)
Automated review identified **GGUF (quantized models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git LFS
Automated review identified **Git LFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (embedding service)
Automated review identified **FastAPI (embedding service)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
