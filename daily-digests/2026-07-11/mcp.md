---
title: rustok-org/mcp
category: daily-digests/2026-07-11
tech_stack:
- Python
- Docker
- Model Context Protocol (MCP)
- Argon2id
- AES-256-GCM
- SQLite
- Redis
- FastAPI
quality_score: 8
rag_relevance: 9
tags:
- MCP server
- self-custody wallet
- AI agent integration
- crypto transactions
- security-focused
source: https://github.com/rustok-org/mcp
discovered_at: '2026-07-11T07:52:44Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that bridges AI agents (e.g., Claude Desktop, Cursor) with the Rustok self-custody wallet via Gateway. It enables secure, human-approved transactions for AI-driven crypto operations while keeping private keys encrypted and local.

## Key Features
- Connects AI agents to Rustok wallet via MCP (stdio or SSE transport)
- Supports human-in-the-loop transaction approval for self-custody security
- Encrypted key storage with Argon2id + AES-256-GCM
- Capability-gated tools (read_wallet, preview_tx, execute_tx) with configurable restrictions
- Audit logging for all actions in SQLite

## Why It Matters for RAG Builders
It enables secure, AI-driven crypto operations with human oversight, bridging the gap between autonomous agents and self-custody wallets for trustless yet controlled transactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
