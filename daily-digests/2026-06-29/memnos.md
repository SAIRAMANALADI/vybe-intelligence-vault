---
title: "thameema/memnos"
category: "Vector DB"
tech_stack: ["Python", "PostgreSQL", "pgvector", "ONNX", "REST API", "MCP", "OpenAPI", "AES-256-GCM", "uv", "Docker (optional)"]
quality_score: 9
rag_relevance: 10
tags: ["memory server", "bi-temporal facts", "team knowledge sharing", "PostgreSQL", "pgvector"]
source: "https://github.com/thameema/memnos"
discovered_at: "2026-06-29T03:00:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memnos is a self-hosted memory server for AI coding agents that captures, distills, and recalls team knowledge across sessions using a single PostgreSQL + pgvector database. It enables shared, governed memory with server-stamped attribution, bi-temporal fact management, and governance features like token auth and audit logs.

## Key Features
- Bi-temporal fact management with supersession for current truth tracking
- Single PostgreSQL + pgvector engine (no secondary vector store or graph DB)
- Governed memory with token auth, namespace ACLs, audit logs, and encrypted secret vault
- No LLM at query time; hybrid search (pgvector + BM25) with ONNX cross-encoder reranking
- Cross-agent memory sharing with server-stamped attribution and offline queue support

## Why It Matters for RAG Builders
It provides a governed, self-hosted memory layer for RAG systems that ensures shared team knowledge is accurate, auditable, and recallable without LLM overhead at query time.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
