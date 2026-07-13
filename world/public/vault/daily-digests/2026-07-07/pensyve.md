---
title: "major7apps/pensyve"
category: "Tooling"
tech_stack: ["Rust", "Python", "TypeScript", "Go", "SQLite", "PostgreSQL", "pgvector", "ONNX", "MCP (Model Context Protocol)", "Axum (Rust web framework)", "PyO3 (Python bindings)", "FSRS (forgetting curve algorithm)"]
quality_score: 9
rag_relevance: 10
tags: ["memory management", "AI agents", "context retention", "offline-first", "multi-language SDK"]
source: "https://github.com/major7apps/pensyve"
discovered_at: "2026-07-07T16:26:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pensyve is a universal memory runtime for AI agents, providing framework-agnostic, protocol-native, and offline-first memory management. It enables agents to retain context, preferences, and procedural knowledge across sessions without requiring cloud dependencies or API keys.

## Key Features
- Three memory types: episodic, semantic, and procedural for comprehensive context retention
- 8-signal fusion retrieval combining vector similarity, BM25, graph, intent, recency, frequency, confidence, and type boost for precise memory recall
- FSRS forgetting curve for natural decay of unused memories and consolidation of repeated facts
- Framework-agnostic with SDKs for Python, TypeScript, Go, and MCP, plus REST API and Claude/Codex plugins
- Offline-first SQLite backend with optional Postgres/pgvector for scalable deployments

## Why It Matters for RAG Builders
Pensyve eliminates the critical gap in AI agents' memory retention, enabling persistent context and learned behaviors across sessions without relying on external services or complex infrastructure.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum (Rust web framework)
Automated review identified **Axum (Rust web framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyO3 (Python bindings)
Automated review identified **PyO3 (Python bindings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FSRS (forgetting curve algorithm)
Automated review identified **FSRS (forgetting curve algorithm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
