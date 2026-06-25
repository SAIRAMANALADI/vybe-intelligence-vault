---
title: "woodstock-tokyo/google-finance-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "PyInstaller", "HTTP/HTTPS", "JSON", "RPC"]
quality_score: 8
rag_relevance: 7
tags: ["finance data", "MCP server", "RPC", "market data", "unofficial API"]
source: "https://github.com/woodstock-tokyo/google-finance-mcp"
discovered_at: "2026-06-25T11:42:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An unofficial MCP server that interfaces with Google Finance's internal batchexecute RPC endpoint to fetch market data, quotes, and financial information. It dynamically generates tools based on live Google Finance page mappings and supports both classic and beta endpoints.

## Key Features
- Dynamic tool generation from live Google Finance page mappings (AF_initDataKeys, AF_dataServiceRequests)
- Supports both classic and beta Google Finance endpoints with auto-refreshing RPC IDs
- Self-repairing dataset calls that revalidate stale cached method tokens
- Provides structured JSON responses from Google's batchexecute frames
- Standalone binary releases for macOS, Linux, and Windows (no Python dependency)

## Why It Matters for RAG Builders
It enables AI systems to fetch real-time financial data from Google Finance without relying on official APIs, expanding the scope of RAG applications in financial analysis.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyInstaller
Automated review identified **PyInstaller** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RPC
Automated review identified **RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
