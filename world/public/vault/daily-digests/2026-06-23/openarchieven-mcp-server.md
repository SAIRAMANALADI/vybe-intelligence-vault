---
title: coret/openarchieven-mcp-server
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- Model Context Protocol (MCP)
- OpenAPI
- Redis
- StreamableHTTP
- Server-Sent Events (SSE)
- IIIF
- OpenSeadragon
quality_score: 9
rag_relevance: 8
tags:
- genealogy
- historical data
- MCP server
- hybrid API
- document transcription
source: https://github.com/coret/openarchieven-mcp-server
discovered_at: '2026-06-23T10:40:07Z'
evaluated_by: mistral-small-latest
---

## Summary
A production-grade MCP server that converts the Open Archives OpenAPI specification into callable tools for genealogical research, historical weather, and document transcriptions. Supports multiple transports including MCP Remote, HTTP JSON API, and SSE streaming with optional Redis caching.

## Key Features
- Auto-generates 21 MCP tools from OpenAPI specification for genealogical records, weather, and transcriptions
- Supports multiple transports: MCP Remote, HTTP JSON API, SSE, and chunked HTTP streaming
- Includes an interactive IIIF deep-zoom viewer for transcribed historical documents
- Optional Redis caching with per-tool TTLs for performance optimization
- Schema-perfect validation and rate limiting for upstream API calls

## Why It Matters for RAG Builders
It provides a unified, schema-aware interface to a rich historical dataset, enabling AI systems to retrieve and process genealogical, weather, and document transcription data efficiently.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### StreamableHTTP
Automated review identified **StreamableHTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Server-Sent Events (SSE)
Automated review identified **Server-Sent Events (SSE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IIIF
Automated review identified **IIIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSeadragon
Automated review identified **OpenSeadragon** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
