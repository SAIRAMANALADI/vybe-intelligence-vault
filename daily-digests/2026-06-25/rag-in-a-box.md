---
title: "DevNexsler/RAG-In-A-Box"
category: "Orchestrator"
tech_stack: ["Python", "LanceDB", "Tantivy (BM25)", "Prefect 3.x", "Qwen3-Embedding-8B", "GPT-4.1 Mini", "Gemini Vision (OCR)", "DeepSeek OCR2 (local OCR)", "Qwen3-Reranker-8B", "MCP (Model Context Protocol)", "FastAPI", "Ollama (local mode)"]
quality_score: 9
rag_relevance: 10
tags: ["RAG pipeline", "MCP server", "Hybrid search", "Document enrichment", "Taxonomy management"]
source: "https://github.com/DevNexsler/RAG-In-A-Box"
discovered_at: "2026-06-25T19:57:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RAG-In-A-Box provides a production-grade RAG pipeline packaged as an MCP server, enabling any MCP-compatible AI assistant to search and query document collections with minimal setup. It supports multi-format documents (Markdown, PDFs, images) and offers hybrid search, LLM enrichment, and taxonomy management.

## Key Features
- 10-step hybrid search pipeline combining vector, BM25, reranker, and MMR for high-precision retrieval
- LLM-powered enrichment extracting summaries, entities, topics, and key facts from documents
- Built-in taxonomy system with semantic matching and MCP tools for CRUD operations
- Multi-format document support (Markdown, PDFs, images) with automatic OCR for scanned content
- Seamless integration with MCP-compatible AI assistants (Claude, Cursor, OpenClaw) via a single config entry

## Why It Matters for RAG Builders
It simplifies deploying a production-grade RAG system with advanced features like hybrid search and LLM enrichment, reducing setup time and infrastructure overhead for AI engineers.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy (BM25)
Automated review identified **Tantivy (BM25)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prefect 3.x
Automated review identified **Prefect 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-Embedding-8B
Automated review identified **Qwen3-Embedding-8B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPT-4.1 Mini
Automated review identified **GPT-4.1 Mini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini Vision (OCR)
Automated review identified **Gemini Vision (OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek OCR2 (local OCR)
Automated review identified **DeepSeek OCR2 (local OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-Reranker-8B
Automated review identified **Qwen3-Reranker-8B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local mode)
Automated review identified **Ollama (local mode)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
