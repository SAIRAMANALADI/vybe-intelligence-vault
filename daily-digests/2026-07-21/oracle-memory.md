---
title: OraclePersonal/Oracle-memory
category: daily-digests/2026-07-21
tech_stack:
- TypeScript
- MCP (Model Context Protocol)
- BM25
- Vector Search
- Node.js
quality_score: 8
rag_relevance: 9
tags:
- memory persistence
- hybrid search
- agent tooling
- file-backed storage
- MCP server
source: https://github.com/OraclePersonal/Oracle-memory
discovered_at: '2026-07-20T02:44:59Z'
evaluated_by: mistral-small-latest
---

## Summary
Oracle Memory is a file-backed MCP memory server for AI agents that enables persistent, searchable memory across sessions using hybrid keyword and semantic search. It eliminates the need for traditional databases by storing memories in JSON files with optional vector embeddings and entity graphs.

## Key Features
- File-backed memory storage with atomic writes for reliability
- Hybrid search combining BM25 keyword and vector semantic search
- Automated memory lifecycle management (consolidation, promotion, pruning)
- Entity relationship graph for contextual recall
- Zero-database architecture with optional vector embeddings

## Why It Matters for RAG Builders
It provides a lightweight, persistent memory solution for AI agents that eliminates database dependencies while enabling advanced search and contextual recall.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
