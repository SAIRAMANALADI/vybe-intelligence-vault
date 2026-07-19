---
title: strcoder4007/lite-deep-research-agent
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- LangGraph
- LangSmith
- Ollama
- Chroma
- Pydantic
- DuckDuckGo
- trafilatura
- nomic-embed-text
- Python
quality_score: 8
rag_relevance: 9
tags:
- local research agent
- parallel sub-agents
- grounded report generation
- LangGraph orchestration
- Ollama integration
source: https://github.com/strcoder4007/lite-deep-research-agent
discovered_at: '2026-07-07T20:50:36Z'
evaluated_by: mistral-small-latest
---

## Summary
A local deep research agent built on LangGraph that decomposes user queries into sub-tasks, spawns parallel sub-agents for research, iterates based on coverage, and synthesizes grounded reports with sourced citations. All processing runs locally via Ollama.

## Key Features
- Decomposes queries into parallel sub-tasks with dynamic page budgets
- Iterative research rounds with LLM-driven coverage assessment
- Persistent Chroma memory for cross-run context and deduplication
- Structured report synthesis with inline source citations
- Local execution via Ollama with optional LangSmith tracing

## Why It Matters for RAG Builders
It provides a fully local, scalable framework for decomposing complex queries into parallel research tasks, enabling high-quality, sourced report generation without external API dependencies.

## Tech Stack Deep Dive
### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangSmith
Automated review identified **LangSmith** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma
Automated review identified **Chroma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo
Automated review identified **DuckDuckGo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### trafilatura
Automated review identified **trafilatura** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nomic-embed-text
Automated review identified **nomic-embed-text** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
