---
title: "davidmosiah/delx-memory"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "MCP (Model Context Protocol)", "Node.js", "FTS5 (Full-Text Search)", "JWT", "CLI"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "persistent memory", "SQLite", "cross-agent context", "local-first"]
source: "https://github.com/davidmosiah/delx-memory"
discovered_at: "2026-06-27T11:44:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first persistent memory MCP server that provides a shared SQLite-based key/value store for AI agents, enabling cross-tool context continuity without telemetry or external dependencies.

## Key Features
- Shared SQLite memory store accessible by any MCP-speaking agent (Claude, Cursor, etc.)
- Secret-blocking to prevent accidental storage of credentials or sensitive data
- Full-text search (FTS5) with BM25 ranking, stemming, and diacritic folding
- TTL support for automatic expiration of ephemeral data
- Explicit user intent required for mutations to prevent unauthorized writes

## Why It Matters for RAG Builders
It enables seamless, persistent context sharing across AI agents and tools without external dependencies, ensuring continuity and reducing redundant setup for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
