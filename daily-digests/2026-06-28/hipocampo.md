---
title: "carrasquelalex1/hipocampo"
category: "Orchestrator"
tech_stack: ["Python", "PostgreSQL", "pgvector", "pg_trgm", "FastMCP", "NVIDIA Embeddings", "Hugging Face Inference API", "Docker"]
quality_score: 9
rag_relevance: 9
tags: ["memory persistence", "hybrid search", "AI agent learning", "MCP server", "dual-memory architecture"]
source: "https://github.com/carrasquelalex1/hipocampo"
discovered_at: "2026-06-28T16:07:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hipocampo is an advanced dual-memory persistence system for AI agents, featuring a PostgreSQL-based architecture with pgvector for hybrid semantic and lexical search. It enables agents to learn from past interactions, store technical knowledge, and maintain user profiles across sessions.

## Key Features
- Dual-memory architecture with separate storage for technical knowledge and user profiles
- BIRE v3.7 hybrid search engine combining semantic embeddings, lexical expansion, and dynamic score fusion
- Sparse Selective Caching (SSC) experimental pipeline for progressive retrieval
- Logarithmic checkpointing for intelligent memory compression over time
- Native Model Context Protocol (MCP) server integration for seamless agent interaction

## Why It Matters for RAG Builders
Hipocampo enables AI agents to retain and build upon knowledge across sessions, reducing repetitive errors and improving decision-making through persistent memory and hybrid search capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pg_trgm
Automated review identified **pg_trgm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVIDIA Embeddings
Automated review identified **NVIDIA Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Inference API
Automated review identified **Hugging Face Inference API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
