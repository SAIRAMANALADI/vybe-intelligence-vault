---
title: BriarDevv/Ynara
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Next.js 16
- FastAPI
- Python 3.12
- Postgres 16
- pgvector
- Ollama/GGUF
- Expo SDK 53+
- Pydantic v2
- Celery 5.4
- TypeScript
- Tailwind v4
- shadcn/ui
- Redis
- SQLAlchemy 2 async
- Alembic
- uv
- LlamaIndex
quality_score: 9
rag_relevance: 8
tags:
- on-premises
- multi-layered memory
- dual LLM
- Spanish language
- self-hosted
source: https://github.com/BriarDevv/Ynara
discovered_at: '2026-06-24T06:45:52Z'
evaluated_by: mistral-small-latest
---

## Summary
Ynara is an on-premises, Spanish-language personal assistant with adaptive memory and multi-layered context retention. It integrates dual LLM models (Gemma 4 12B and Qwen 3.5-9B) with semantic, episodic, and procedural memory layers over Postgres + pgvector, designed for self-hosted deployment without reliance on big tech.

## Key Features
- Three-tier memory system (semantic, episodic, procedural) with Postgres + pgvector integration
- Dual LLM stack (Gemma 4 12B conversational, Qwen 3.5-9B agentic) with Ollama/GGUF serving for 16GB GPUs
- Self-hosted deployment with Supabase or Postgres + Redis, avoiding cloud lock-in
- Agentic tool integration (calendar, reminders, memory management) via Qwen model
- Strict data privacy with AES-256-GCM encryption for user memory and audit logging

## Why It Matters for RAG Builders
Ynara provides a critical reference architecture for building privacy-preserving, multi-layered memory systems in agentic AI applications, demonstrating how to integrate dual LLMs with structured memory layers for adaptive personal assistants.

## Tech Stack Deep Dive
### Next.js 16
Automated review identified **Next.js 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Postgres 16
Automated review identified **Postgres 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama/GGUF
Automated review identified **Ollama/GGUF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Expo SDK 53+
Automated review identified **Expo SDK 53+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic v2
Automated review identified **Pydantic v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery 5.4
Automated review identified **Celery 5.4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind v4
Automated review identified **Tailwind v4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### shadcn/ui
Automated review identified **shadcn/ui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy 2 async
Automated review identified **SQLAlchemy 2 async** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alembic
Automated review identified **Alembic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LlamaIndex
Automated review identified **LlamaIndex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
