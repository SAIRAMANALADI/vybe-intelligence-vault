---
title: "Abhigyan-Shekhar/Waggle-mcp"
category: "Orchestrator"
tech_stack: ["Python 3.11+", "MCP (Model Context Protocol)", "SQLite (default graph storage)", "Neo4j (optional backend)", "Sentence Transformers (local embeddings)", "Ruff", "Mypy", "Pytest", "GitHub Actions", "Vite/React (Graph Studio UI)", "Pyproject.toml"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP server", "knowledge graph", "RAG enhancement", "AI agent memory"]
source: "https://github.com/Abhigyan-Shekhar/Waggle-mcp"
discovered_at: "2026-06-26T13:14:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Waggle-mcp is a local-first memory engine for AI agents that persists decisions, reasoning, and contradictions across sessions using a graph-backed storage system. It integrates with MCP-compatible clients to provide persistent, structured memory without relying on external APIs.

## Key Features
- Graph-backed memory storage with SQLite (Neo4j optional) for structured persistence of decisions, reasons, and contradictions
- MCP server integration enabling seamless adoption by AI clients like Claude, Cursor, and VS Code
- Recursive context assembly for compact, high-signal context retrieval under token budgets
- Local-first embeddings with deterministic fallback, eliminating dependency on external APIs
- Graph Studio UI for visualization, debugging, and memory management

## Why It Matters for RAG Builders
Waggle-mcp provides persistent, structured memory for AI agents, enabling them to retain context and reasoning across sessions without bloating context windows, which is critical for building robust RAG systems.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (default graph storage)
Automated review identified **SQLite (default graph storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j (optional backend)
Automated review identified **Neo4j (optional backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers (local embeddings)
Automated review identified **Sentence Transformers (local embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite/React (Graph Studio UI)
Automated review identified **Vite/React (Graph Studio UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pyproject.toml
Automated review identified **Pyproject.toml** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
