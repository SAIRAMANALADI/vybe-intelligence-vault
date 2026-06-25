---
title: "luuuc/sense"
category: "Orchestrator"
tech_stack: ["Go", "Tree-sitter", "ONNX Runtime", "SQLite", "MCP (Model Context Protocol)", "Rust (for some extractors)", "Python (for some extractors)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "codebase indexing", "structural understanding", "AI coding agents", "semantic search"]
source: "https://github.com/luuuc/sense"
discovered_at: "2026-06-25T11:42:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sense is an MCP server that provides AI coding agents with structural understanding of codebases, including symbol graphs, semantic search, blast radius analysis, and convention detection. It indexes repositories locally to reduce tool calls, token usage, and hallucinations during AI-assisted development tasks.

## Key Features
- Local symbol graph generation with callers, callees, inheritance, and tests
- Hybrid semantic code search (bi-encoder + cross-encoder) with keyword fallback
- Blast radius analysis for impact assessment and risk scoring
- Convention detection for framework idioms and team-specific patterns
- Incremental indexing with background filesystem watching for real-time updates

## Why It Matters for RAG Builders
Sense eliminates the need for AI agents to re-derive codebase structure on every task, drastically reducing tool calls, token usage, and hallucinations while improving correctness and efficiency in RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for some extractors)
Automated review identified **Rust (for some extractors)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for some extractors)
Automated review identified **Python (for some extractors)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
