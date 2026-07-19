---
title: ezzy1630/Argyph
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Rust
- Tree-sitter
- LanceDB
- ONNX Runtime
- MCP (Model Context Protocol)
- BM25
- Embedding Models
quality_score: 9
rag_relevance: 10
tags:
- local-first
- symbol graph
- semantic search
- MCP server
- code indexing
source: https://github.com/ezzy1630/Argyph
discovered_at: '2026-07-08T21:02:21Z'
evaluated_by: mistral-small-latest
---

## Summary
Argyph is a local-first MCP server that provides AI coding agents with fast, structured, and semantic context over any codebase. It replaces multiple MCP servers with a single binary, offering grep, symbol graph, semantic search, and repo packing without requiring API keys or cloud dependencies.

## Key Features
- Single binary replacing multiple MCP servers (grep, embeddings, symbol search, repo packing)
- Three-tier indexing (file inventory, symbol graph, embeddings) with incremental updates
- Hybrid (BM25 + vector) semantic search with embedded LanceDB store
- Structured symbol intelligence (definitions, references, call graphs, imports)
- Token-budgeted repo packing for agents needing quick codebase absorption

## Why It Matters for RAG Builders
Argyph eliminates the need for multiple cloud-dependent MCP servers, providing a unified, local-first solution for AI agents to efficiently retrieve structured and semantic context from codebases.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding Models
Automated review identified **Embedding Models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
