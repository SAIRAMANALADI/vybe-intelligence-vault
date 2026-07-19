---
title: jmagar/cortex
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Rust
- SQLite
- FTS5
- MCP (Model Context Protocol)
- RMCP Streamable HTTP
- JSON-RPC
- CLI
- Docker
quality_score: 9
rag_relevance: 8
tags:
- syslog
- log analysis
- MCP server
- homelab
- correlation
source: https://github.com/jmagar/cortex
discovered_at: '2026-07-06T21:27:10Z'
evaluated_by: mistral-small-latest
---

## Summary
Cortex is a Rust-based syslog receiver and MCP server designed for homelab log intelligence. It ingests syslog over UDP/TCP, stores logs in SQLite with FTS5 full-text indexing, and exposes advanced log search, correlation, and analysis tools via MCP, REST, and CLI adapters.

## Key Features
- Syslog ingestion over UDP/TCP with batch writing to SQLite + FTS5 full-text indexing
- MCP server exposing 50+ action-based tools for log search, correlation, and analysis
- Graph projection tables for topology and incident investigation (rebuildable, no ingest triggers)
- Homelab inventory management with automated refresh and topology mapping
- Interactive MCP UI widget for log search with progressive enhancement support

## Why It Matters for RAG Builders
Cortex provides a robust, Rust-based syslog ingestion and log intelligence platform with MCP integration, enabling AI systems to efficiently search, correlate, and analyze logs for debugging, incident response, and homelab monitoring.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RMCP Streamable HTTP
Automated review identified **RMCP Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
