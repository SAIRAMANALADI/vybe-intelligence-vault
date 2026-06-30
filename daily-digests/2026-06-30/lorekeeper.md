---
title: "Jessinra/Lorekeeper"
category: "Tooling"
tech_stack: ["Python", "SQLite", "LanceDB", "PyTorch", "sentence-transformers", "FastAPI", "MCP (Model Context Protocol)", "BM25", "Vector embeddings", "React (Dashboard UI)"]
quality_score: 9
rag_relevance: 10
tags: ["memory persistence", "self-improving AI", "local-first", "MCP server", "agent context"]
source: "https://github.com/Jessinra/Lorekeeper"
discovered_at: "2026-06-30T16:27:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Lorekeeper is a self-improving memory system for AI agents that enables persistent, context-aware interactions across sessions without cloud dependencies. It acts as a local MCP server, storing and refining agent memories in SQLite while automatically improving search relevance and memory quality over time.

## Key Features
- Hybrid search combining semantic vectors, BM25, time-decay, and usage frequency for highly relevant memory retrieval
- Automatic memory improvement through feedback loops that adjust scores, decay weak memories, and surface strong ones
- Lightweight knowledge graph formed via auto-linking of related memories without manual effort
- Universal MCP compatibility with major AI coding agents (Claude Code, Cursor, Hermes, etc.)
- Full-featured dashboard for browsing, editing, and managing memories with backup/restore capabilities

## Why It Matters for RAG Builders
Lorekeeper eliminates the need for re-explaining context between AI agent sessions by providing persistent, self-improving memory storage that enhances RAG systems with long-term learning and relevance optimization.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector embeddings
Automated review identified **Vector embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Dashboard UI)
Automated review identified **React (Dashboard UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
