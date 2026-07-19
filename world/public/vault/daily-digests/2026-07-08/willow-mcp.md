---
title: rudi193-cmd/willow-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Python
- MCP (Model Context Protocol)
- SQLite
- PostgreSQL
- OAuth 2.0
- PKCE
- systemd
- FastAPI (for HTTP serve mode)
quality_score: 8
rag_relevance: 9
tags:
- MCP server
- persistent memory
- task execution
- knowledge graph
- OAuth authentication
source: https://github.com/rudi193-cmd/willow-mcp
discovered_at: '2026-07-08T17:26:06Z'
evaluated_by: mistral-small-latest
---

## Summary
willow-mcp is an agent-neutral MCP server providing persistent memory, task execution, and knowledge graph capabilities with multiple storage backends (SQLite, Postgres, and a task queue). It supports both stdio and HTTP serve modes with OAuth authentication, enabling flexible integration with any MCP-compatible agent or client.

## Key Features
- Agent-neutral MCP server supporting stdio and HTTP modes with OAuth authentication
- Three storage backends: SQLite (SOIL), Postgres knowledge base, and Kart task queue
- Manifest-based ACL for fine-grained permission control without external auth services
- Persistent memory with context saving and retrieval (SOIL-backed)
- Knowledge graph with schema adaptation and multi-keyword search capabilities

## Why It Matters for RAG Builders
It provides a unified, flexible MCP server for RAG pipelines that require persistent memory, task execution, and knowledge graph integration with configurable storage backends and authentication.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PKCE
Automated review identified **PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (for HTTP serve mode)
Automated review identified **FastAPI (for HTTP serve mode)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
