---
title: "omhq/settra"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Cube Core", "Steampipe", "PostgreSQL", "MCP (Model Context Protocol)", "aiosqlite", "asyncpg", "aiofiles"]
quality_score: 7
rag_relevance: 9
tags: ["semantic layer", "cross-app analytics", "progressive modeling", "MCP server", "governed AI"]
source: "https://github.com/omhq/settra"
discovered_at: "2026-07-05T20:59:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Settra provides AI assistants with a governed analytics layer over live business applications like Google Sheets, Stripe, and HubSpot. It enables progressive semantic modeling by dynamically generating and managing Cube Core model files, allowing agents to ask questions and reuse validated business metrics without requiring a pre-built data warehouse.

## Key Features
- Dynamic generation of Cube Core model files for live business apps without requiring a pre-built data warehouse
- Governed semantic modeling with provenance tracking, validation, and approval workflows for AI agents
- MCP server exposing bounded, paginated tools and resources for safe agent interactions with live data
- Support for progressive modeling where agents inspect, propose, and save reusable business metrics
- Built-in introspection tools (sampling, profiling) to help agents infer schema and relationships from live apps

## Why It Matters for RAG Builders
Settra enables AI assistants to interact with live business data in a governed, semantic way without requiring a complete data model upfront, making it essential for building reliable RAG systems over operational applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cube Core
Automated review identified **Cube Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Steampipe
Automated review identified **Steampipe** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### aiosqlite
Automated review identified **aiosqlite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncpg
Automated review identified **asyncpg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### aiofiles
Automated review identified **aiofiles** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
