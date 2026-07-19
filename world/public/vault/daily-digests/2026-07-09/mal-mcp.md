---
title: Grinv/mal-mcp
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- TypeScript
- Node.js
- Model Context Protocol (MCP)
- Jikan API
- MyAnimeList API
- OAuth PKCE
- npm
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- MyAnimeList integration
- anime data
- personal list management
- natural language queries
source: https://github.com/Grinv/mal-mcp
discovered_at: '2026-07-09T11:53:42Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides MyAnimeList integration for AI agents and clients. It enables natural language queries for anime/manga data via Jikan (unofficial API) and personal list management via the official MyAnimeList API, with optional user authentication.

## Key Features
- Hybrid backend combining Jikan (unofficial MAL API) for read-only data and official MAL API for personal list management
- Supports natural language queries via any MCP-compatible client (Claude, Cursor, VS Code, etc.)
- One-click OAuth login for MyAnimeList personal list tools using PKCE flow
- Comprehensive toolset for searching, retrieving, and managing anime/manga data
- Configurable via environment variables with optional caching and rate limiting

## Why It Matters for RAG Builders
It bridges AI agents with MyAnimeList data, enabling seamless natural language interactions for anime/manga enthusiasts while supporting personal list management without complex setup.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jikan API
Automated review identified **Jikan API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyAnimeList API
Automated review identified **MyAnimeList API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth PKCE
Automated review identified **OAuth PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
