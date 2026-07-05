---
title: "neostorm112-boop/proxykey-mcp"
category: "Tooling"
tech_stack: ["MCP (Model Context Protocol)", "AES-256-GCM", "SHA-256", "HTTP/HTTPS", "Streamable HTTP", "OAuth (GitHub)", "Magic Links"]
quality_score: 8
rag_relevance: 9
tags: ["credential management", "API key proxy", "MCP server", "security", "revocable tokens"]
source: "https://github.com/neostorm112-boop/proxykey-mcp"
discovered_at: "2026-07-05T13:24:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
proxykey MCP server is a credential vault and proxy that enables AI agents to manage revocable virtual API keys (passes) without exposing real keys. It encrypts real API keys with AES-256-GCM and provides MCP tools for agents to issue, rotate, revoke, and inspect passes with granular security controls.

## Key Features
- Issue revocable virtual API keys (passes) with per-pass IP binding and rate limits
- Encrypt real API keys with AES-256-GCM; never expose them to agents
- Provides 13 MCP tools for pass lifecycle management (create, rotate, revoke, inspect)
- Supports 25+ API providers with streaming and request body/header passthrough
- Full request logging and usage stats per pass without exposing sensitive data

## Why It Matters for RAG Builders
It eliminates the risk of API key leaks in AI agents by providing revocable, IP-bound virtual keys while keeping real keys encrypted and human-managed.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256
Automated review identified **SHA-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth (GitHub)
Automated review identified **OAuth (GitHub)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Magic Links
Automated review identified **Magic Links** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
