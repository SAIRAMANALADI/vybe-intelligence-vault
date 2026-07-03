---
title: "cccadet/myMem0ry"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "spaCy", "sqlite-vec", "BM25/FTS5", "FastAPI", "MCP (Model Context Protocol)", "ONNX Runtime", "Git", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["memory management", "cross-agent handoffs", "semantic search", "persistent context", "offline-first"]
source: "https://github.com/cccadet/myMem0ry"
discovered_at: "2026-07-03T12:12:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
myMem0ry is a persistent memory system for AI coding agents that enables cross-agent handoffs and context retention without external API dependencies. It allows agents like Claude Code, OpenCode, and Codex to resume tasks seamlessly by storing decisions, facts, and conversation history in a structured, searchable format.

## Key Features
- Scoped memory hierarchy (session → context → project → global) with automatic resolution from current working directory
- Hybrid semantic search combining spaCy embeddings, BM25, and sqlite-vec with RRF fusion for high-precision retrieval
- Lifecycle hooks for session start/end, logging, and tool usage with payload sanitization and immutable observations
- Zero LLM token overhead for writes via bulk archiving and hooks, reducing costs and latency
- Cross-machine synchronization via Git auto-sync and pluggable vector encoders (spaCy or Nomic)

## Why It Matters for RAG Builders
It provides a critical layer for maintaining long-term context and handoffs between AI agents, reducing redundant interactions and improving task continuity in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spaCy
Automated review identified **spaCy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25/FTS5
Automated review identified **BM25/FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
