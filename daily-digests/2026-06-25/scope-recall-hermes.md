---
title: 410979729/scope-recall-hermes
category: daily-digests/2026-06-25
tech_stack:
- Python
- SQLite
- LanceDB
- Hermes
- RRF (Reciprocal Rank Fusion)
- BM25
- FTS (Full-Text Search)
- JSON
- GitHub Actions
quality_score: 9
rag_relevance: 9
tags:
- memory management
- durable recall
- hybrid retrieval
- agent context isolation
- SQLite truth store
source: https://github.com/410979729/scope-recall-hermes
discovered_at: '2026-06-25T14:13:47Z'
evaluated_by: mistral-small-latest
---

## Summary
Scope Recall for Hermes is a local memory provider for Hermes agents that enables durable, cross-session memory recall while isolating local scratch context. It uses a three-layer design with a SQLite truth store, journal/provenance layer, and optional vector companion (LanceDB or SQLite-bruteforce) for hybrid retrieval and semantic ranking.

## Key Features
- Current-turn recall with scoped memory isolation to prevent cross-session contamination
- Hybrid retrieval combining SQLite lexical search, vector embeddings, and RRF reranking
- Durable memory sharing across windows/chats for the same user/agent identity
- Journal-first semantic capture with SQLite as the authoritative truth store
- Optional vector companions (LanceDB or SQLite-bruteforce) with automatic fallback for non-AVX hosts

## Why It Matters for RAG Builders
It enables Hermes agents to maintain durable, cross-session memory recall while isolating temporary context, solving the critical problem of agents forgetting context when switching sessions or windows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes
Automated review identified **Hermes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS (Full-Text Search)
Automated review identified **FTS (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
