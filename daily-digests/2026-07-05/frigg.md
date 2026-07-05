---
title: "bnomei/frigg"
category: "Tooling"
tech_stack: ["Rust", "Tree-sitter", "SQLite", "MCP (Model Context Protocol)", "SCIP (Source Code Index Protocol)", "Semantic Embeddings (OpenAI, Google)", "HTTP/Stdio Transport"]
quality_score: 9
rag_relevance: 10
tags: ["code search", "MCP service", "repository indexing", "AI agent context", "local-first"]
source: "https://github.com/bnomei/frigg"
discovered_at: "2026-07-05T09:44:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Frigg provides local, source-backed code search and navigation for AI agents via an MCP service, enabling efficient repository indexing, lexical/hybrid search, structural queries, and bounded code reads without sending entire repositories to prompts.

## Key Features
- Local MCP service for AI agents to query indexed repositories without cloud dependency
- Hybrid search combining lexical, vector, and structural signals for precise code navigation
- Tree-sitter-backed symbol and structural analysis for multiple languages (Rust, Python, JavaScript, etc.)
- Bounded code reads with `read_file` and `read_match` to limit context to relevant snippets
- Optional semantic indexing and SCIP artifact ingestion for higher-precision navigation

## Why It Matters for RAG Builders
Frigg enables AI agents to perform efficient, source-backed code searches and navigation locally, reducing prompt bloat and improving retrieval accuracy for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Source Code Index Protocol)
Automated review identified **SCIP (Source Code Index Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Embeddings (OpenAI, Google)
Automated review identified **Semantic Embeddings (OpenAI, Google)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Stdio Transport
Automated review identified **HTTP/Stdio Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
