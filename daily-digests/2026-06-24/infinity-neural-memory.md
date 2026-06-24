---
title: "NachaFromMars/infinity-neural-memory"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FTS5 (Full-Text Search)", "BM25", "Reciprocal Rank Fusion (RRF)", "Okapi BM25", "JSONL", "POSIX file locking", "Pytest", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["memory system", "event sourcing", "hybrid retrieval", "governance gates", "PII redaction"]
source: "https://github.com/NachaFromMars/infinity-neural-memory"
discovered_at: "2026-06-24T02:46:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-contained, event-sourced memory system for long-running AI agents featuring hybrid retrieval, governance gates, and PII redaction. Designed for explainability, testability, and zero external dependencies.

## Key Features
- Append-only event-sourced timeline with provenance tracking and supersession support
- Hybrid BM25 + vector retrieval with RRF fusion and optional reranking
- Two governance gates (AdmissionGate and InjectionGate) for explainable memory lifecycle control
- Built-in PII and secret redaction with deterministic hashing for deduplication
- Pluggable embedders (HashingEmbedder, OpenAI, Ollama) and Vietnamese-aware tokenization

## Why It Matters for RAG Builders
Provides a secure, explainable, and testable memory foundation for AI agents that balances hybrid retrieval with governance, reducing hallucinations and improving context integrity in RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Okapi BM25
Automated review identified **Okapi BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX file locking
Automated review identified **POSIX file locking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
