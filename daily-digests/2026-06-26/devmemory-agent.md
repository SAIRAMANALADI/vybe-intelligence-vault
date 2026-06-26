---
title: "alirezanamazian/devmemory-agent"
category: "Agent Framework"
tech_stack: ["Python 3.11", "FastAPI", "PostgreSQL 16 + pgvector", "Qwen Cloud (qwen3.7-max, text-embedding-v4, qwen3-rerank)", "Redis", "Docker", "Alibaba Cloud RDS", "MCP Protocol", "dependency-injector"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "AI coding assistant", "semantic search", "Ebbinghaus decay", "multi-tenant"]
source: "https://github.com/alirezanamazian/devmemory-agent"
discovered_at: "2026-06-26T18:27:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DevMemory Agent is an AI-powered coding assistant that maintains persistent memory across sessions by embedding, semantically searching, and decaying memories based on usage patterns. It integrates with Qwen Cloud for reasoning, embedding, and reranking, and uses PostgreSQL with pgvector for storage.

## Key Features
- Persistent memory across sessions with decay-based forgetting
- Semantic search and reranking for context-aware responses
- Multi-tenant isolation with user/project scoping
- MCP protocol support for IDE integration
- Horizontal scalability with stateless FastAPI and managed Postgres

## Why It Matters for RAG Builders
DevMemory Agent solves the critical problem of context loss in AI coding assistants by providing persistent, decay-aware memory that mimics human-like recall, making it essential for building long-term collaborative AI tools.

## Tech Stack Deep Dive
### Python 3.11
Automated review identified **Python 3.11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL 16 + pgvector
Automated review identified **PostgreSQL 16 + pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen Cloud (qwen3.7-max, text-embedding-v4, qwen3-rerank)
Automated review identified **Qwen Cloud (qwen3.7-max, text-embedding-v4, qwen3-rerank)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alibaba Cloud RDS
Automated review identified **Alibaba Cloud RDS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Protocol
Automated review identified **MCP Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dependency-injector
Automated review identified **dependency-injector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
