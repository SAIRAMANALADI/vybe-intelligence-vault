---
title: "Mohdar1277/engram-cli"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5 (Full-Text Search)", "Gemini Embed 2", "Cohere Rerank", "Cargo", "CLI Framework"]
quality_score: 9
rag_relevance: 9
tags: ["persistent memory", "hybrid retrieval", "RAG", "offline knowledge base", "AI agent tools"]
source: "https://github.com/Mohdar1277/engram-cli"
discovered_at: "2026-06-30T21:01:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
engram-cli is a Rust-based CLI tool that provides persistent memory for AI agents by enabling hybrid-retrieval knowledge storage with real benchmarks. It allows agents like Claude, Codex, or Gemini to shell out commands for remembering, recalling, and ingesting information without requiring MCP servers, web services, or cloud dependencies for the store itself.

## Key Features
- Hybrid retrieval combining dense (Gemini Embed 2) and lexical (FTS5) search for high accuracy
- Deterministic architecture with SQLite as the source of truth and reproducible benchmarks
- Lightweight CLI with no runtime dependencies, ideal for local agent memory
- Supports ingesting research papers, conversations, and structured data with section-aware chunking
- End-to-end benchmarking with RAGAS metrics for evaluating retrieval and answer correctness

## Why It Matters for RAG Builders
It provides a lightweight, offline-capable solution for persistent memory in AI agents, eliminating the need for MCP servers or cloud dependencies while delivering superior retrieval performance for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini Embed 2
Automated review identified **Gemini Embed 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cohere Rerank
Automated review identified **Cohere Rerank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Framework
Automated review identified **CLI Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
