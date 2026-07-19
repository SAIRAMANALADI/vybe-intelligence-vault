---
title: no13productions/ai-agent-history-rag-mcp
category: daily-digests/2026-07-07
tech_stack:
- Python
- MCP (Model Context Protocol)
- LanceDB
- Ollama
- OpenAI API
- BM25
- RRF Reranking
- Docker
- FastAPI
- uv
- Spanner (optional)
quality_score: 9
rag_relevance: 10
tags:
- RAG
- MCP Server
- AI Agent History
- Vector Database
- Semantic Search
source: https://github.com/no13productions/ai-agent-history-rag-mcp
discovered_at: '2026-07-07T22:09:34Z'
evaluated_by: mistral-small-latest
---

## Summary
An MCP server that provides RAG over AI coding agent and chat history (Claude Code, Codex, Gemini CLI, Antigravity, ChatGPT, and Claude app exports) to solve context loss in long sessions by offering persistent, searchable memory across all sessions and tools.

## Key Features
- Multi-agent history ingestion (Claude Code, Codex, Gemini CLI, Antigravity, ChatGPT, Claude app)
- Hybrid search combining vector similarity and BM25 with RRF reranking
- Real-time indexing and incremental updates for efficiency
- Multi-machine support with centralized server mode
- Offline resilience with client-side queuing and catch-up sync

## Why It Matters for RAG Builders
It provides a unified, searchable memory layer for AI agents, enabling RAG systems to retain and retrieve context from diverse agent interactions across multiple tools and sessions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF Reranking
Automated review identified **RRF Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spanner (optional)
Automated review identified **Spanner (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
