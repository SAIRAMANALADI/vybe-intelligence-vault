---
title: retospect/precis-mcp
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Python
- PostgreSQL
- pgvector
- FastAPI
- Jinja2
- HTMX
- psycopg3
- Model Context Protocol (MCP)
- sentence-transformers
- sympy
- Wolfram Alpha
- Perplexity API
- EPO OPS API
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- hybrid search
- content management
- agent tooling
- PostgreSQL
source: https://github.com/retospect/precis-mcp
discovered_at: '2026-06-24T20:53:24Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides LLM agents with a unified seven-verb API for reading, writing, searching, and managing diverse content types including papers, documents, code, state, patents, and cached tool calls. It leverages PostgreSQL with pgvector for hybrid search and supports extensibility via plugins.

## Key Features
- Seven-verb unified API (get, search, put, edit, delete, tag, link) over diverse content kinds
- Hybrid lexical and semantic search with pgvector and Reciprocal Rank Fusion (RRF)
- PostgreSQL-backed storage with pgvector for embeddings and chunk-level discovery
- Extensible plugin architecture for adding new content kinds and handlers
- Progressive disclosure design with in-depth help skills for each capability

## Why It Matters for RAG Builders
It provides a standardized, extensible interface for LLM agents to interact with and manage diverse content types, enabling seamless integration into RAG pipelines and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTMX
Automated review identified **HTMX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### psycopg3
Automated review identified **psycopg3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sympy
Automated review identified **sympy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wolfram Alpha
Automated review identified **Wolfram Alpha** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Perplexity API
Automated review identified **Perplexity API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EPO OPS API
Automated review identified **EPO OPS API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
