---
title: "RMANOV/sqlite-memory-mcp"
category: "Tooling"
tech_stack: ["Python", "SQLite", "WAL (Write-Ahead Logging)", "FTS5 (Full-Text Search)", "BM25", "sqlite-vec", "FastMCP", "PyQt6", "Git", "JSONL"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "memory governance", "SQLite", "hybrid retrieval", "cross-agent collaboration"]
source: "https://github.com/RMANOV/sqlite-memory-mcp"
discovered_at: "2026-06-30T07:54:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP memory server for coding agents that provides governed cross-agent memory with provenance tracking and approval-aware promotion workflows. It enables hybrid retrieval (BM25 + semantic search), session tracking, task management, and cross-machine synchronization using a single SQLite file.

## Key Features
- Hybrid retrieval combining BM25 keyword search with optional semantic search via sqlite-vec and Reciprocal Rank Fusion
- Provenance tracking and approval-aware promotion of memory mutations to canonical facts
- Cross-agent and cross-machine synchronization via bridge tools and private git repos
- WAL mode support for 10+ concurrent sessions with zero file locking conflicts
- Task management, session tracking, and structured memory governance with human review gates

## Why It Matters for RAG Builders
It provides a robust, local-first memory governance system for AI agents that ensures reliable, reviewable, and scalable memory management without external dependencies or cloud costs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WAL (Write-Ahead Logging)
Automated review identified **WAL (Write-Ahead Logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyQt6
Automated review identified **PyQt6** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
