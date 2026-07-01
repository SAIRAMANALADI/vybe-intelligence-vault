---
title: "oxHive/hivemind"
category: "Tooling"
tech_stack: ["Rust", "libsql", "SQLite", "MCP (Model Context Protocol)", "TOML", "HTTP Server", "Systemd/launchd (for services)"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "MCP server", "AI coding agents", "context injection", "session management"]
source: "https://github.com/oxHive/hivemind"
discovered_at: "2026-07-01T09:40:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HiveMind is a local MCP server that provides persistent memory storage for AI coding agents like Claude Code, enabling context, preferences, and project knowledge to persist across sessions via a libsql-backed SQLite database.

## Key Features
- Persistent memory storage for AI agents using libsql-backed SQLite
- Automatic context injection at session start with token budget control
- On-demand memory recall and search via MCP tools
- Multi-client support (Claude Code, Cursor, Windsurf, OpenCode, Kimi, Codex)
- Optional HTTP server with dashboard and REST API for broader integrations

## Why It Matters for RAG Builders
HiveMind enables AI coding agents to retain project-specific context and preferences across sessions without manual re-injection, reducing token overhead and improving agent consistency.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libsql
Automated review identified **libsql** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd/launchd (for services)
Automated review identified **Systemd/launchd (for services)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
