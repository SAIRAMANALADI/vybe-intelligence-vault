---
title: jmagar/unraid-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Python
- GraphQL
- MCP (Model Context Protocol)
- Docker
- FastAPI
- WebSocket
- OAuth
- Unraid API
quality_score: 9
rag_relevance: 8
tags:
- Unraid
- MCP server
- GraphQL
- system monitoring
- automation
source: https://github.com/jmagar/unraid-mcp
discovered_at: '2026-07-08T21:02:20Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides a unified interface to query and manage Unraid servers via GraphQL. It exposes a single 'unraid' tool for system inspection, live telemetry, and management operations, supporting multiple authentication methods and transport protocols.

## Key Features
- Unified 'unraid' tool for all operations (system info, Docker, VMs, array management, etc.)
- Live telemetry via WebSocket subscriptions for real-time data streaming
- Multiple authentication methods (Bearer token, OAuth, reverse proxy auth)
- Support for stdio, HTTP, and SSE transport modes
- Extensive configuration via environment variables and .env files

## Why It Matters for RAG Builders
It enables AI agents to directly interact with and manage Unraid servers through a standardized MCP interface, simplifying automation and monitoring tasks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unraid API
Automated review identified **Unraid API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
