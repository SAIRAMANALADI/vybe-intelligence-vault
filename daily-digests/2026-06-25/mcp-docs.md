---
title: "michaelkrauty/mcp-docs"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Qdrant", "OpenAI-compatible embedding APIs", "OCR (vision models)", "SQLite", "POSIX file locking"]
quality_score: 9
rag_relevance: 10
tags: ["document management", "semantic search", "OCR", "MCP server", "source integrity"]
source: "https://github.com/michaelkrauty/mcp-docs"
discovered_at: "2026-06-25T19:55:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server for document management that provides multi-format extraction, semantic search, and source integrity tracking. It integrates with Qdrant for vector storage and supports hybrid search, deduplication, and OCR for scanned documents.

## Key Features
- Multi-format document extraction (PDF, DOCX, PPTX, CSV, EPUB, etc.)
- Hybrid semantic and keyword search via Qdrant
- SHA-256 hash-based deduplication and source integrity verification
- Async background processing with worker queues for extraction and indexing
- Glossary integration for shared term definitions and fact verification

## Why It Matters for RAG Builders
It provides essential document ingestion, search, and integrity verification capabilities for RAG pipelines, ensuring high-quality, deduplicated, and verifiable data sources.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible embedding APIs
Automated review identified **OpenAI-compatible embedding APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (vision models)
Automated review identified **OCR (vision models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX file locking
Automated review identified **POSIX file locking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
