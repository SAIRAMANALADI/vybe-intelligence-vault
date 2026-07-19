---
title: syncable-dev/memtrace-public
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Rust
- Tree-sitter
- MCP (Model Context Protocol)
- Tantivy (BM25)
- Vector embeddings
- Louvain algorithm
- Cypher (graph queries)
- Node.js (npm package)
quality_score: 9
rag_relevance: 10
tags:
- structural memory
- bi-temporal graph
- code intelligence
- MCP-native
- zero LLM calls
source: https://github.com/syncable-dev/memtrace-public
discovered_at: '2026-07-08T15:16:28Z'
evaluated_by: mistral-small-latest
---

## Summary
Memtrace provides structural memory for AI coding agents by transforming codebases into a bi-temporal knowledge graph that captures symbols, relationships, and version history. It enables agents to query codebases in milliseconds without re-reading files or relying on LLMs for graph construction.

## Key Features
- Bi-temporal knowledge graph capturing code symbols, relationships, and version history for time-travel queries
- 25+ MCP-native tools for search, relationships, impact analysis, temporal queries, and API topology mapping
- Rust-native indexing engine with Tree-sitter parsers supporting 20+ languages and frameworks
- Hybrid retrieval combining BM25, vector embeddings, and graph algorithms for high-precision queries
- Real-time incremental indexing and live watch mode for continuous structural memory updates

## Why It Matters for RAG Builders
Memtrace enables AI coding agents to query and reason over codebases with structural precision and temporal awareness, eliminating the need for repeated file reads or LLM-based graph construction while maintaining sub-10ms latency.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy (BM25)
Automated review identified **Tantivy (BM25)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector embeddings
Automated review identified **Vector embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Louvain algorithm
Automated review identified **Louvain algorithm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cypher (graph queries)
Automated review identified **Cypher (graph queries)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (npm package)
Automated review identified **Node.js (npm package)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
