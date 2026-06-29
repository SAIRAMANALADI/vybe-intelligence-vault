---
title: "trudenboy/ma-provider-mcp"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Model Context Protocol (MCP)", "Music Assistant", "PrefectHQ", "OAuth 2.0", "HTTP Streamable Transport", "JWT Authentication"]
quality_score: 9
rag_relevance: 7
tags: ["MCP Server", "Music Assistant", "AI Agent Integration", "Streamable HTTP", "Permission Control"]
source: "https://github.com/trudenboy/ma-provider-mcp"
discovered_at: "2026-06-29T19:05:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server plugin for Music Assistant that exposes its library, queue, playback, and metadata controllers as an MCP-compliant interface for AI agents like Claude, Cursor, and OpenClaw. It enables seamless integration of Music Assistant's functionality into AI workflows without requiring core changes to Music Assistant.

## Key Features
- Exposes Music Assistant's controllers (library, queue, playback, players, metadata) as MCP-compliant tools
- Built on FastMCP v3 with no custom SDK glue, ensuring stability and compliance
- Granular permission system with 16 action permissions and 3 MCP-resource toggles, all off by default
- Mounted into Music Assistant's existing webserver at `/mcp/v1`, reusing TLS and reverse proxy configurations
- Supports OAuth 2.0 Protected Resource Metadata and Resource Indicator (RFC 8707) for enhanced security

## Why It Matters for RAG Builders
It bridges Music Assistant's media control capabilities with AI agents via the MCP standard, enabling seamless automation and integration for RAG builders working with media-rich applications.

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

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Streamable Transport
Automated review identified **HTTP Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT Authentication
Automated review identified **JWT Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
