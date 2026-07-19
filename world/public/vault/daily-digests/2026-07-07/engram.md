---
title: aiconnai/engram
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Rust
- SQLite
- BM25
- Vector Search
- Knowledge Graph
- MCP (Model Context Protocol)
- HTTP JSON-RPC
- CLI
- Python SDK
- TypeScript SDK
- Meilisearch (optional)
- ONNX Runtime (for local embeddings)
- WebSocket
quality_score: 9
rag_relevance: 10
tags:
- Memory Layer
- Hybrid Search
- MCP Server
- Persistent Context
- Knowledge Graph
source: https://github.com/aiconnai/engram
discovered_at: '2026-07-07T13:18:26Z'
evaluated_by: mistral-small-latest
---

## Summary
Engram is a Rust-based, local-first memory layer for AI agents that enables durable, persistent memory across sessions. It ingests, indexes, and retrieves project context, decisions, and knowledge using hybrid search (BM25, vectors, fuzzy) and knowledge graphs, exposing functionality via MCP, HTTP JSON-RPC, CLI, and SDKs.

## Key Features
- Hybrid search combining BM25, vector, and fuzzy search for robust retrieval
- Persistent memory storage in SQLite with optional cloud sync and encryption
- Knowledge graph integration for entity linking and multi-hop traversal
- MCP-native tools for seamless integration with Claude Code, Cursor, and VS Code
- Multi-tier memory lifecycle (permanent, daily) with salience scoring and decay

## Why It Matters for RAG Builders
Engram provides a critical memory layer for RAG systems, enabling agents to retain and retrieve project-specific context across sessions, reducing hallucinations and improving consistency in long-running workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Knowledge Graph
Automated review identified **Knowledge Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP JSON-RPC
Automated review identified **HTTP JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python SDK
Automated review identified **Python SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript SDK
Automated review identified **TypeScript SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Meilisearch (optional)
Automated review identified **Meilisearch (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime (for local embeddings)
Automated review identified **ONNX Runtime (for local embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
