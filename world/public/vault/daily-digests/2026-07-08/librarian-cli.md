---
title: Terobyte/librarian-cli
category: daily-digests/2026-07-08
tech_stack:
- Python
- MCP (Model Context Protocol)
- FTS5 (Full-Text Search)
- TOML (config)
- CLI (Click or similar)
quality_score: 9
rag_relevance: 10
tags:
- deterministic RAG
- ebook processing
- offline retrieval
- MCP server
- token counting
source: https://github.com/Terobyte/librarian-cli
discovered_at: '2026-07-08T17:27:40Z'
evaluated_by: mistral-small-latest
---

## Summary
librarian-cli converts ebooks (FB2, EPUB, DOCX, PDF, etc.) into clean, token-counted Markdown chapters with deterministic output. It includes a built-in MCP server for offline RAG, enabling Claude to browse, search, and retrieve chapters without embeddings, network calls, or API keys.

## Key Features
- Converts multiple ebook formats (EPUB, PDF, DOCX, etc.) into clean Markdown chapters with token counts
- Deterministic pipeline with byte-identical output for identical input (no randomness or network calls)
- Built-in MCP server for offline RAG, enabling Claude to interact with the bookshelf via 5 read-only tools
- Full-text search (FTS5) with RU/EN stemming and quality metrics (coverage, structure, garbage, encoding, dehyphenation)
- Offline-vendored tokenizer (o200k_base) and configurable library paths for local operation

## Why It Matters for RAG Builders
It enables deterministic, offline RAG pipelines for AI systems by converting ebooks into structured, token-counted chapters with no embeddings or network dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (Click or similar)
Automated review identified **CLI (Click or similar)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
