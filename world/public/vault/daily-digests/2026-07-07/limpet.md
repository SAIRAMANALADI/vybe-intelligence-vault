---
title: KSym04/limpet
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Rust
- SQLite
- Tree-sitter
- MCP (Model Context Protocol)
- AST (Abstract Syntax Tree) parsing
- SQL
quality_score: 9
rag_relevance: 9
tags:
- persistent memory
- AI agent memory
- AST anchoring
- stale detection
- MCP server
source: https://github.com/KSym04/limpet
discovered_at: '2026-07-07T19:00:42Z'
evaluated_by: mistral-small-latest
---

## Summary
Limpet is a persistent memory layer for AI coding agents that anchors knowledge to code via AST hashes, automatically detecting and flagging stale memories when code changes. It operates as an MCP server, providing durable, verifiable, and self-invalidating memory for agents working with codebases.

## Key Features
- Anchors memories to code via normalized AST hashes, ensuring they follow renames, moves, and edits automatically
- Automatically flags memories as stale when their anchored code changes, with reasons attached
- Provides an honesty envelope for every response, including freshness, completeness, and staleness metrics
- Supports verified facts with attached evidence commands for re-validation
- Offers a token-ledger system to measure and report token savings from memory recall

## Why It Matters for RAG Builders
Limpet solves the critical problem of AI agents remembering outdated or incorrect information by ensuring memories are always synchronized with the current state of the codebase, drastically reducing token waste and preventing confidently wrong outputs.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree) parsing
Automated review identified **AST (Abstract Syntax Tree) parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
