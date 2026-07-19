---
title: uhop/vault-storage
category: daily-digests/2026-07-09
tech_stack:
- TypeScript
- Node.js 26
- SQLite
- sqlite-vec
- ONNX Runtime
- Xenova/bge-small-en-v1.5
- Docker
- REST API
- MCP (Model Context Protocol)
- Git
quality_score: 9
rag_relevance: 10
tags:
- knowledge base
- semantic search
- markdown indexing
- AI agents
- vector database
source: https://github.com/uhop/vault-storage
discovered_at: '2026-07-09T21:18:50Z'
evaluated_by: mistral-small-latest
---

## Summary
An AI-agent-first persistent knowledge base where markdown files serve as the source of truth, backed by a SQLite + sqlite-vec index for fast semantic search and typed-edge traversal. Designed for AI agents with REST and MCP interfaces, auto-syncing via git.

## Key Features
- Markdown-based content storage with YAML frontmatter as the source of truth
- SQLite + sqlite-vec for fast vector search and typed-edge traversal
- Built-in REST server with bearer-token authentication and MCP adapter
- Auto-syncing via git for cross-machine content sharing
- Local CPU-based embeddings with ONNX runtime for privacy and offline use

## Why It Matters for RAG Builders
It provides a lightweight, git-backed vector database optimized for AI agents, enabling persistent, semantic knowledge storage without external cloud dependencies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 26
Automated review identified **Node.js 26** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xenova/bge-small-en-v1.5
Automated review identified **Xenova/bge-small-en-v1.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
