---
title: "Rajskij/oura-mcp"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "MCP (Model Context Protocol)", "Oura API v2", "Docker", "REST", "OAuth 2.0"]
quality_score: 9
rag_relevance: 8
tags: ["Oura Ring", "MCP Server", "Health Data", "AI Integration", "Self-hosted"]
source: "https://github.com/Rajskij/oura-mcp"
discovered_at: "2026-07-03T19:14:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server that connects Oura Ring health data to any MCP-compatible AI client (e.g., ChatGPT or Claude) via a lightweight Node.js process. It provides task-oriented tools to fetch and pre-process Oura API data for efficient LLM consumption without exposing raw endpoints.

## Key Features
- Task-oriented tools (10 tools) abstracting 18 Oura API endpoints for natural LLM queries
- Token-efficient JSON responses with pre-processed units (e.g., `deep_min`, `efficiency_pct`)
- Read-only OAuth scopes and MCP tools with `readOnlyHint` to minimize client prompts
- Supports both Docker and Node.js deployments with zero-config defaults (last 7 days)
- Privacy-focused design with no health data exposure; tokens remain server-side

## Why It Matters for RAG Builders
It enables AI assistants to directly query and interpret wearable health data like Oura Ring metrics, enhancing personalized AI-driven health insights without requiring custom integrations.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oura API v2
Automated review identified **Oura API v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
