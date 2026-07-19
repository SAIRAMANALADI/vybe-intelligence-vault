---
title: drpwchen/vault-search
category: daily-digests/2026-07-09
tech_stack:
- Python
- FastAPI
- LanceDB
- Ollama
- bge-m3
- Obsidian Plugin
- MCP Server
- Personalized PageRank
- Vector Embeddings
quality_score: 9
rag_relevance: 9
tags:
- semantic search
- local-first
- RAG
- Obsidian plugin
- MCP server
source: https://github.com/drpwchen/vault-search
discovered_at: '2026-07-09T08:26:45Z'
evaluated_by: mistral-small-latest
---

## Summary
A local-first semantic search and RAG toolkit for Obsidian vaults that transforms markdown notes into a queryable knowledge base using vector search, Personalized PageRank, and local LLMs. Includes an Obsidian plugin and an MCP server for AI agent integration.

## Key Features
- Semantic search over Obsidian vaults using local embeddings (bge-m3) with LanceDB vector index
- Personalized PageRank graph retrieval for multi-hop and related note discovery
- Three integrated tools: Vault Search, Related Notes, and Vault Chat (local or hybrid modes)
- Dual front-ends: Obsidian plugin and MCP server for AI agent integration (e.g., Claude Code)
- Fully local, private, and cost-free operation with optional cloud LLM integration

## Why It Matters for RAG Builders
It enables private, local-first semantic search and RAG over personal knowledge bases, eliminating cloud dependencies and API costs while supporting multi-modal retrieval and agent integration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bge-m3
Automated review identified **bge-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian Plugin
Automated review identified **Obsidian Plugin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Personalized PageRank
Automated review identified **Personalized PageRank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
