---
title: Mohdar1277/engram-cli
category: daily-digests/2026-07-11
tech_stack:
- Rust
- SQLite
- Gemini Embedding 2
- Cohere Rerank
- FTS5 (Full-Text Search)
- BM25
- Reciprocal Rank Fusion (RRF)
- PDF extraction
- CLI framework
quality_score: 9
rag_relevance: 9
tags:
- persistent memory
- hybrid retrieval
- AI agent tooling
- offline knowledge store
- benchmarking
source: https://github.com/Mohdar1277/engram-cli
discovered_at: '2026-07-11T11:03:41Z'
evaluated_by: mistral-small-latest
---

## Summary
engram-cli is a Rust-based CLI tool that provides persistent memory for AI agents by enabling hybrid-retrieval knowledge storage with real benchmarks. It allows agents like Claude, Codex, or Gemini to shell out for memory operations without requiring MCP servers, web services, or cloud dependencies.

## Key Features
- Hybrid retrieval combining dense (Gemini Embed 2) and lexical (FTS5/Bm25) search for high accuracy
- Zero runtime dependencies—single Rust binary with no services or servers required
- Built-in benchmarks (LongMemEval, LoCoMo-QA) for evaluating retrieval and end-to-end QA performance
- Supports PDF ingestion with section-aware chunking and entity extraction for research workflows
- Agent skill installation for seamless integration with Claude, Codex, and Gemini

## Why It Matters for RAG Builders
It provides a lightweight, offline-capable memory layer for AI agents that eliminates the need for MCP servers while delivering superior retrieval performance and benchmarked accuracy.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini Embedding 2
Automated review identified **Gemini Embedding 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cohere Rerank
Automated review identified **Cohere Rerank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PDF extraction
Automated review identified **PDF extraction** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI framework
Automated review identified **CLI framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
