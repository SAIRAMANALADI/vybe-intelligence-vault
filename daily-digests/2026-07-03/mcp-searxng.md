---
title: "ihor-sokoliuk/mcp-searxng"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Docker", "SearXNG", "Express.js", "HTTP/JSON API"]
quality_score: 10
rag_relevance: 9
tags: ["web search", "privacy-focused", "MCP server", "self-hosted", "failover"]
source: "https://github.com/ihor-sokoliuk/mcp-searxng"
discovered_at: "2026-07-03T22:11:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-searxng is an MCP server that integrates SearXNG instances to provide private, self-hosted web search capabilities for AI assistants like Claude and Cursor. It enables structured search, failover, and content extraction while prioritizing privacy and free access.

## Key Features
- Private web search integration with SearXNG instances for AI assistants
- Multi-instance failover and parallel fanout for high availability
- Structured search output (text or raw JSON) with advanced filtering (time, language, safety, relevance)
- URL content reading with pagination, section filtering, and intelligent caching
- Instance capability discovery (categories, engines, locales) and search suggestions

## Why It Matters for RAG Builders
It enables AI assistants to perform private, self-hosted web searches without relying on proprietary APIs, enhancing privacy and reducing costs for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express.js
Automated review identified **Express.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON API
Automated review identified **HTTP/JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
