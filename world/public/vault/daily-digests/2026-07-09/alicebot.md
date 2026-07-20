---
title: samrusani/AliceBot
category: daily-digests/2026-07-09
tech_stack:
- Python 3.12+
- PostgreSQL
- SQLite
- MCP (Model Context Protocol)
- HTTP API
- CLI
- pgvector
- Full-text search (FTS)
- Node.js 20+
- pnpm
- Docker
quality_score: 9
rag_relevance: 9
tags:
- memory continuity
- agent governance
- provenance tracking
- local-first
- MCP-native
source: https://github.com/samrusani/AliceBot
discovered_at: '2026-07-09T21:19:01Z'
evaluated_by: mistral-small-latest
---

## Summary
Alice is a local-first memory service designed to provide continuity for AI agents by enabling resumption of interrupted work, tracking open loops, and maintaining provenance for decisions and corrections. It achieves 79.4% on the LongMemEval benchmark and supports governance through reviewable memory commits.

## Key Features
- Stores typed continuity objects (decisions, open loops, resumption briefs) with provenance links to source evidence
- Supports review-governed memory commits with policy checks (committed, confirm, review, or reject)
- Hybrid retrieval combining full-text search, vector embeddings, and entity graph for accurate recall
- Achieves 79.4% on LongMemEval benchmark with transparent methodology and reproducible results
- Offers both SQLite (single-user) and Postgres (scalable) deployment options with a web review console

## Why It Matters for RAG Builders
Alice provides the critical continuity layer for AI agents to resume work, honor past decisions, and maintain explainable provenance, addressing a key gap in RAG systems where context is often lost between sessions.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-text search (FTS)
Automated review identified **Full-text search (FTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 20+
Automated review identified **Node.js 20+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
