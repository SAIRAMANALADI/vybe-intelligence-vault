---
title: "MrDawell/atrium"
category: "Tooling"
tech_stack: ["Rust", "Tree-sitter", "SQLite", "gRPC", "Python", "Protobuf", "MCP (Model Context Protocol)", "Axum", "Cargo"]
quality_score: 9
rag_relevance: 8
tags: ["context stabilization", "token efficiency", "AST parsing", "AI coding agents", "codebase noise reduction"]
source: "https://github.com/MrDawell/atrium"
discovered_at: "2026-06-26T16:12:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Atrium is a zero-token-waste daemon that stabilizes AI coding agent context by deflecting codebase noise and verifying output in real-time. It uses AST parsing and SQLite-based memory to reduce token consumption by 98% while maintaining structural accuracy.

## Key Features
- 98% reduction in token waste by serving AST blueprints instead of raw code
- Dynamic Tree-sitter grammar loading for 100+ languages with runtime safety
- Localized SQLite memory database for durable symbol tracking and fact storage
- Automated MCP server integration with popular AI coding agents (Cursor, Claude Code, Cline, Roo Code)
- Fallback engine for resilient parsing even with missing grammars or syntax errors

## Why It Matters for RAG Builders
Atrium drastically reduces AI API costs by eliminating codebase noise, enabling efficient and cost-effective RAG pipelines for large codebases.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
