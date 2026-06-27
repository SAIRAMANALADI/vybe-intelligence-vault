---
title: "optave/ops-codegraph-tool"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js (>=22.6)", "SQLite", "Tree-sitter (Rust/WASM)", "MCP (Model Context Protocol)", "Git", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 10
tags: ["dependency graph", "AI agent tooling", "code intelligence", "MCP server", "structural analysis"]
source: "https://github.com/optave/ops-codegraph-tool"
discovered_at: "2026-06-27T22:04:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codegraph builds a function-level dependency graph for entire codebases across 34 languages, enabling AI agents and developers to query structural context like callers, dependencies, and blast radius with sub-second incremental updates. It exposes this graph via a 34-tool MCP server, CLI, CI gates, and programmatic API for real-time code intelligence.

## Key Features
- Function-level dependency graph across 34 languages with sub-second incremental rebuilds
- 34-tool MCP server for AI agents to query code structure directly (e.g., callers, dependencies, blast radius)
- Hybrid search (BM25 + semantic embeddings) and role classification (entry/core/utility/dead) for symbols
- CI gates (`check`, `manifesto`) and Git diff impact analysis with co-change history for quality enforcement
- Zero-config, fully local deployment with no API keys or telemetry

## Why It Matters for RAG Builders
It provides AI agents and developers with real-time, structured code context to prevent structural errors before they occur, reducing review cycles and improving codebase integrity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=22.6)
Automated review identified **Node.js (>=22.6)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (Rust/WASM)
Automated review identified **Tree-sitter (Rust/WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
