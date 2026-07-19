---
title: trudenboy/ma-provider-mcp
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Python
- FastMCP
- Model Context Protocol (MCP)
- Music Assistant
- PrefectHQ
- JWT
- OAuth 2.0
- Streamable HTTP Transport
quality_score: 9
rag_relevance: 8
tags:
- MCP Server
- Music Assistant
- AI Integration
- Model Context Protocol
- Media Control
source: https://github.com/trudenboy/ma-provider-mcp
discovered_at: '2026-07-10T06:32:16Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server plugin for Music Assistant that exposes its library, queue, playback, and metadata controllers to AI agents like Claude, Cursor, and Hermes. It enables seamless integration of Music Assistant's capabilities into AI workflows via standardized MCP interfaces.

## Key Features
- Exposes Music Assistant's controllers (library, queue, playback, players, metadata) as an MCP server for AI clients
- Built on FastMCP v3 with no custom SDK glue, ensuring compliance with MCP standards
- Tag-based access control with 16 action permissions and 3 MCP-resource toggles for granular security
- Mounted into Music Assistant's existing webserver at `/mcp/v1`, reusing TLS, reverse proxy, and authentication
- Supports streamable HTTP transport, OAuth 2.0 protected resource metadata, and tool annotations for MCP compliance

## Why It Matters for RAG Builders
It bridges Music Assistant's media control capabilities with AI agents via the standardized MCP protocol, enabling AI-driven media management and playback in workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Music Assistant
Automated review identified **Music Assistant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PrefectHQ
Automated review identified **PrefectHQ** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP Transport
Automated review identified **Streamable HTTP Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
