---
title: benethos-hub/yahoo-finance-mcp
category: daily-digests/2026-06-25
tech_stack:
- Python
- yfinance
- Model Context Protocol (MCP)
- SQLite
- Docker
- uv
- FastAPI
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- market data
- Yahoo Finance
- financial APIs
- real-time data
source: https://github.com/benethos-hub/yahoo-finance-mcp
discovered_at: '2026-06-25T07:31:36Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that exposes Yahoo Finance market data to AI clients like Claude Desktop. It provides real-time quotes, historical OHLCV data, company fundamentals, dividends, news, analyst ratings, and options chains via the unofficial `yfinance` library.

## Key Features
- Exposes Yahoo Finance data via MCP for AI clients (e.g., Claude Desktop)
- Supports multiple transports: stdio (default), HTTP (streamable-http, SSE)
- Provides tools for quotes, historical data, company info, financials, dividends, news, analyst ratings, and options chains
- Optional persistent SQLite cache with per-tool TTLs to reduce API load and rate-limiting risks
- Dockerized deployment with environment-variable configuration and health checks

## Why It Matters for RAG Builders
It enables AI agents to fetch real-time and historical financial data directly from Yahoo Finance, enhancing RAG pipelines with up-to-date market insights and fundamentals.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yfinance
Automated review identified **yfinance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
