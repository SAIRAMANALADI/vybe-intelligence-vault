---
title: "ralforion/orionbelt-semantic-layer-mcp"
category: "Agent Framework"
tech_stack: ["Python", "FastMCP", "Pydantic", "FastAPI", "HTTPX", "Ruff", "Docker", "BigQuery", "PostgreSQL", "Snowflake", "ClickHouse", "Dremio", "Databricks", "DuckDB", "MySQL"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "semantic layer", "natural language querying", "analytics execution", "LLM integration"]
source: "https://github.com/ralforion/orionbelt-semantic-layer-mcp"
discovered_at: "2026-07-05T21:01:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A thin Model Context Protocol (MCP) server that acts as a bridge between LLM clients (e.g., Claude, Cursor) and the OrionBelt Semantic Layer REST API. It delegates all business logic to the API, enabling natural language querying, model discovery, and analytics execution without embedding an engine.

## Key Features
- Delegates all tool calls to the OrionBelt Semantic Layer REST API via HTTP, ensuring no embedded business logic
- Supports both standalone and hosted deployment modes for the OrionBelt Semantic Layer API
- Auto-detects API mode (single-model or multi-model) and manages sessions dynamically
- Provides 15-19 tools (depending on API mode) for querying, model discovery, execution, and semantic graph operations
- Implements phase-scoped tool switching to present only relevant tools based on the current lifecycle stage

## Why It Matters for RAG Builders
It enables LLMs to seamlessly interact with semantic models, compile natural language queries to SQL, and execute analytics, bridging the gap between AI agents and data infrastructure.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BigQuery
Automated review identified **BigQuery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Snowflake
Automated review identified **Snowflake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClickHouse
Automated review identified **ClickHouse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dremio
Automated review identified **Dremio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Databricks
Automated review identified **Databricks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
