---
title: "EOSC-Data-Commons/data-commons-search"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "PostgreSQL", "OpenSearch", "Model Context Protocol (MCP)", "Docker", "uv", "Streamable HTTP", "SSE (Server-Sent Events)"]
quality_score: 9
rag_relevance: 9
tags: ["natural language search", "dataset discovery", "MCP server", "LLM integration", "open-access data"]
source: "https://github.com/EOSC-Data-Commons/data-commons-search"
discovered_at: "2026-06-26T06:54:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A server providing natural language search over open-access datasets via HTTP and Model Context Protocol (MCP) endpoints. It enables LLM-assisted discovery of datasets and tools through a pre-indexed OpenSearch instance, supporting both direct API calls and MCP client integrations.

## Key Features
- Exposes HTTP POST and MCP endpoints for dataset/tool discovery via natural language queries
- Supports streaming responses via Server-Sent Events (SSE) and AG-UI protocol
- Integrates with pre-indexed OpenSearch instances for efficient data retrieval
- Provides authentication and rate-limiting for secure API access
- Includes benchmarking and stress testing tools for performance validation

## Why It Matters for RAG Builders
It enables RAG builders to integrate natural language search over open-access datasets directly into their AI pipelines via MCP or HTTP endpoints, reducing the need for custom search infrastructure.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSearch
Automated review identified **OpenSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
