---
title: txn2/mcp-data-platform
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Go
- MCP (Model Context Protocol)
- DataHub
- Trino
- PostgreSQL
- S3
- TypeScript
- OAuth 2.1
- Prometheus
- OpenTelemetry
quality_score: 9
rag_relevance: 10
tags:
- semantic layer
- data governance
- MCP server
- cross-enrichment
- knowledge capture
source: https://github.com/txn2/mcp-data-platform
discovered_at: '2026-07-08T17:25:15Z'
evaluated_by: mistral-small-latest
---

## Summary
A semantic data platform MCP server that enriches AI assistant queries with business context from a DataHub semantic layer, enabling governed access to data infrastructure while providing persistent memory, knowledge capture, and multi-tool orchestration through a unified interface.

## Key Features
- Bidirectional cross-enrichment of tool responses with semantic context (owners, tags, deprecation warnings, quality scores) from DataHub
- Persistent memory layer with PostgreSQL + pgvector for hybrid semantic/lexical recall across sessions
- Governed knowledge capture workflow with human-in-the-loop review and approval for writing insights back to DataHub
- Unified gateway for MCP servers, REST APIs, and third-party tools under a single authentication and audit pipeline
- Built-in web portal for operators (dashboards, audit logs) and users (artifact collections, knowledge sharing)

## Why It Matters for RAG Builders
It bridges the gap between raw data access and AI assistants by injecting critical business context into every query, ensuring responses are accurate, governed, and actionable for RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trino
Automated review identified **Trino** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
