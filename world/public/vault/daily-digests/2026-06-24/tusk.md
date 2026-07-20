---
title: germanamz/tusk
category: daily-digests/2026-06-24
tech_stack:
- Go
- SQLite
- Ollama
- Markdown
- MCP (Model Context Protocol)
- TOML
- fsnotify
quality_score: 9
rag_relevance: 9
tags:
- local-first
- markdown indexing
- semantic search
- agent integration
- schema validation
source: https://github.com/germanamz/tusk
discovered_at: '2026-06-24T20:48:53Z'
evaluated_by: mistral-small-latest
---

## Summary
Tusk transforms a directory of markdown files into a schema-validated, semantically-indexed graph, enabling local-first retrieval and querying via CLI or MCP-compatible agents. It indexes files, maintains a live SQLite graph with embeddings, and supports structural and semantic queries.

## Key Features
- Local-first architecture with no external dependencies for core functionality
- Schema-validated graph with dynamic schema reloading via `tusk.toml`
- Hybrid querying combining structural filters and Ollama-backed semantic search
- Real-time indexing with live watcher and incremental updates
- MCP server integration for seamless agent tooling (Claude Code, Cursor, etc.)

## Why It Matters for RAG Builders
Tusk provides a robust, local-first foundation for RAG pipelines by turning unstructured markdown into a queryable, semantically enriched graph that agents can interact with natively.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fsnotify
Automated review identified **fsnotify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
