---
title: "nram-ai/nram"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "PostgreSQL", "pgvector", "Qdrant", "React", "TypeScript", "Tailwind CSS", "OAuth 2.0", "JWT", "WebAuthn", "MCP (Model Context Protocol)", "HNSW (Hierarchical Navigable Small World)", "LLM (Large Language Models)", "OpenAPI", "Prometheus"]
quality_score: 9
rag_relevance: 10
tags: ["memory", "knowledge-graph", "self-hosted", "MCP", "continuity-layer"]
source: "https://github.com/nram-ai/nram"
discovered_at: "2026-06-28T16:14:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Neural Ram (nram) is a self-hosted, open-source server that acts as a continuity layer for AI workflows, enabling persistent memory, knowledge graph construction, and hybrid search across tools and sessions. It provides a unified substrate for conversational continuity, document recall, procedural rules, and agent memory with built-in consolidation and deduplication.

## Key Features
- Hybrid vector + lexical search with Reciprocal Rank Fusion and MMR deduplication
- Automated knowledge graph construction with entity extraction and relationship inference
- Offline consolidation cycle ('dreaming') for deduplication, pruning, and synthesis
- Multi-tier memory system (procedural, persona, global) with verbatim storage
- MCP-compatible server with OAuth, RBAC, and real-time SSE for client integration

## Why It Matters for RAG Builders
It provides a foundational continuity layer for RAG systems, enabling persistent, cross-tool memory and knowledge graph integration that enhances context retention and retrieval accuracy.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAuthn
Automated review identified **WebAuthn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Models)
Automated review identified **LLM (Large Language Models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
