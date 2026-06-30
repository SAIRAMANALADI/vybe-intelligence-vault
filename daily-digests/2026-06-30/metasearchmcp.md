---
title: "gefsikatsinelou/MetaSearchMCP"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "Pydantic", "Docker", "HTTP APIs", "REST APIs", "Concurrent programming", "Environment variables"]
quality_score: 9
rag_relevance: 10
tags: ["metasearch", "MCP server", "multi-provider aggregation", "LLM workflows", "structured search"]
source: "https://github.com/gefsikatsinelou/MetaSearchMCP"
discovered_at: "2026-06-30T19:03:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MetaSearchMCP is an open-source metasearch backend designed for MCP, AI agents, and LLM workflows. It aggregates, normalizes, and deduplicates search results from multiple providers into a stable JSON schema, exposing both an HTTP API and an MCP server for machine-consumable search operations.

## Key Features
- Concurrent multi-provider search aggregation with provider-level timeout isolation
- Unified JSON schema for normalized results across web, academic, developer, and knowledge sources
- Deduplication and partial-failure handling for robust search execution
- HTTP API with OpenAPI documentation and MCP server over stdio for agent integration
- Configurable provider selection by name or semantic tags (e.g., web, academic, code)

## Why It Matters for RAG Builders
MetaSearchMCP provides a critical orchestration layer for RAG pipelines by unifying disparate search providers into a single, predictable interface, enabling reliable and scalable retrieval for AI agents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP APIs
Automated review identified **HTTP APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Concurrent programming
Automated review identified **Concurrent programming** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Environment variables
Automated review identified **Environment variables** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
