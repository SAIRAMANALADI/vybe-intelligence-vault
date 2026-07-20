---
title: pvliesdonk/markdown-vault-mcp
category: daily-digests/2026-06-25
tech_stack:
- Python
- SQLite
- FastEmbed
- Ollama
- OpenAI
- FastMCP
- Docker
- Git
- YAML
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- Markdown indexing
- semantic search
- full-text search
- knowledge base
source: https://github.com/pvliesdonk/markdown-vault-mcp
discovered_at: '2026-06-25T05:06:33Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that indexes and exposes a directory of Markdown files (e.g., Obsidian vaults) via full-text, semantic, and hybrid search. It supports incremental reindexing, frontmatter-aware indexing, and non-markdown attachments, enabling AI agents to interact with local knowledge bases.

## Key Features
- Full-text search with SQLite FTS5 and BM25 scoring
- Semantic and hybrid search with configurable embedding providers (FastEmbed, Ollama, OpenAI)
- Incremental reindexing with hash-based change detection for efficient updates
- Frontmatter-aware indexing and structured filtering with required field enforcement
- 31 LLM-visible MCP tools for search, read, write, edit, and admin operations

## Why It Matters for RAG Builders
It provides a robust, local-first interface for AI agents to interact with Markdown-based knowledge bases, enabling seamless integration of personal or organizational data into RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
