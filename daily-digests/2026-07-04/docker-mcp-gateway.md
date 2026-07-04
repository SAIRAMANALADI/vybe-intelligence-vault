---
title: "hwdsl2/docker-mcp-gateway"
category: "Orchestrator"
tech_stack: ["Docker", "Model Context Protocol (MCP)", "Caddy", "MCPHub", "Shell", "HTTP/SSE", "Bearer Token Auth"]
quality_score: 9
rag_relevance: 8
tags: ["MCP gateway", "authenticated tool server", "self-hosted AI", "multi-server hub", "secure API access"]
source: "https://github.com/hwdsl2/docker-mcp-gateway"
discovered_at: "2026-07-04T03:45:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Docker-based MCP (Model Context Protocol) gateway that provides authenticated, centralized access to multiple MCP tool servers over HTTP. It simplifies secure integration of MCP tools like filesystem, fetch, GitHub, and PostgreSQL into AI stacks via a single endpoint with Bearer token authentication.

## Key Features
- Centralized MCP tool server access with Bearer token authentication
- Multi-server support with path-based routing (e.g., /mcp/<name>)
- Auto-generated API key and admin password on first start
- Built-in MCP servers: filesystem, fetch, GitHub, Brave Search, Git, PostgreSQL, memory, and sequential-thinking
- Persistent configuration via Docker volume and web-based dashboard for runtime management

## Why It Matters for RAG Builders
It simplifies secure integration of multiple MCP tools into AI stacks by providing a single authenticated endpoint, reducing complexity and security risks for RAG builders.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCPHub
Automated review identified **MCPHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE
Automated review identified **HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Auth
Automated review identified **Bearer Token Auth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
