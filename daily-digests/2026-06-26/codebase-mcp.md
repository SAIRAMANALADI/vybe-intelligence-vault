---
title: "ndhkaeru/codebase-mcp"
category: "Orchestrator"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Tree-sitter", "LMDB", "Tantivy", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "code intelligence", "local-first", "Tree-sitter", "RAG optimization"]
source: "https://github.com/ndhkaeru/codebase-mcp"
discovered_at: "2026-06-26T16:15:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
codebase-mcp is a local-first Model Context Protocol (MCP) server written in Rust that enables coding agents to efficiently explore, search, and edit large code repositories without loading entire files or directories into context. It provides 25 precise tools for targeted reads, scoped search, Tree-sitter-based code intelligence, and structured edits, all running entirely on the user's machine.

## Key Features
- 25 precision tools for targeted file reads, scoped search, and structured edits
- Tree-sitter-based code intelligence for 13 languages (symbols, definitions, references, call graphs)
- Persistent indexing with LMDB and optional Tantivy sidecar for large repositories
- Local-only execution with no external services, network calls, or telemetry
- Batch tool calls to reduce MCP round trips and optimize agent context usage

## Why It Matters for RAG Builders
It drastically reduces token usage and improves response quality for RAG/AI agents by enabling precise, context-aware interactions with large codebases without overwhelming the model's context window.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LMDB
Automated review identified **LMDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy
Automated review identified **Tantivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
