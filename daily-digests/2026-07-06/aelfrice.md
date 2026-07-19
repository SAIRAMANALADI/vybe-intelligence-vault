---
title: robotrocketscience/aelfrice
category: daily-digests/2026-07-06
tech_stack:
- Python
- SQLite
- MCP (Model Context Protocol)
- Beta-Bernoulli posterior model
- BM25 full-text search
- FTS5 (SQLite)
- NER (Named Entity Recognition)
- Graph-based retrieval (BFS)
- CLI tooling (uv)
- Markov Decision Process (MDP) for retrieval
quality_score: 9
rag_relevance: 8
tags:
- memory system
- rule enforcement
- local-first
- Bayesian feedback
- agent context
source: https://github.com/robotrocketscience/aelfrice
discovered_at: '2026-07-06T23:04:31Z'
evaluated_by: mistral-small-latest
---

## Summary
aelfrice is a local, rule-based memory system for AI agents that ensures persistent adherence to user-defined rules without cloud dependency. It embeds matched beliefs directly into prompts to prevent forgetting, using a SQLite-backed Bayesian memory model with retrieval lanes for efficient rule application.

## Key Features
- Persistent rule embedding in prompts via `<aelfrice-memory>` blocks to prevent AI forgetting
- Bayesian memory model with `(α, β)` posterior tracking for belief confidence and decay
- Multi-lane retrieval system (L0-L3) for efficient, context-aware belief matching
- Local-only SQLite storage with no telemetry or cloud dependency
- Integration with AI coding agents via MCP hooks and slash commands (`/aelf:*`)

## Why It Matters for RAG Builders
aelfrice ensures AI agents consistently follow user-defined rules without manual reminders, eliminating the need for external memory systems or cloud dependencies in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Beta-Bernoulli posterior model
Automated review identified **Beta-Bernoulli posterior model** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 full-text search
Automated review identified **BM25 full-text search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (SQLite)
Automated review identified **FTS5 (SQLite)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NER (Named Entity Recognition)
Automated review identified **NER (Named Entity Recognition)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph-based retrieval (BFS)
Automated review identified **Graph-based retrieval (BFS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tooling (uv)
Automated review identified **CLI tooling (uv)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markov Decision Process (MDP) for retrieval
Automated review identified **Markov Decision Process (MDP) for retrieval** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
