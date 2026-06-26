---
title: "danilkryachko/dukememory"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "Full-Text Search (FTS)", "MCP (Model Context Protocol)", "Embeddings (optional)", "TOML (config)", "HTTP/Web UI"]
quality_score: 9
rag_relevance: 8
tags: ["project memory", "AI coding agents", "local-first", "MCP server", "autonomous maintenance"]
source: "https://github.com/danilkryachko/dukememory"
discovered_at: "2026-06-26T22:11:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dukememory is a local-first memory layer for AI coding agents like Codex and Cursor, designed to persistently store and retrieve project context such as decisions, constraints, and task states to reduce token waste and improve agent efficiency.

## Key Features
- Durable project memory stored in SQLite with optional semantic search via embeddings
- Compact task briefs and impact analysis for AI agents before code edits
- Web UI for inspecting, editing, and auditing memory with autonomous health checks
- MCP server and Codex skill integration for native agent use
- Autonomous maintenance with rollback-friendly backups and size-bounded storage

## Why It Matters for RAG Builders
It provides a lightweight, persistent memory layer that reduces token waste and ensures AI agents retain critical project context across sessions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-Text Search (FTS)
Automated review identified **Full-Text Search (FTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (optional)
Automated review identified **Embeddings (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Web UI
Automated review identified **HTTP/Web UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
