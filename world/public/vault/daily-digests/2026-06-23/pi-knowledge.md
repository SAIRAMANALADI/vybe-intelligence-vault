---
title: nczz/pi-knowledge
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- SQLite
- BM25
- Vector Embeddings
- AST-based Chunking
- Reranking
- Pi Extension Framework
- Node.js
- Bun
quality_score: 9
rag_relevance: 10
tags:
- RAG
- knowledge-base
- local-first
- code-aware indexing
- agent-memory
source: https://github.com/nczz/pi-knowledge
discovered_at: '2026-06-23T16:27:18Z'
evaluated_by: mistral-small-latest
---

## Summary
A local-first RAG knowledge base extension for Pi agents that indexes codebases, documentation, PDFs, and URLs into persistent, searchable knowledge bases. It combines semantic embeddings, BM25 keyword search, code-aware chunking, and reranking to provide durable project memory for agents.

## Key Features
- Hybrid retrieval combining semantic vectors and BM25 keyword search with weighted score fusion
- Code-aware chunking for TypeScript, JavaScript, Python, Go, Rust, and Java using AST parsing
- Incremental re-indexing and file watcher for auto-updates
- Diagnostic tools for index health, stale files, and stuck jobs
- Adaptive contextual search with diversity reranking to avoid duplicate results

## Why It Matters for RAG Builders
It provides durable, searchable project memory for AI agents, enabling them to retain and retrieve context across sessions without relying on external APIs or modifying source files.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST-based Chunking
Automated review identified **AST-based Chunking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reranking
Automated review identified **Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi Extension Framework
Automated review identified **Pi Extension Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
