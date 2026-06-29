---
title: "mmnto-ai/totem"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Tree-sitter", "LanceDB", "pnpm", "MCP Server", "Git Hooks", "SARIF"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent tooling", "deterministic linting", "architectural context", "file-based substrate", "MCP integration"]
source: "https://github.com/mmnto-ai/totem"
discovered_at: "2026-06-29T03:00:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Totem is a file-based substrate and toolkit designed to provide durable architectural context for AI coding agents. It enforces deterministic, offline linting rules derived from plain-English lessons, ensuring consistency and preventing common mistakes across sessions.

## Key Features
- Offline, sub-second deterministic linting with zero LLM dependency
- Plain-English lessons compiled into enforceable rules (AST/regex)
- Queryable knowledge index (Tree-sitter + LanceDB) for contextual retrieval
- Git hook integration for pre-push enforcement and CI/CD compatibility
- Cross-repo mesh for federated knowledge sharing

## Why It Matters for RAG Builders
Totem ensures AI agents maintain architectural consistency and avoid reinventing solutions by enforcing deterministic, offline rules derived from plain-English lessons, making it essential for RAG builders who need reliable, context-aware AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
