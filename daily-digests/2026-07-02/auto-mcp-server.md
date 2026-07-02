---
title: "alanbuxton/auto-mcp-server"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "OpenAPI", "REST API", "STDIO", "Streamable HTTP"]
quality_score: 8
rag_relevance: 9
tags: ["MCP server", "OpenAPI integration", "REST API", "LLM tooling", "automation"]
source: "https://github.com/alanbuxton/auto-mcp-server"
discovered_at: "2026-07-02T22:14:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
auto-mcp-server is a lightweight MCP server that automatically generates tools for each endpoint in an OpenAPI spec, enabling LLMs to interact with REST APIs. It supports both local (STDIO) and remote (Streamable HTTP) deployments for flexibility.

## Key Features
- Auto-generates MCP tools from OpenAPI specs for seamless LLM integration
- Supports both local (STDIO) and remote (Streamable HTTP) deployments
- Automatically tags tools with authentication requirements for secure access
- Lightweight and easy to configure for quick setup
- Exposes metadata via `.well-known/mcp.json` for client discovery

## Why It Matters for RAG Builders
It bridges the gap between LLMs and REST APIs by auto-generating MCP tools, simplifying RAG pipeline integration for AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STDIO
Automated review identified **STDIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
