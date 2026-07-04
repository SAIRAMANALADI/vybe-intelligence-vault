---
title: "Artexis10/exomem"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "FastAPI", "PyTorch", "Tesseract OCR", "SQLite FTS5", "CLIP", "Whisper"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "knowledge base", "Obsidian integration", "local RAG", "multimodal retrieval"]
source: "https://github.com/Artexis10/exomem"
discovered_at: "2026-07-04T15:07:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
exomem transforms a user's existing Markdown/Obsidian vault into a local, searchable knowledge substrate for AI agents via MCP tools. It enables agents like Claude Code, Codex, or Cursor to interact with plain, editable files without proprietary imports or data migration.

## Key Features
- Converts existing Markdown/Obsidian vaults into a searchable knowledge substrate without data migration
- Supports hybrid retrieval (keyword/BM25 + embeddings) with sub-second latency at scale (50k+ notes)
- Exposes typed MCP tools for knowledge operations (find, get, add, note, edit, audit, etc.) with CLI/REST parity
- Enables multimodal extraction (PDFs, Office docs, images, audio/video) via optional extras
- Provides audit queues, attention tracking, and deterministic history logging for knowledge governance

## Why It Matters for RAG Builders
It enables AI agents to interact with a user's existing, editable knowledge base in real-time without proprietary imports, ensuring local-first, portable, and maintainable RAG workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract OCR
Automated review identified **Tesseract OCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLIP
Automated review identified **CLIP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper
Automated review identified **Whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
