---
title: "n24q02m/better-code-review-graph"
category: "Agent Framework"
tech_stack: ["Python", "Tree-sitter", "ONNX Runtime", "SQLite", "MCP (Model Context Protocol)", "Docker", "Tree-sitter grammars", "Litellm", "Semantic Release"]
quality_score: 9
rag_relevance: 9
tags: ["code analysis", "knowledge graph", "semantic search", "call graph", "MCP server"]
source: "https://github.com/n24q02m/better-code-review-graph"
discovered_at: "2026-07-05T13:24:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that builds a structural knowledge graph of codebases using Tree-sitter, enabling semantic search and call-graph resolution for token-efficient code reviews. It supports local ONNX embeddings and cloud-based alternatives for semantic analysis.

## Key Features
- Structural code graph generation with Tree-sitter for precise call-graph resolution
- Dual-mode embeddings: local ONNX (zero-config) or cloud-based via Litellm
- Temporal graph support with versioned nodes/edges for historical analysis
- Seven built-in tools for graph lifecycle, queries, and semantic search
- Security scanning integration via optional Semgrep engine

## Why It Matters for RAG Builders
It enables AI agents to perform token-efficient, context-aware code reviews by resolving semantic and structural relationships in codebases, reducing noise and improving accuracy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter grammars
Automated review identified **Tree-sitter grammars** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Litellm
Automated review identified **Litellm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Release
Automated review identified **Semantic Release** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
