---
title: Taliawedged117/census-mcp-server
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- TypeScript
- Bun
- Model Context Protocol (MCP)
- Census Bureau APIs
- Docker
- Node.js
quality_score: 9
rag_relevance: 8
tags:
- Census Data
- MCP Server
- Geography Resolution
- Data Querying
- API Integration
source: https://github.com/Taliawedged117/census-mcp-server
discovered_at: '2026-06-24T22:15:49Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that enables querying U.S. Census Bureau data, variables, and geographies via STDIO or Streamable HTTP. It provides 7 tools for dataset discovery, variable search, geography resolution, and data comparison.

## Key Features
- 7 specialized tools for Census data workflows (dataset discovery, variable search, geography resolution, data querying, and comparisons)
- Supports STDIO and Streamable HTTP transports for MCP clients
- In-process variable caching with configurable TTL for performance optimization
- Automatic suppression code resolution and human-readable error handling
- Built on @cyanheads/mcp-ts-core for declarative tool definitions and unified error handling

## Why It Matters for RAG Builders
It provides structured, agent-friendly access to U.S. Census data, enabling AI systems to dynamically query and compare demographic, economic, and geographic information for RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Census Bureau APIs
Automated review identified **Census Bureau APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
