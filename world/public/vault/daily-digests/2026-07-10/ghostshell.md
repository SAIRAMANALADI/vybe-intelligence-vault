---
title: woodwosj/GhostShell
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- PostgreSQL
- Argon2id
- AES-256-GCM
- OAuth2
quality_score: 9
rag_relevance: 8
tags:
- credential management
- MCP server
- AI agent security
- authentication proxy
- secret vault
source: https://github.com/woodwosj/GhostShell
discovered_at: '2026-07-10T02:27:18Z'
evaluated_by: mistral-small-latest
---

## Summary
GhostKey is an MCP-native credential vault that enables AI agents to authenticate without exposing raw secrets. It acts as a secure intermediary, managing credentials and injecting authentication transparently for MCP clients like Claude, Cursor, and VS Code.

## Key Features
- Zero secret exposure for AI agents via MCP tools like `ghostkey_request` and `ghostkey_connect`
- Supports 7 authentication patterns (Bearer, Basic, OAuth2, API key, custom headers, XML-RPC, query parameters)
- Persistent connection management for PostgreSQL and XML-RPC/Odoo sessions
- Local and cloud-backed encrypted vaults with SSO/RBAC in Enterprise tier
- Defense-in-depth security with Argon2id key derivation, AES-256-GCM encryption, and SSRF prevention

## Why It Matters for RAG Builders
GhostKey eliminates the risk of secret leakage in AI agents by acting as a secure credential proxy, ensuring secure authentication without exposing raw secrets to LLMs or agents.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
