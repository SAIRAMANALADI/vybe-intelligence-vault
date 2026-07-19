---
title: trustxai/thoughtspot-mcp
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Python
- FastMCP
- Model Context Protocol (MCP)
- Docker
- REST API
- uv/uvx
quality_score: 9
rag_relevance: 7
tags:
- MCP Server
- ThoughtSpot Integration
- Natural Language Access
- Data Export
- API Wrapper
source: https://github.com/trustxai/thoughtspot-mcp
discovered_at: '2026-07-06T23:04:19Z'
evaluated_by: mistral-small-latest
---

## Summary
This repository provides an MCP (Model Context Protocol) server for interacting with ThoughtSpot's REST API v2.0, enabling natural language access to ThoughtSpot instances from MCP-compatible clients like Cursor, Claude Desktop, and others.

## Key Features
- 18 tools covering health checks, metadata operations, TML export/import, data-warehouse connections, data retrieval, and report exports
- Supports TML round-trip for ThoughtSpot Modeling Language objects with sync and async operations
- Automatic bearer-token exchange with in-memory caching, refresh, and transparent 401 retry
- Multi-format report exports (PDF, PNG, CSV, XLSX) for Liveboards and Answers
- Zero-install deployment via uvx and Docker support for seamless integration with MCP clients

## Why It Matters for RAG Builders
It bridges ThoughtSpot's analytics platform with MCP-compatible AI tools, enabling natural language-driven data access and automation for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv/uvx
Automated review identified **uv/uvx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
