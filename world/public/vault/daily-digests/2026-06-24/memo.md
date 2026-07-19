---
title: jagoff/memo
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Python
- Apple MLX
- SQLite
- SQLite-vec
- Markdown
- Obsidian
- MCP (Model Context Protocol)
- BM25 (FTS5)
- RRF (Reciprocal Rank Fusion)
- UMAP/PCA
- Plotly
quality_score: 9
rag_relevance: 10
tags:
- local AI memory
- Apple Silicon
- Markdown storage
- MCP server
- semantic search
source: https://github.com/jagoff/memo
discovered_at: '2026-06-24T02:50:03Z'
evaluated_by: mistral-small-latest
---

## Summary
Memo provides persistent, 100% local semantic memory for AI agents running on Apple Silicon via Apple MLX. It stores memories as Markdown files with SQLite-based embeddings, enabling agents to recall past context without cloud APIs or external dependencies.

## Key Features
- 100% local execution with MLX on Apple Silicon, no cloud APIs or external dependencies
- Hybrid retrieval combining vector search (SQLite-vec) and BM25 with optional MLX cross-encoder reranking
- Ambient recall daemon injects top memories into agent prompts automatically (<200ms latency)
- Time-machine functionality to rewind and query past states of the memory corpus
- Markdown files as the source of truth, compatible with Obsidian and editable via any text editor

## Why It Matters for RAG Builders
Memo enables RAG builders to deploy a fully local, privacy-preserving memory system that reduces token overhead and improves agent recall without relying on external vector databases or cloud services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple MLX
Automated review identified **Apple MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (FTS5)
Automated review identified **BM25 (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UMAP/PCA
Automated review identified **UMAP/PCA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Plotly
Automated review identified **Plotly** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
