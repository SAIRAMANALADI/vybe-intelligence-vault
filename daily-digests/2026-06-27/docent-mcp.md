---
title: "cuzfrog/docent-mcp"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "FastEmbed", "BM25", "Semantic Search", "Git", "HTTP"]
quality_score: 8
rag_relevance: 9
tags: ["Design Decision Records", "Git history search", "Hybrid search", "MCP server", "Rust"]
source: "https://github.com/cuzfrog/docent-mcp"
discovered_at: "2026-06-27T04:05:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
docent is an experimental MCP server written in Rust that indexes documents and Git history to enable semantic and BM25 search for Design Decision Records (DDRs). It allows agents to query the rationale behind code changes by leveraging hybrid search over file content and commit metadata.

## Key Features
- Hybrid semantic + BM25 search for documents and Git history
- Section-aware chunking of markdown files to preserve structure
- Streamable HTTP-based MCP server for tool integration
- Persistent vector and metadata caching for efficient re-indexing
- Configurable embedding models via FastEmbed

## Why It Matters for RAG Builders
It enables agents to query the rationale behind code changes by indexing both documents and Git history, making it essential for RAG systems focused on design decisions and historical context.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Search
Automated review identified **Semantic Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
