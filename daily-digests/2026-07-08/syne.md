---
title: riyogarta/syne
category: daily-digests/2026-07-08
tech_stack:
- Python
- PostgreSQL
- pgvector
- Ollama
- Telegram Bot API
- Docker
- LLM (Ollama, Anthropic, Google, OpenAI, Together AI)
- FastAPI
- asyncpg
- HNSW (Hierarchical Navigable Small World) for vector search
quality_score: 9
rag_relevance: 10
tags:
- long-term memory
- self-hosted
- PostgreSQL-native
- persistent AI
- semantic search
source: https://github.com/riyogarta/syne
discovered_at: '2026-07-08T02:06:29Z'
evaluated_by: mistral-small-latest
---

## Summary
Syne is a self-hosted personal AI assistant for Telegram that provides persistent long-term memory using PostgreSQL and pgvector. It enables AI agents to remember user interactions across sessions with near-zero API costs by leveraging local Ollama models or free OAuth providers.

## Key Features
- Persistent long-term memory with semantic search via pgvector and knowledge graph for entity-relation queries
- User-confirmed memory filtering with a 3-layer evaluator (quick rules, local LLM, similarity dedup) to control what enters memory
- Multi-tier permissions (owner/family/public) with Linux-style octal rules for granular access control
- Runtime configuration entirely stored in PostgreSQL tables, modifiable via conversation (no config files)
- Cost-effective operation with local Ollama embeddings and optional paid API providers for resilience

## Why It Matters for RAG Builders
Syne provides a critical foundation for RAG systems by enabling agents to retain and recall contextually relevant information across sessions, reducing hallucinations and improving user experience through persistent memory.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Anthropic, Google, OpenAI, Together AI)
Automated review identified **LLM (Ollama, Anthropic, Google, OpenAI, Together AI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncpg
Automated review identified **asyncpg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World) for vector search
Automated review identified **HNSW (Hierarchical Navigable Small World) for vector search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
