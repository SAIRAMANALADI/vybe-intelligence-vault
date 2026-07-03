---
title: "riyogarta/syne"
category: "Agent Framework"
tech_stack: ["Python", "PostgreSQL", "pgvector", "Ollama", "Telegram Bot API", "Docker", "FastAPI", "HNSW (Hierarchical Navigable Small World)", "LLM (qwen3, Anthropic, OpenAI, Together AI)", "Whisper STT", "Edge TTS"]
quality_score: 9
rag_relevance: 9
tags: ["long-term memory", "self-hosted", "PostgreSQL-native", "multi-tier permissions", "semantic search"]
source: "https://github.com/riyogarta/syne"
discovered_at: "2026-07-03T03:57:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Syne is a self-hosted Telegram bot that functions as a personal AI assistant with persistent long-term memory. It stores conversations and knowledge in PostgreSQL with pgvector, enabling semantic search and entity-relation queries while minimizing API costs through local Ollama models or free OAuth providers.

## Key Features
- Persistent long-term memory with decay-based forgetting and conflict resolution
- User-confirmed memory filtering with a 3-layer evaluator (quick rules, LLM, similarity dedup)
- Runtime configuration entirely managed via PostgreSQL tables (no config files)
- Multi-tier permissions (owner/family/public) with granular tool access control
- Near-zero API cost when using local Ollama models for embeddings and evaluation

## Why It Matters for RAG Builders
Syne provides a robust, self-hosted framework for building AI agents with persistent memory and minimal operational costs, making it ideal for RAG builders seeking long-term context retention without vendor lock-in.

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

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (qwen3, Anthropic, OpenAI, Together AI)
Automated review identified **LLM (qwen3, Anthropic, OpenAI, Together AI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper STT
Automated review identified **Whisper STT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Edge TTS
Automated review identified **Edge TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
