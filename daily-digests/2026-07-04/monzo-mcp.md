---
title: "allistera/monzo-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "OAuth 2.0", "Model Context Protocol (MCP)", "REST API"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "Monzo API", "OAuth 2.0", "banking integration", "stdio transport"]
source: "https://github.com/allistera/monzo-mcp"
discovered_at: "2026-07-04T17:03:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes the Monzo banking API to MCP clients like Claude Desktop. It enables OAuth 2.0 authentication, token persistence, and read/write operations on Monzo accounts, transactions, and pots via stdio.

## Key Features
- Exposes Monzo API endpoints as MCP tools for AI clients
- OAuth 2.0 authorization with token persistence and auto-refresh
- Supports both read and write operations (gated by environment variable)
- Full API coverage including accounts, transactions, pots, and webhooks
- Secure OAuth flow with CSRF protection and local callback server

## Why It Matters for RAG Builders
It enables AI agents to securely interact with Monzo banking data via the MCP standard, expanding AI capabilities for financial applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
