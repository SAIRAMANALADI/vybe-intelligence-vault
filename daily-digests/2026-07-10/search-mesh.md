---
title: "jamestkelly/search-mesh"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "JSON-RPC", "Tree-sitter", "Cargo", "CI/CD (GitHub Actions)"]
quality_score: 8
rag_relevance: 9
tags: ["code intelligence", "MCP server", "AST parsing", "autonomous agents", "Rust"]
source: "https://github.com/jamestkelly/search-mesh"
discovered_at: "2026-07-10T06:32:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Search-Mesh is a Rust-based MCP-compatible service that enhances autonomous coding agents by providing local, syntax-aware repository search, context extraction, and precise patching capabilities. It reduces agent latency and token waste by offloading repository intelligence tasks to a native process.

## Key Features
- Multi-keyword scanning with single-pass efficiency
- Syntax-aware filtering using Tree-sitter for Rust, Python, JavaScript, and TypeScript
- Context extraction via AST-bounded source blocks
- Precise patching with syntax validation post-edit
- MCP-compatible JSON-RPC over stdio for seamless agent integration

## Why It Matters for RAG Builders
Search-Mesh significantly reduces agent overhead by providing local, high-performance repository intelligence, making it essential for RAG/AI stack builders focused on autonomous coding agents.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
