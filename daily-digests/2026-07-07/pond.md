---
title: "tenequm/pond"
category: "Orchestrator"
tech_stack: ["Rust", "LanceDB", "MCP (Model Context Protocol)", "SQL (DataFusion)", "BM25 (Full-text search)", "Vector embeddings (intfloat/multilingual-e5-small)", "Object storage (S3, GCS, Azure, MinIO)", "TOML (Configuration)"]
quality_score: 9
rag_relevance: 10
tags: ["AI session storage", "Cross-client retrieval", "Vector search", "MCP integration", "Lossless archiving"]
source: "https://github.com/tenequm/pond"
discovered_at: "2026-07-07T19:00:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pond is a lossless storage and search layer for AI agent sessions, enabling cross-client retrieval and replay of agent interactions across tools like Claude Code, Codex, and others. It ingests, embeds, and indexes sessions into user-owned storage (local or cloud) for searchable recall via MCP or SQL.

## Key Features
- Lossless ingestion and storage of AI agent sessions across multiple clients (Claude Code, Codex, etc.)
- Cross-client replay and SQL-queryable search over sessions via MCP or HTTP
- Vector and full-text (BM25) search with optional embeddings (e.g., multilingual-e5-small)
- Support for local and cloud storage backends (S3, GCS, Azure, MinIO) with encryption
- Bidirectional adapters enabling schema translation and session restoration in any client

## Why It Matters for RAG Builders
Pond provides the critical storage and retrieval layer for AI agents, enabling lossless session archiving and cross-tool recall, which is essential for RAG systems requiring historical context and traceability.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL (DataFusion)
Automated review identified **SQL (DataFusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Full-text search)
Automated review identified **BM25 (Full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector embeddings (intfloat/multilingual-e5-small)
Automated review identified **Vector embeddings (intfloat/multilingual-e5-small)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Object storage (S3, GCS, Azure, MinIO)
Automated review identified **Object storage (S3, GCS, Azure, MinIO)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (Configuration)
Automated review identified **TOML (Configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
