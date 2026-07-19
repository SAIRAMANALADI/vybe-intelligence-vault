---
title: wiklob/linear-mcp-lean
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- TypeScript
- Node.js
- '@modelcontextprotocol/sdk'
- Express
- GraphQL
- graphql-request
quality_score: 8
rag_relevance: 9
tags:
- Linear
- MCP
- token optimization
- self-hosted
- LLM agents
source: https://github.com/wiklob/linear-mcp-lean
discovered_at: '2026-07-07T18:59:43Z'
evaluated_by: mistral-small-latest
---

## Summary
A self-hosted MCP server for Linear that optimizes response payloads by returning only the fields agents actually use, reducing token costs for LLM agents. It serves as a drop-in replacement for Linear's hosted MCP server with identical tool names and behavior.

## Key Features
- Field-trimmed responses to minimize token usage for LLM agents
- Drop-in replacement for Linear's hosted MCP server with identical tool names
- Minimal write acknowledgments instead of full-object echoes
- HTTP and stdio transport modes for flexible deployment
- Byte-savings observability via `/stats` endpoint

## Why It Matters for RAG Builders
It drastically reduces token costs for LLM agents interacting with Linear by optimizing response payloads, making AI-driven workflows more efficient and cost-effective.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @modelcontextprotocol/sdk
Automated review identified **@modelcontextprotocol/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express
Automated review identified **Express** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### graphql-request
Automated review identified **graphql-request** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
