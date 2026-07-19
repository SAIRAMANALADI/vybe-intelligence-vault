---
title: chenyuxiaojin/cyxj-groksearch
category: daily-digests/2026-07-07
tech_stack:
- Python
- MCP (Model Context Protocol)
- FastMCP
- Tavily API
- Firecrawl API
- Grok API
- HTTPX
- Tenacity
- FastAPI
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- web search
- multi-source aggregation
- failover mechanism
- Claude Code integration
source: https://github.com/chenyuxiaojin/cyxj-groksearch
discovered_at: '2026-07-07T02:34:15Z'
evaluated_by: mistral-small-latest
---

## Summary
cyxj-groksearch is an MCP server for Claude Code that enables real-time web access via Grok AI search, Tavily fetch/map, and Firecrawl screenshots, featuring multi-key failover and built-in tool routing control.

## Key Features
- Multi-source cross-verification with Grok, Tavily, and Firecrawl for enhanced search reliability
- Grok AI search relay endpoint supporting any OpenAI-compatible URL for flexible deployment
- Full-text extraction via Tavily Extract with Firecrawl fallback for comprehensive content retrieval
- Multi-key failover pool with automatic cooldown for uninterrupted API access
- Built-in tool routing control to force all web traffic through the MCP server

## Why It Matters for RAG Builders
This MCP server provides essential multi-source web access, failover mechanisms, and tool routing for RAG builders seeking reliable and customizable AI-powered search capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily API
Automated review identified **Tavily API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firecrawl API
Automated review identified **Firecrawl API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grok API
Automated review identified **Grok API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tenacity
Automated review identified **Tenacity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
