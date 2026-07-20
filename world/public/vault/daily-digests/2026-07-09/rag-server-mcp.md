---
title: SylphxAI/rag-server-mcp
category: daily-digests/2026-07-09
tech_stack:
- TypeScript
- ChromaDB
- Ollama
- Docker
- TF-IDF
- Vector Search
quality_score: 4
rag_relevance: 3
tags:
- deprecated
- MCP server
- RAG pipeline
- ChromaDB
- Ollama
source: https://github.com/SylphxAI/rag-server-mcp
discovered_at: '2026-07-09T04:46:41Z'
evaluated_by: mistral-small-latest
---

## Summary
This repository is a deprecated MCP server for RAG pipelines, now replaced by CodeRAG. It was designed to provide fast, hybrid search capabilities for code and text using ChromaDB and Ollama, but is no longer maintained.

## Key Features
- Hybrid search combining TF-IDF and vector embeddings
- Integration with ChromaDB for vector storage
- Required Docker and Ollama for external dependencies
- Startup time of 10-30 seconds
- Memory-intensive due to ChromaDB (500MB+)

## Why It Matters for RAG Builders
This repository serves as a historical reference for deprecated RAG tooling, highlighting the evolution toward more efficient, dependency-free solutions like CodeRAG.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
