---
title: da-troll/planhat-mcp
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- Model Context Protocol (MCP)
- Planhat API
- uv
- pytest
- ruff
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- Planhat CRM
- local AI integration
- customer data access
- API token authentication
source: https://github.com/da-troll/planhat-mcp
discovered_at: '2026-07-07T13:17:18Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server for Planhat CRM that enables AI clients like Claude Desktop to interact with customer data via plain English queries. It runs locally on a user's machine, authenticating with a Planhat API token, and provides 60 tools across 12 Planhat resource types for CRUD operations.

## Key Features
- 60 tools across 12 Planhat resource types (companies, contacts, opportunities, notes, etc.)
- Local execution with no third-party hosting or OAuth flows required
- Read-only and delete-disabled modes via environment variables for security
- Seamless integration with Claude Desktop and other MCP clients
- Offline test suite and linting for local development

## Why It Matters for RAG Builders
It enables secure, local, and direct interaction with Planhat CRM data for AI agents, eliminating the need for dashboards or exports while maintaining strict access controls.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Planhat API
Automated review identified **Planhat API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
