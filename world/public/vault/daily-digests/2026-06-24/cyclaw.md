---
title: CGFixIT/CyClaw
category: daily-digests/2026-06-24
tech_stack:
- Python 3.12
- FastAPI
- LangGraph
- ChromaDB
- Sentence Transformers
- LM Studio
- Docker
- Rclone
- GitHub CLI
- MCP (Model Context Protocol)
quality_score: 9
rag_relevance: 10
tags:
- offline-first
- RAG
- LangGraph
- security invariants
- local AI
source: https://github.com/CGFixIT/CyClaw
discovered_at: '2026-06-24T02:49:40Z'
evaluated_by: mistral-small-latest
---

## Summary
CyClaw is an offline-first, secure local AI 'Second Brain' that enforces RAG-first retrieval and LangGraph-based security invariants. It operates entirely locally with optional hybrid fallback to Grok (xAI) and supports FastAPI, MCP, and agentic workflows for enhanced productivity.

## Key Features
- Enforces RAG-first retrieval with LangGraph topology as security policy
- Offline operation with local embeddings (sentence-transformers) and cached Qwen7B-Instruct
- Triple-gated hybrid fallback to Grok (xAI) with explicit user confirmation
- Persistent personality layer with SHA-256 drift detection and atomic evolution writes
- Supports FastAPI HTTP gateway, MCP server, and agentic workflows for local operator tasks

## Why It Matters for RAG Builders
CyClaw provides a robust, secure, and offline-capable RAG framework with enforced security invariants, making it essential for building trustworthy local AI systems.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rclone
Automated review identified **Rclone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub CLI
Automated review identified **GitHub CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
