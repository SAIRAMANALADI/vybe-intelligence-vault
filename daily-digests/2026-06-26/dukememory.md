---
title: "danilkryachko/dukememory"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "MCP (Model Context Protocol)", "Full-Text Search (FTS)", "Embeddings (optional)", "TOML (config)", "HTTP Server (web UI)"]
quality_score: 9
rag_relevance: 8
tags: ["local-first memory", "AI agent context", "SQLite storage", "MCP server", "autonomous maintenance"]
source: "https://github.com/danilkryachko/dukememory"
discovered_at: "2026-06-26T20:34:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dukememory is a local-first memory layer for AI coding agents that stores durable project context like decisions, constraints, and task state in SQLite, enabling agents to retain critical knowledge across sessions without relying on chat history.

## Key Features
- Durable project memory stored in `.agent/memory.db` with structured cards instead of chat dumps
- Agent-native MCP server and Codex skill for seamless integration with coding agents
- Autonomous maintenance with size-bounded backups, drift detection, and quality reviews
- Optional semantic recall via embeddings (e.g., Ollama, BGE-M3) for enhanced search
- Web UI for inspecting, editing, and auditing memory with health metrics and inbox suggestions

## Why It Matters for RAG Builders
It provides a lightweight, local-first solution for AI agents to retain and retrieve critical project context, reducing token waste and improving consistency in long-term agent interactions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-Text Search (FTS)
Automated review identified **Full-Text Search (FTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (optional)
Automated review identified **Embeddings (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server (web UI)
Automated review identified **HTTP Server (web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
