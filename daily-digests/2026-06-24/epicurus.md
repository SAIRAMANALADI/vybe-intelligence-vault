---
title: baakhoff/epicurus
category: daily-digests/2026-06-24
tech_stack:
- Python
- Docker
- PostgreSQL
- Valkey
- NATS
- Qdrant
- OpenBao
- Ollama
- FastAPI
- TypeScript
- React
quality_score: 9
rag_relevance: 8
tags:
- self-hosted
- modular architecture
- local-first
- AI agent
- multi-module integration
source: https://github.com/baakhoff/epicurus
discovered_at: '2026-06-24T13:18:56Z'
evaluated_by: mistral-small-latest
---

## Summary
Epicurus is a self-hosted, modular personal-assistant platform that combines an AI agent with pluggable sidecar modules (e.g., calendar, notes, tasks, mail) for local-first, private AI interactions. It operates entirely on user-owned infrastructure with a core agent and standardized module communication.

## Key Features
- Core agent with tool-calling and streaming chat (SSE) capabilities
- Pluggable sidecar modules (knowledge, storage, web-search, calendar, mail, tasks, notes) with standardized local-only contracts
- Cross-chat memory using Postgres for history and Qdrant for semantic recall
- LLM gateway supporting local (Ollama) and hosted providers with fallback chains and tenant-scoped usage accounting
- Web-based PWA UI shell with declarative module UIs and power state management

## Why It Matters for RAG Builders
Epicurus provides a modular, self-hosted framework for building private AI agents with pluggable capabilities, making it essential for developers prioritizing data privacy and local-first AI interactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Valkey
Automated review identified **Valkey** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NATS
Automated review identified **NATS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenBao
Automated review identified **OpenBao** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
