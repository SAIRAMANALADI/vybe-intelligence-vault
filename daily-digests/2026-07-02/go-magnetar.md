---
title: "wmentor/go-magnetar"
category: "Agent Framework"
tech_stack: ["Go", "Qdrant", "OpenAI-compatible LLM APIs", "Embedding models", "Markdown/HTML preprocessing", "YAML configuration", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["RAG", "document indexing", "interactive chat", "Qdrant integration", "multi-source retrieval"]
source: "https://github.com/wmentor/go-magnetar"
discovered_at: "2026-07-02T17:42:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A RAG-based knowledge base tool combining an interactive chat agent with an integrated document ingestion system. It indexes documents into Qdrant, supports multi-turn conversations, and enforces strict retrieval policies with fallback web search.

## Key Features
- Unified REPL for chat and indexing with `/index` command
- Idempotent document indexing with deterministic UUIDs for chunks
- Automatic context management with history summarization
- Strict retrieval-first policy with fallback web search
- Support for Confluence, Jira, GitLab, and GitHub integrations

## Why It Matters for RAG Builders
It provides a streamlined, production-ready framework for building RAG-based knowledge bases with built-in document ingestion, retrieval policies, and multi-source integration.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible LLM APIs
Automated review identified **OpenAI-compatible LLM APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models
Automated review identified **Embedding models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown/HTML preprocessing
Automated review identified **Markdown/HTML preprocessing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML configuration
Automated review identified **YAML configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
