---
title: "mmnto-ai/totem"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Tree-sitter", "LanceDB", "pnpm", "MCP (Model Context Protocol)", "Git Hooks", "SARIF"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent tooling", "architectural enforcement", "deterministic linting", "knowledge indexing", "context durability"]
source: "https://github.com/mmnto-ai/totem"
discovered_at: "2026-07-06T23:04:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Totem is a file-based toolkit designed to provide durable architectural context and enforceable rules for AI coding agents. It transforms plain-English lessons into deterministic lint rules and maintains a queryable knowledge index to prevent architectural drift and reinvention of shared helpers.

## Key Features
- Converts plain-English lessons into deterministic lint rules for offline enforcement
- Maintains a queryable knowledge index (Tree-sitter + LanceDB) for architectural context
- Supports MCP-compatible agents for querying the knowledge base
- Integrates with Git hooks and CI/CD pipelines (SARIF output for GitHub Code Scanning)
- Provides CLI tools like `totem lint`, `totem lesson compile`, and `totem review` for workflow automation

## Why It Matters for RAG Builders
Totem ensures AI agents adhere to architectural constraints and reuse existing patterns, reducing drift and reinvention while maintaining deterministic, offline enforcement for reliability.

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

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
