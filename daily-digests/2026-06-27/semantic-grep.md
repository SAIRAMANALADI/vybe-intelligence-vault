---
title: "datnguyenzzz/semantic-grep"
category: "Tooling"
tech_stack: ["Go", "DuckDB", "TurboQuant", "MCP (Model Context Protocol)", "LiteLLM", "ggrep", "Merkle Trees", "Reciprocal Rank Fusion (RRF)"]
quality_score: 9
rag_relevance: 10
tags: ["semantic search", "code indexing", "privacy-first", "AST call graph", "local-first"]
source: "https://github.com/datnguyenzzz/semantic-grep"
discovered_at: "2026-06-27T15:16:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
semantic-grep is a model-agnostic, local-first MCP server and indexer written in Go that enables AI coding assistants to perform semantic and regex searches on codebases without duplicating source code. It indexes only lightweight symbol metadata and executes blazingly fast searches directly from local disk, resolving token-bloat and privacy issues in RAG systems.

## Key Features
- Zero-storage design: indexes only lightweight metadata without duplicating source code
- Hybrid search: combines semantic and regex searches using RRF for precise retrieval
- AST call graph: enables bidirectional tracing of caller/callee relationships
- TurboQuant compression: reduces vector storage footprint by up to 15x with minimal accuracy loss
- Merkle tree sync: incremental indexing via cryptographic hashing for efficient updates

## Why It Matters for RAG Builders
It enables AI coding assistants to perform precise, privacy-preserving semantic searches on codebases without token waste or heavy RAG infrastructure, making it essential for efficient and secure AI-driven development workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TurboQuant
Automated review identified **TurboQuant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ggrep
Automated review identified **ggrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Merkle Trees
Automated review identified **Merkle Trees** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
