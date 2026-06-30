---
title: "jmagar/cortex"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5", "MCP (Model Context Protocol)", "RMCP", "HTTP", "JSON-RPC", "Docker", "syslog"]
quality_score: 9
rag_relevance: 7
tags: ["log ingestion", "syslog", "MCP server", "SQLite FTS5", "homelab monitoring"]
source: "https://github.com/jmagar/cortex"
discovered_at: "2026-06-30T22:15:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cortex is a Rust-based syslog receiver and MCP server designed for homelab log intelligence. It ingests syslog over UDP/TCP, stores logs in SQLite with FTS5 full-text indexing, and exposes a comprehensive set of tools for log search, correlation, inventory, and analysis via MCP, REST, and CLI interfaces.

## Key Features
- Syslog ingestion over UDP/TCP with batch writing to SQLite
- Full-text search and indexing with FTS5 for efficient log retrieval
- MCP server exposing 40+ action-based tools for log analysis, correlation, and inventory
- Graph projection for investigation features (rebuildable, no ingest triggers)
- Homelab inventory refresh and topology mapping with risk findings

## Why It Matters for RAG Builders
Cortex provides a robust, Rust-based syslog ingestion and log intelligence platform with MCP integration, enabling AI systems to efficiently search, correlate, and analyze logs for debugging, monitoring, and incident response.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RMCP
Automated review identified **RMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### syslog
Automated review identified **syslog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
