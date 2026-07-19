---
title: fruggr/zendesk-mcp-server
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- Node.js
- '@modelcontextprotocol/sdk'
- Zendesk Support API
- Zendesk Help Center API
- OAuth 2.1 PKCE
- Zod
- npm
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- Zendesk integration
- OAuth authentication
- AI assistant tooling
- Help Center management
source: https://github.com/fruggr/zendesk-mcp-server
discovered_at: '2026-06-25T17:08:54Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that integrates Zendesk Support and Help Center into AI assistants, enabling natural language interactions for ticket management, article searches, and knowledge base updates with per-user OAuth 2.1 PKCE authentication.

## Key Features
- Per-user OAuth 2.1 PKCE authentication for granular permissions and security
- Supports both local (stdio) and remote (HTTP) MCP server deployments
- Section-based article editing to reduce token usage for large Help Center articles
- Fine-grained tool visibility controls (read-only, namespace, single-tool modes)
- Comprehensive toolset for tickets, articles, and user management with Zendesk APIs

## Why It Matters for RAG Builders
It enables AI assistants to securely and efficiently interact with Zendesk data using per-user permissions, reducing context overhead and improving security for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @modelcontextprotocol/sdk
Automated review identified **@modelcontextprotocol/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zendesk Support API
Automated review identified **Zendesk Support API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zendesk Help Center API
Automated review identified **Zendesk Help Center API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1 PKCE
Automated review identified **OAuth 2.1 PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
