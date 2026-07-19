---
title: sprklai/zenii
category: daily-digests/2026-06-25
tech_stack:
- Rust
- Axum (HTTP/WebSocket server)
- SQLite
- BM25 (for memory search)
- Tauri (desktop app)
- Tokio (async runtime)
- OpenAPI/Swagger (API docs)
- Cargo (build system)
- GitHub Actions (CI/CD)
quality_score: 9
rag_relevance: 8
tags:
- local AI backend
- multi-interface orchestration
- persistent memory
- agent framework
- MCP integration
source: https://github.com/sprklai/zenii
discovered_at: '2026-06-25T00:13:53Z'
evaluated_by: mistral-small-latest
---

## Summary
Zenii is a local AI backend daemon that provides a unified memory, tooling, and agent system for multiple interfaces (CLI, TUI, desktop, MCP clients) via a shared HTTP/WebSocket API. It enables persistent AI state, workflow automation, and multi-provider LLM access from any client.

## Key Features
- Shared memory and tools across CLI, TUI, desktop, and MCP clients via a single HTTP/WebSocket API endpoint
- Persistent semantic memory with BM25 indexing, temporal decay, and vector deduplication for RAG applications
- Polyglot Agent Runtime (PAR) for dynamically installing and running external tools (Python, Node.js) as Zenii tools
- Built-in workflow scheduler and DAG-based automation with cron-like job management
- Multi-provider LLM support (OpenAI, Anthropic, Ollama, etc.) with model routing hints and unified credential management

## Why It Matters for RAG Builders
Zenii provides a centralized, persistent AI backend that eliminates context fragmentation across tools and interfaces, making it essential for building scalable RAG systems with shared memory and tooling.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum (HTTP/WebSocket server)
Automated review identified **Axum (HTTP/WebSocket server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (for memory search)
Automated review identified **BM25 (for memory search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri (desktop app)
Automated review identified **Tauri (desktop app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio (async runtime)
Automated review identified **Tokio (async runtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI/Swagger (API docs)
Automated review identified **OpenAPI/Swagger (API docs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo (build system)
Automated review identified **Cargo (build system)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
