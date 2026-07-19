---
title: epicsagas/alcove
category: daily-digests/2026-06-25
tech_stack:
- Rust
- HTTP API
- BM25
- Vector Search
- Tree-sitter
- ONNX
- PDF Text Extraction
- CLI
- MCP Server
quality_score: 9
rag_relevance: 10
tags:
- documentation retrieval
- AI agent context
- hybrid search
- code indexing
- MCP server
source: https://github.com/epicsagas/alcove
discovered_at: '2026-06-25T17:09:43Z'
evaluated_by: mistral-small-latest
---

## Summary
Alcove is an HTTP API server that provides AI coding agents with on-demand access to private project documentation using hybrid search (BM25 + vector) and tree-sitter code indexing. It enables agents to dynamically retrieve relevant context without bloating their context windows or exposing sensitive docs publicly.

## Key Features
- Hybrid search combining BM25 and vector embeddings for precise document retrieval
- Tree-sitter powered code indexing to help agents understand project structure across 12+ languages
- Policy enforcement and validation for consistent documentation standards
- Multi-project and multi-agent support with automatic project detection via CWD
- Background server for zero cold-start latency and persistent embedding caching

## Why It Matters for RAG Builders
Alcove eliminates context bloat and sensitive doc exposure for RAG systems by dynamically providing only the most relevant project knowledge to AI agents on demand.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PDF Text Extraction
Automated review identified **PDF Text Extraction** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
