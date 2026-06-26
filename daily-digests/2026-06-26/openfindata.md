---
title: "robertoecf/OpenFinData"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "SQLite", "FTS5 (Full-Text Search)", "Asyncio", "Pydantic", "Poetry", "GitHub Actions", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["Brazilian financial data", "public data aggregation", "REST API", "CLI tool", "MCP server"]
source: "https://github.com/robertoecf/OpenFinData"
discovered_at: "2026-06-26T02:55:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenFinData provides an open-source infrastructure to query Brazilian public financial data through Python, REST APIs, CLI, and MCP. It aggregates multiple public sources into a unified, auditable layer for analysts, developers, and AI agents.

## Key Features
- Unified Python library for asynchronous data fetching from 14+ Brazilian public financial sources
- REST API with Swagger/ReDoc documentation and MCP server integration
- CLI tool (`findata`) for quick data queries and server management
- Embedded SQLite FTS5 registry for resolving CNPJ, ticker, and company names with fuzzy matching
- Comprehensive testing suite with adversarial reviews and regression tests

## Why It Matters for RAG Builders
It provides a critical, auditable layer for accessing Brazilian public financial data, enabling RAG systems to enrich context with real-time or historical financial metrics without relying on proprietary APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Poetry
Automated review identified **Poetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
