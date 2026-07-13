---
title: "jimovonz/cairn"
category: "Tooling"
tech_stack: ["Python", "SQLite", "sqlite-vec", "all-MiniLM-L6-v2", "ms-marco-MiniLM-L-6-v2", "FastAPI", "Claude Code", "Hooks", "NLI (Natural Language Inference)", "Reciprocal Rank Fusion (RRF)"]
quality_score: 9
rag_relevance: 8
tags: ["Memory capture", "Cross-session retrieval", "Hybrid search", "Claude Code integration", "Veracity tracking"]
source: "https://github.com/jimovonz/cairn"
discovered_at: "2026-07-06T19:48:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cairn is an invisible, per-turn memory capture and retrieval system for Claude Code that distills structured knowledge from every LLM response without additional API calls. It enforces mechanical memory participation, cross-session retrieval, and veracity tracking via a local SQLite database and hybrid search (FTS5 + vector).

## Key Features
- Per-turn granular knowledge distillation with zero extra LLM calls
- Hybrid FTS5 + vector search with Reciprocal Rank Fusion for high-precision retrieval
- Mechanical enforcement of memory participation and context injection via hooks
- Veracity tracking with confidence scoring and contradiction detection
- Project-aware memory scoping and semantic session recovery

## Why It Matters for RAG Builders
Cairn enables RAG systems to capture and retrieve structured knowledge invisibly and per-turn, eliminating the need for separate extraction steps and ensuring consistent context across sessions without additional API calls.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### all-MiniLM-L6-v2
Automated review identified **all-MiniLM-L6-v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ms-marco-MiniLM-L-6-v2
Automated review identified **ms-marco-MiniLM-L-6-v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hooks
Automated review identified **Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NLI (Natural Language Inference)
Automated review identified **NLI (Natural Language Inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
