---
title: "markhuangai/dense-mem"
category: "Tooling"
tech_stack: ["Go", "PostgreSQL", "Neo4j", "Redis", "MCP (Model Context Protocol)", "OpenAPI", "Docker", "Prometheus", "HTTP/REST"]
quality_score: 9
rag_relevance: 9
tags: ["AI memory", "evidence provenance", "conflict detection", "MCP server", "self-hosted"]
source: "https://github.com/markhuangai/dense-mem"
discovered_at: "2026-06-25T14:20:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Dense-Mem is a self-hosted memory layer for AI agents that preserves evidence, detects conflicts, and ensures durable facts without silent rewrites. It acts as a standalone HTTP MCP memory server, providing structured memory management with provenance, verification gates, and recall capabilities.

## Key Features
- Durable memory storage with provenance tracking for evidence and facts
- Verification gates and promotion rules to prevent silent fact rewrites
- Conflict detection that returns clarifications instead of overwriting facts
- Team and profile isolation with API key management and audit metadata
- Supports server-side embeddings, recall, and structured memory outcomes via REST/OpenAPI and MCP

## Why It Matters for RAG Builders
Dense-Mem provides a critical memory layer for AI agents that ensures trustworthy, conflict-aware, and auditable memory management, essential for building reliable RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j
Automated review identified **Neo4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
