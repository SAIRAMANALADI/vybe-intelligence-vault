---
title: "secure-ssid/centralmcp"
category: "Agent Framework"
tech_stack: ["Python", "FastMCP", "httpx", "LanceDB", "SQLite", "FastEmbed", "Model Context Protocol (MCP)", "OAuth 2.0", "REST API"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "HPE Aruba Central", "GreenLake Platform", "RAG", "OpenAPI lookup"]
source: "https://github.com/secure-ssid/centralmcp"
discovered_at: "2026-06-30T22:16:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
centralmcp is an MCP (Model Context Protocol) server and automation toolkit that enables AI clients to interact with HPE Aruba Central and GreenLake Platform via low-token tools. It provides documentation search, OpenAPI lookup, health inspection, troubleshooting workflows, and configuration management through direct REST calls.

## Key Features
- Embedded RAG stack with LanceDB for documentation search and SQLite for OpenAPI lookup, requiring no Docker or external services
- Low-token MCP router (`tool_router.py`) that dynamically discovers and invokes backend tools (194+ core tools, 204+ with optional products)
- Exact API endpoint and schema lookup via SQLite FTS5 index over 213 parsed OpenAPI specs
- Safety-first design with destructive operation confirmations, read-only tool isolation, and GLP write gating
- 8-stage migration pipeline and SSID management tools for Aruba Central

## Why It Matters for RAG Builders
centralmcp provides a critical bridge for AI agents to safely and efficiently interact with HPE Aruba Central and GreenLake Platform, enabling low-token RAG workflows and precise API/tool discovery without heavy infrastructure overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
