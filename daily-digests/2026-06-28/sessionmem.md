---
title: "catfish-1234/sessionmem"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "Embeddings", "CLI", "Vector Search"]
quality_score: 9
rag_relevance: 8
tags: ["local-first", "AI memory", "MCP", "cross-session context", "privacy-focused"]
source: "https://github.com/catfish-1234/sessionmem"
discovered_at: "2026-06-28T20:13:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sessionmem provides a local-first memory layer for AI coding assistants, enabling persistent cross-session context storage entirely on the user's machine. It automatically captures, summarizes, and injects relevant project context into future sessions without requiring cloud services or accounts.

## Key Features
- Automatic session summarization and memory storage in a local SQLite database
- Privacy-first design with built-in secret redaction (API keys, tokens, passwords)
- Token-budgeted memory injection (~85.6% reduction in context tokens vs. full history)
- Cross-tool compatibility with MCP-compatible AI assistants (Claude Code, Cursor, etc.)
- Built-in retention policies to prevent memory rot and stale data accumulation

## Why It Matters for RAG Builders
It enables AI coding assistants to retain critical project context across sessions without relying on cloud services, reducing repetitive explanations and improving productivity while maintaining strict privacy controls.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
