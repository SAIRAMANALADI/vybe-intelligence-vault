---
title: bulletinmybeard/agent-forge
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Python
- Docker Compose
- Qdrant
- Redis
- FastAPI
- Ollama
- AWS Bedrock
- OpenAI-compatible APIs
- Ruff
- Pytest
- WebSocket
- SAQ (Simple Async Queue)
quality_score: 9
rag_relevance: 10
tags:
- AI agents
- RAG
- self-hosted
- tool-calling
- multi-step pipelines
source: https://github.com/bulletinmybeard/agent-forge
discovered_at: '2026-06-24T13:18:31Z'
evaluated_by: mistral-small-latest
---

## Summary
AgentForge is a self-hosted AI agent and RAG platform that indexes code, docs, and data into a vector store, enables tool-calling agents (filesystem, shell, Docker, Git, SSH, web), and drives multi-step pipelines across pluggable LLM backends. It operates as a Docker Compose stack with modular components for chat, RAG, indexing, and tool execution.

## Key Features
- Pluggable LLM backends (Ollama, AWS Bedrock, OpenAI-compatible APIs) with per-task provider selection
- Comprehensive tool ecosystem (filesystem, shell, Docker, Git, SSH, web, connectors like Gmail/Drive/GitHub)
- Vector store integration with Qdrant for RAG, including smart re-indexing and semantic search
- Multi-step pipeline execution with parallel fan-out and discovery
- Modular architecture with Docker Compose, supporting light and full deployment presets

## Why It Matters for RAG Builders
AgentForge provides a robust, self-hosted foundation for building and deploying AI agents with RAG capabilities, tool integration, and multi-step workflows, making it essential for developers and teams seeking full control over their AI stack.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Bedrock
Automated review identified **AWS Bedrock** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SAQ (Simple Async Queue)
Automated review identified **SAQ (Simple Async Queue)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
