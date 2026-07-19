---
title: opendata-kr/narajangteo-bid-mcp
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Node.js
- TypeScript
- MCP (Model Context Protocol)
- npm
- GitHub Actions
quality_score: 9
rag_relevance: 7
tags:
- MCP server
- public procurement
- Korean API
- bid announcements
- natural language search
source: https://github.com/opendata-kr/narajangteo-bid-mcp
discovered_at: '2026-07-07T02:34:20Z'
evaluated_by: mistral-small-latest
---

## Summary
A local MCP server that wraps the South Korean public procurement Open API (나라장터 입찰공고정보서비스) to enable natural language queries for bid announcements in Claude Desktop and other MCP clients.

## Key Features
- Parallel search across 4 business categories (construction, services, goods, foreign procurement) with graceful failure handling
- Normalization of Korean error codes from data.go.kr for actionable feedback
- Defense against double encoding of API keys to prevent authentication errors
- Configurable timeouts for API calls to avoid hanging requests
- Seamless integration with MCP clients like Claude Desktop for natural language queries

## Why It Matters for RAG Builders
It bridges South Korea's public procurement data API with MCP clients, enabling AI assistants to fetch real-time bid announcements for RAG systems or automated workflows.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
