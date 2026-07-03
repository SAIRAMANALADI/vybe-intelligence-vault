---
title: "riyogarta/syne"
category: "Agent Framework"
tech_stack: ["Python", "PostgreSQL", "pgvector", "Ollama", "Telegram Bot API", "Docker", "FastAPI", "LLM (Ollama, Anthropic, OpenAI, etc.)", "Knowledge Graph", "Semantic Embeddings"]
quality_score: 9
rag_relevance: 8
tags: ["long-term memory", "self-hosted", "Telegram bot", "PostgreSQL-native", "AI assistant"]
source: "https://github.com/riyogarta/syne"
discovered_at: "2026-07-03T07:00:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Syne is a self-hosted Telegram bot that functions as a personal AI assistant with persistent long-term memory. It leverages PostgreSQL with pgvector for semantic search and a knowledge graph for entity-relation queries, enabling memory recall across sessions without external API costs when using local models like Ollama.

## Key Features
- Persistent long-term memory with semantic search and knowledge graph support
- User-confirmed memory filtering with a 3-layer evaluator system
- Multi-tier permissions (owner/family/public) with granular access control
- Runtime configuration entirely managed via PostgreSQL (no config files)
- Cost-effective with optional free local models (Ollama) and paid API fallback

## Why It Matters for RAG Builders
Syne provides a critical foundation for RAG builders by offering a self-hosted, persistent memory system that integrates seamlessly with PostgreSQL, enabling scalable and customizable long-term context retention for AI assistants.

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

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Anthropic, OpenAI, etc.)
Automated review identified **LLM (Ollama, Anthropic, OpenAI, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Knowledge Graph
Automated review identified **Knowledge Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Embeddings
Automated review identified **Semantic Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
