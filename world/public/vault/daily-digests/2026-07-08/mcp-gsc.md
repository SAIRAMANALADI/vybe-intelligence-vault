---
title: AKzar1el/mcp-gsc
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- TypeScript
- Cloudflare Workers
- Model Context Protocol (MCP)
- Google OAuth
- Google Search Console API
- Wrangler (Cloudflare CLI)
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- Google Search Console
- SEO analytics
- Cloudflare Workers
- AI client integration
source: https://github.com/AKzar1el/mcp-gsc
discovered_at: '2026-07-08T21:02:29Z'
evaluated_by: mistral-small-latest
---

## Summary
mcp-gsc is an open-source Model Context Protocol (MCP) server that enables AI clients like Claude, Cursor, and ChatGPT to interact with Google Search Console data. It provides read-only access to site performance metrics, indexing status, and sitemap health via a self-hostable Cloudflare Workers deployment.

## Key Features
- Exposes five read-only tools for Google Search Console data (queries, clicks, indexing, sitemaps)
- Self-hostable on Cloudflare Workers with one-click Google OAuth onboarding
- Supports MCP-compatible clients (Claude, Cursor, ChatGPT) for seamless AI integration
- Includes offline unit tests and CI/CD for reliability
- Provides structured responses with pagination and tool annotations for client discovery

## Why It Matters for RAG Builders
It bridges AI assistants with real-time Google Search Console data, enabling RAG systems to answer SEO and site performance queries without manual API integration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google OAuth
Automated review identified **Google OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Search Console API
Automated review identified **Google Search Console API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler (Cloudflare CLI)
Automated review identified **Wrangler (Cloudflare CLI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
