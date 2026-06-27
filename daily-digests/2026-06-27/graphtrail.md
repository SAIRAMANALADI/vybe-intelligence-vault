---
title: "escoffier-labs/graphtrail"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "Tree-sitter", "Model Context Protocol (MCP)", "CLI", "SQL"]
quality_score: 9
rag_relevance: 10
tags: ["code-graph", "call-graph", "MCP server", "AI agent tooling", "SQLite indexing"]
source: "https://github.com/escoffier-labs/graphtrail"
discovered_at: "2026-06-27T21:00:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GraphTrail is a local code-graph sidecar that indexes repositories into a SQLite graph of symbols, imports, and call edges, enabling AI agents to query structural relationships like callers, callees, and impact before editing code. It provides a CLI and a read-only MCP server for real-time graph queries without network calls or daemons.

## Key Features
- Indexes code into a local SQLite graph using tree-sitter parsers for Python, TypeScript/JavaScript, Rust, and Go
- Provides a CLI and read-only MCP server for querying callers, callees, impact, and context
- Supports incremental indexing and multi-repo queries via a single MCP server instance
- Offers context packs for AI agents, including entry points and neighborhood analysis
- Integrates optionally with Code Search and MiseLedger for enhanced relevance and evidence tracking

## Why It Matters for RAG Builders
GraphTrail provides essential structural context for AI agents before code edits, replacing guesswork with precise call-graph insights from a lightweight, local SQLite database.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
