---
title: Artexis10/exomem
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Python
- MCP (Model Context Protocol)
- SQLite
- FastAPI
- PyTorch
- CLIP
- BM25
- Obsidian
- Markdown
- Docker
quality_score: 9
rag_relevance: 10
tags:
- MCP server
- knowledge management
- local-first RAG
- Obsidian integration
- agent orchestration
source: https://github.com/Artexis10/exomem
discovered_at: '2026-07-08T21:01:34Z'
evaluated_by: mistral-small-latest
---

## Summary
exomem is a self-hosted MCP server that transforms a user's existing Markdown/Obsidian vault into a durable, governed knowledge substrate for AI agents. It enables agents like Claude Code, Codex, or Cursor to search, retrieve, and interact with local files—including text, PDFs, images, and audio—while preserving file ownership and portability.

## Key Features
- Turns existing Markdown/Obsidian vaults into searchable knowledge bases without importing files into proprietary stores
- Supports hybrid retrieval (keyword/BM25 and semantic search) with sub-second latency at 50k+ notes
- Provides typed knowledge operations, audit queues, and multimodal extraction (PDFs, Office docs, images, audio)
- Offers resource modes (quiet/normal/performance) for CPU/GPU control and idle model unloading
- Integrates with MCP clients (Claude Code, Codex, Cursor) via skills, hooks, and portable bootstrap contracts

## Why It Matters for RAG Builders
It enables AI agents to interact with a user's existing local knowledge base in real-time, ensuring retrieval accuracy, governance, and portability without vendor lock-in.

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

### CLIP
Automated review identified **CLIP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
