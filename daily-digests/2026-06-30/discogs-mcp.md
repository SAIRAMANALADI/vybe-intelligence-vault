---
title: "WOIII-me/Discogs-MCP"
category: "Orchestrator"
tech_stack: ["TypeScript", "Cloudflare Workers", "Model Context Protocol (MCP)", "Discogs API", "OAuth 2.1", "KV Storage", "REST API", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["Discogs", "MCP Server", "Music Data", "Pressing Analysis", "Recommendation Engine"]
source: "https://github.com/WOIII-me/Discogs-MCP"
discovered_at: "2026-06-30T10:56:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for Discogs, hosted on Cloudflare Workers, that enables AI agents to find the best-sounding pressing of an album, provide mood-based recommendations, and analyze user collections using multi-signal scoring and evidence-weighted ranking.

## Key Features
- Multi-signal pressing scoring (sonic, collector, value) with evidence dossiers for transparency
- Mood and taste-based recommendations from user collections using community data
- OAuth-based authentication with Discogs for secure access
- REST API for non-LLM clients with CORS support
- Caching layer (KV) for Discogs API calls to improve performance and reduce rate limits

## Why It Matters for RAG Builders
It provides structured, evidence-backed access to Discogs' music data, enabling AI agents to deliver precise album pressing recommendations and personalized music discovery for RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discogs API
Automated review identified **Discogs API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KV Storage
Automated review identified **KV Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
