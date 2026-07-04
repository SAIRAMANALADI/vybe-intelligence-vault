---
title: "omhq/settra"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Cube.js", "Steampipe", "PostgreSQL", "MCP (Model Context Protocol)", "aiosqlite", "asyncpg", "aiofiles"]
quality_score: 8
rag_relevance: 9
tags: ["semantic layer", "cross-app analytics", "MCP server", "progressive modeling", "governed AI"]
source: "https://github.com/omhq/settra"
discovered_at: "2026-07-04T22:59:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Settra provides a governed analytics layer for AI assistants to interact with live business applications through semantic modeling. It enables progressive, user-approved semantic overlays over raw data sources like Google Sheets, Stripe, and HubSpot, allowing agents to maintain context without requiring a pre-built data model.

## Key Features
- Progressive semantic modeling: Agents inspect live apps, propose metrics, and validate relationships before saving reusable semantics.
- Governed analytics: User-approved overlays preserve provenance, assumptions, and validation results for traceability.
- MCP integration: Exposes a streamable HTTP MCP server for AI assistants to interact with live business data without direct SQL.
- Connector ecosystem: Supports Google Sheets, Stripe, HubSpot, and others via Steampipe plugins and Cube models.
- Admin UI and API: Provides a FastAPI backend for managing connections, semantics, and diagnostics.

## Why It Matters for RAG Builders
Settra enables AI assistants to maintain governed, context-aware interactions with live business data without requiring a pre-built data warehouse or complete schema.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cube.js
Automated review identified **Cube.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
