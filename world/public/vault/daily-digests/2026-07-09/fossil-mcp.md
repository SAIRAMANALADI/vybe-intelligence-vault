---
title: "sjkim1127/fossil-mcp"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "SQLite", "Tree-sitter", "SCIP (Sourcegraph Code Intelligence Protocol)", "Git", "Embeddings"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "code indexing", "implementation search", "AI assistant tooling", "repository analysis"]
source: "https://github.com/sjkim1127/fossil-mcp"
discovered_at: "2026-07-09T14:45:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
fossil-mcp is an MCP server that clones public repositories, indexes code symbols, and provides precise implementation search capabilities for AI assistants. It reduces the time between natural-language feature questions and the relevant source code by exposing tools to locate functions, methods, and call relationships.

## Key Features
- Clones public repositories with shallow depth and caches them locally
- Indexes code symbols (functions, methods, classes, etc.) using Tree-sitter or SCIP
- Stores symbols, call edges, and embeddings in SQLite for fast retrieval
- Supports semantic and fuzzy search for natural-language queries
- Provides tools to retrieve exact source snippets by file path and line range

## Why It Matters for RAG Builders
It enables AI assistants to quickly locate and analyze implementation details in open-source repositories, reducing manual effort and improving accuracy for RAG-based systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Sourcegraph Code Intelligence Protocol)
Automated review identified **SCIP (Sourcegraph Code Intelligence Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
