---
title: "itsablabla/garza-mcp"
category: "Orchestrator"
tech_stack: ["Python", "FastMCP", "HTTP/SSE", "Bearer Token Auth", "AsyncIO", "httpx", "SQLite", "FUSE", "WebDAV", "CalDAV", "Proton Bridge", "Caddy"]
quality_score: 8
rag_relevance: 7
tags: ["MCP Server", "Unified API", "Cloud Integration", "Async Operations", "Bearer Authentication"]
source: "https://github.com/itsablabla/garza-mcp"
discovered_at: "2026-06-26T20:35:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Garza MCP is a unified Model Context Protocol (MCP) server that integrates 9 services (ProtonMail, Proton Drive, iCloud Drive, Beeper, Fabric AI, Quo/OpenPhone, Voicenotes, and Nextcloud) into a single service with 178 tools. It simplifies access to diverse cloud services via a standardized HTTP/SSE interface with built-in authentication and async operations.

## Key Features
- Unified access to 9 cloud services via a single MCP server with 178 tools
- Native HTTP/SSE transport with built-in Bearer token authentication
- Async-first architecture with per-tool timeouts and crash protection
- Supports ProtonMail, Proton Drive, iCloud Drive, Beeper, Fabric AI, Quo/OpenPhone, Voicenotes, and Nextcloud
- Deployable with Caddy for SSL termination and easy client configuration

## Why It Matters for RAG Builders
Garza MCP simplifies integration with multiple cloud services for AI agents by providing a single, standardized interface, reducing complexity in building RAG systems that require diverse data sources.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE
Automated review identified **HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Auth
Automated review identified **Bearer Token Auth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AsyncIO
Automated review identified **AsyncIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FUSE
Automated review identified **FUSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebDAV
Automated review identified **WebDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CalDAV
Automated review identified **CalDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proton Bridge
Automated review identified **Proton Bridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
