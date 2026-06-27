---
title: "getzikra/Zikra"
category: "Orchestrator"
tech_stack: ["Python", "PostgreSQL", "pgvector", "SQLite", "MCP (Model Context Protocol)", "n8n", "FastAPI", "asyncpg", "OpenAI API (embeddings)"]
quality_score: 9
rag_relevance: 9
tags: ["memory management", "multi-agent collaboration", "self-hosted", "MCP server", "team knowledge base"]
source: "https://github.com/getzikra/Zikra"
discovered_at: "2026-06-27T04:04:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Zikra is a self-hosted, governed memory layer for AI agents and teams, enabling shared, structured, and scalable memory management across multiple agents, projects, and users with role-based access control and built-in memory hygiene.

## Key Features
- Shared memory pool for multiple AI agents (Claude Code, Gemini CLI, etc.) with role-based access control
- Multi-project namespacing with isolated memory contexts
- Built-in memory hygiene with confidence decay, orphan detection, and stale cleanup
- Hybrid vector + keyword search for efficient memory retrieval
- Auto-save hooks for session integration with MCP-compatible tools

## Why It Matters for RAG Builders
Zikra provides a critical shared memory infrastructure for AI-native teams, enabling consistent context and knowledge retention across agents and projects without relying on cloud-based solutions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### n8n
Automated review identified **n8n** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncpg
Automated review identified **asyncpg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (embeddings)
Automated review identified **OpenAI API (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
