---
title: claymore666/ccu-mcp
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- TypeScript
- Node.js
- Docker
- JSON-RPC
- MCP (Model Context Protocol)
- HomeMatic CCU API
quality_score: 9
rag_relevance: 7
tags:
- Home Automation
- Smart Home
- MCP Server
- HomeMatic CCU
- AI Integration
source: https://github.com/claymore666/ccu-mcp
discovered_at: '2026-07-06T23:04:24Z'
evaluated_by: mistral-small-latest
---

## Summary
ccu-mcp is an MCP (Model Context Protocol) server that enables AI assistants like Claude or Cursor to interact with HomeMatic smart home systems via the CCU's JSON-RPC API. It exposes devices, rooms, programs, and system variables as MCP tools for direct local network control without cloud dependencies.

## Key Features
- Direct integration with HomeMatic CCU via JSON-RPC API over local network
- Exposes devices, rooms, programs, and system variables as MCP tools for AI assistants
- Supports both stdio and HTTP deployment modes (Docker or direct Node.js)
- Multi-CCU profile support with configurable read/write protection and session management
- Security features including TLS verification, bearer token authentication, and brute-force protection

## Why It Matters for RAG Builders
It bridges AI assistants with physical smart home systems, enabling secure, local control of HomeMatic devices for AI-driven automation and monitoring.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HomeMatic CCU API
Automated review identified **HomeMatic CCU API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
