---
title: ficaviolaodorata520/met-museum-mcp-server
category: daily-digests/2026-06-24
tech_stack:
- TypeScript
- Bun
- MCP SDK
- Node.js
- Docker
- Zod
- OpenTelemetry
quality_score: 8
rag_relevance: 9
tags:
- MCP Server
- Metropolitan Museum API
- Artwork Retrieval
- Open-Access Images
- RAG Data Source
source: https://github.com/ficaviolaodorata520/met-museum-mcp-server
discovered_at: '2026-06-24T06:50:24Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides tools to search the Metropolitan Museum of Art's collection, fetch full artwork records, and retrieve open-access images via STDIO or Streamable HTTP transport.

## Key Features
- Three specialized tools for querying the Met's 500K+ artwork collection: department listing, keyword search with filters, and full object record fetching
- Supports CC0 open-access images and structured metadata with provenance flags for agent-friendly output
- Deployable via STDIO, Streamable HTTP, or Docker with configurable authentication and logging
- Parallel batch fetching with partial success handling and truncation signaling for large queries
- Built on @cyanheads/mcp-ts-core for declarative tool definitions, unified error handling, and pluggable storage backends

## Why It Matters for RAG Builders
Provides structured, agent-friendly access to the Met's open-access art collection, enabling RAG systems to enrich responses with high-quality, provenance-verified artwork data and images.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
