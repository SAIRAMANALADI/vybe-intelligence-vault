---
title: aliasunder/vault-cortex
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- TypeScript
- Docker
- SQLite FTS5
- OAuth 2.1
- Node.js
- Obsidian Sync
- MCP (Model Context Protocol)
quality_score: 9
rag_relevance: 8
tags:
- Obsidian integration
- MCP server
- AI memory
- full-text search
- remote access
source: https://github.com/aliasunder/vault-cortex
discovered_at: '2026-06-24T18:57:46Z'
evaluated_by: mistral-small-latest
---

## Summary
Vault Cortex is a standalone MCP server that provides AI assistants with full-text search, structured memory, and read/write access to Obsidian vaults without requiring plugins or running Obsidian itself. It enables remote access via OAuth 2.1 and supports local or cloud deployments with Obsidian Sync integration.

## Key Features
- 25 tools for vault CRUD operations, search, memory management, and link graph analysis
- OAuth 2.1 authentication for secure remote access
- SQLite FTS5-based ranked search with BM25 scoring and filtering
- Structured memory layer for AI personalization and dated entries
- Obsidian-native support for frontmatter, wikilinks, tags, and daily notes

## Why It Matters for RAG Builders
It enables AI assistants to directly interact with Obsidian vaults for persistent, structured memory and real-time knowledge retrieval, bridging the gap between local note-taking and AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian Sync
Automated review identified **Obsidian Sync** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
