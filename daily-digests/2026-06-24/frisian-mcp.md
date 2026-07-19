---
title: Frisian-MCP/frisian-mcp
category: daily-digests/2026-06-24
tech_stack:
- Python
- Django
- Django REST Framework
- Model Context Protocol (MCP)
- HTTP/JSON-RPC
- OAuth 2.0
- HMAC
- PostgreSQL
quality_score: 9
rag_relevance: 10
tags:
- MCP server
- Django integration
- token efficiency
- auto-discovery
- permission gating
source: https://github.com/Frisian-MCP/frisian-mcp
discovered_at: '2026-06-24T10:23:31Z'
evaluated_by: mistral-small-latest
---

## Summary
frisian-mcp is a Django-based Model Context Protocol (MCP) gateway that automatically converts Django REST Framework ViewSets into MCP tools with zero boilerplate. It optimizes token efficiency for agent workflows by leveraging dispatcher patterns and lean response envelopes, reducing context window usage by up to 99%.

## Key Features
- Automatic conversion of DRF ViewSets into MCP tools with zero boilerplate
- Dispatcher pattern for reducing tool surface and token usage by up to 99%
- Built-in OAuth 2.0 and static token authentication with HMAC hashing
- Per-agent permission gating and tier-based access control
- Lean response envelopes for bulk operations to minimize context window usage

## Why It Matters for RAG Builders
It enables AI agents to interact with Django-based APIs efficiently by reducing token overhead and providing fine-grained permission control, making it essential for scalable RAG and agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Django
Automated review identified **Django** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Django REST Framework
Automated review identified **Django REST Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
