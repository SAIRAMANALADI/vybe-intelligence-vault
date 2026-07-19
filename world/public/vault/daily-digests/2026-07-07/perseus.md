---
title: Perseus-Computing-LLC/perseus
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- Model Context Protocol (MCP)
- SQLite
- FTS5 (Full-Text Search)
- Rust (for Perseus Vault)
- Docker
- Git
- Elasticsearch (via Rapid Agent)
- Claude Desktop
- Cursor
- Codex
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- live context engine
- persistent memory
- AI agent orchestration
- workspace state resolution
source: https://github.com/Perseus-Computing-LLC/perseus
discovered_at: '2026-07-07T19:00:33Z'
evaluated_by: mistral-small-latest
---

## Summary
Perseus is a live context engine and MCP server that resolves live workspace state into ready context for AI agents, eliminating cold-start orientation. It provides 31+ MCP tools for dynamic context management, persistent memory, and security-aware tool execution.

## Key Features
- 31+ MCP tools resolving live workspace state at invocation time (no stale cache)
- Perseus Vault: persistent memory with FTS5, entities, layers, and confidence decay
- Security-aware tool execution with opt-in shell commands and agent subprocesses
- Global workspace tier (@focus) for salience-ranked, capacity-bounded working sets
- Zero-config semantic recall with bundled offline embeddings (Rust-based Perseus Vault)

## Why It Matters for RAG Builders
Perseus eliminates cold-start orientation for AI agents by dynamically resolving live workspace state into context, enabling persistent memory and real-time tool execution for RAG and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for Perseus Vault)
Automated review identified **Rust (for Perseus Vault)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elasticsearch (via Rapid Agent)
Automated review identified **Elasticsearch (via Rapid Agent)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Desktop
Automated review identified **Claude Desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
