---
title: "datnguyenzzz/agent-context"
category: "Tooling"
tech_stack: ["Go", "DuckDB", "TurboQuant", "MCP (Model Context Protocol)", "LiteLLM", "ggrep", "Merkle Trees", "Reciprocal Rank Fusion (RRF)"]
quality_score: 9
rag_relevance: 9
tags: ["code search", "AST indexing", "semantic grep", "privacy-first", "local RAG"]
source: "https://github.com/datnguyenzzz/agent-context"
discovered_at: "2026-06-26T16:17:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first, model-agnostic MCP server and indexer written in Go that enables AI coding assistants to efficiently search and navigate codebases without token waste or data duplication. It uses semantic and regex searches to retrieve exact code functions on-the-fly from local disk, leveraging lightweight AST metadata and a zero-storage design.

## Key Features
- Semantic Grep for precise, token-efficient code retrieval without raw file ingestion
- Zero-storage design: indexes only lightweight AST metadata and streams code on-demand
- Bidirectional AST call graph for tracing execution paths with minimal context usage
- Hybrid search combining dense semantic and sparse lexical methods for high recall
- TurboQuant-based vector compression for 15x storage efficiency without sacrificing accuracy

## Why It Matters for RAG Builders
It eliminates token waste and privacy concerns in RAG systems by enabling precise, on-the-fly code retrieval directly from local disk with minimal storage overhead.

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
