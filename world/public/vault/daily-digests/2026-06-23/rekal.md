---
title: janbjorge/rekal
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- SQLite
- FastEmbed
- BM25 (FTS5)
- Vector Search (sqlite-vec)
- MCP (Model Context Protocol)
- ONNX
- YAML
quality_score: 9
rag_relevance: 9
tags:
- long-term memory
- MCP server
- SQLite
- hybrid search
- local AI
source: https://github.com/janbjorge/rekal
discovered_at: '2026-06-23T09:01:22Z'
evaluated_by: mistral-small-latest
---

## Summary
rekal is an MCP server that provides long-term memory for LLMs by storing and retrieving persistent memories locally in a SQLite database using hybrid search (BM25, vector semantics, and recency decay). It integrates with MCP-capable agents like Claude Code, Codex CLI, and OpenCode to enable context-aware AI workflows without cloud dependencies.

## Key Features
- Persistent memory storage in a single SQLite file with no cloud dependencies
- Hybrid search combining BM25, vector semantics, and recency decay for accurate retrieval
- Integration with MCP-capable agents (Claude Code, Codex CLI, OpenCode) for seamless AI workflows
- Dual-tier memory system (durable and scratch) with configurable TTL and automatic pruning
- Configurable scoring weights and project-specific memory management

## Why It Matters for RAG Builders
rekal enables AI agents to retain and retrieve contextually relevant information across sessions without relying on external services, making it essential for building robust, privacy-preserving RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (FTS5)
Automated review identified **BM25 (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search (sqlite-vec)
Automated review identified **Vector Search (sqlite-vec)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
