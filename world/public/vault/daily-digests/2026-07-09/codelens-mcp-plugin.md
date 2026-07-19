---
title: mupozg823/codelens-mcp-plugin
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- Rust
- MCP (Model Context Protocol)
- tree-sitter
- BM25
- SQLite
- ONNX Runtime
- LSP (Language Server Protocol)
- HTTP Daemon
- FastEmbed
quality_score: 9
rag_relevance: 9
tags:
- code intelligence
- multi-agent
- hybrid retrieval
- mutation gating
- token optimization
source: https://github.com/mupozg823/codelens-mcp-plugin
discovered_at: '2026-07-09T04:47:33Z'
evaluated_by: mistral-small-latest
---

## Summary
A Rust-based MCP server that provides code intelligence for multi-agent coding harnesses by combining hybrid retrieval (BM25, tree-sitter, semantic search), mutation-gated refactoring, and observability. It optimizes token usage and focuses context for efficient code analysis and modifications.

## Key Features
- Cached hybrid retrieval combining sparse (BM25, tree-sitter) and semantic (ONNX) search for efficient code indexing and querying
- Mutation-gated refactoring workflows with role-based access control and audit trails for safe code modifications
- 94 MCP tool definitions with profile/preset-based visibility and workflow aliases for tailored agent interactions
- Observability and monitoring via surface manifests, audit sinks, and tool metrics for production-grade deployments
- HTTP daemon mode and static binary deployment options for flexible integration with MCP clients like Claude Code, Codex, or Cursor

## Why It Matters for RAG Builders
It enables multi-agent coding systems to efficiently navigate large codebases with minimal token overhead while ensuring safe and auditable code modifications.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol)
Automated review identified **LSP (Language Server Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Daemon
Automated review identified **HTTP Daemon** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
