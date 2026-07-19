---
title: memtomem/memtomem
category: daily-digests/2026-06-23
tech_stack:
- Python
- MCP (Model Context Protocol)
- BM25
- ONNX
- Dense Embeddings
- SQLite
- FastAPI
- React (Web UI)
- Tree-sitter (for code parsing)
- uv (package manager)
quality_score: 9
rag_relevance: 10
tags:
- long-term memory
- hybrid search
- markdown indexing
- MCP tools
- AI agent infrastructure
source: https://github.com/memtomem/memtomem
discovered_at: '2026-06-23T10:39:21Z'
evaluated_by: mistral-small-latest
---

## Summary
memtomem is a markdown-first long-term memory system for AI coding agents that indexes plain text files (markdown, code, JSON, etc.) into a searchable knowledge base. It enables hybrid search (BM25 + semantic) and provides MCP tools for agents to interact with indexed memories.

## Key Features
- Hybrid search combining BM25 keyword and dense vector embeddings for semantic retrieval
- Incremental indexing with SHA-256 diffing to avoid reprocessing unchanged files
- Namespaces for organizing memories into scoped groups with visual management in Web UI
- MCP tool integration for explicit memory operations (no background hooks or auto-fire)
- Semantic chunking for markdown, code (Python, JS/TS), and structured data (JSON/YAML)

## Why It Matters for RAG Builders
It provides a vendor-neutral, markdown-first memory system that enables AI agents to retain and retrieve long-term knowledge without vendor lock-in or background hooks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dense Embeddings
Automated review identified **Dense Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Web UI)
Automated review identified **React (Web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (for code parsing)
Automated review identified **Tree-sitter (for code parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
