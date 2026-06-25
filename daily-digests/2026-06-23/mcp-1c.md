---
title: "feenlace/mcp-1c"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "1C:Enterprise", "HTTP/REST", "SQLite", "BM25 (for search indexing)"]
quality_score: 9
rag_relevance: 8
tags: ["1C:Enterprise", "BSL code generation", "AI integration", "local data processing", "MCP server"]
source: "https://github.com/feenlace/mcp-1c"
discovered_at: "2026-06-23T09:02:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP-1C is a Go-based MCP server that integrates AI assistants with 1C:Enterprise platforms, enabling AI to analyze 1C configurations and generate accurate BSL code. It operates locally, ensuring data privacy while supporting both local and cloud-based AI models.

## Key Features
- Real-time 1C configuration metadata access for AI assistants
- Full-text search with BM25 ranking and BSL synonym support
- Nine built-in tools for 1C code analysis and generation (e.g., query execution, syntax help, event log access)
- Supports local and cloud AI models without vendor lock-in
- Automated installation and configuration of 1C extensions

## Why It Matters for RAG Builders
MCP-1C bridges the gap between AI assistants and 1C:Enterprise systems, enabling secure, context-aware code generation and analysis for enterprise automation workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 1C:Enterprise
Automated review identified **1C:Enterprise** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (for search indexing)
Automated review identified **BM25 (for search indexing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
