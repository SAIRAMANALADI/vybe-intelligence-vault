---
title: "escoffier-labs/code-search-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "FastAPI", "HTTP", "npm"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "code search", "semantic search", "local codebase", "FastAPI integration"]
source: "https://github.com/escoffier-labs/code-search-mcp"
discovered_at: "2026-06-26T16:17:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only MCP server that enables MCP-compatible clients (e.g., Claude Desktop, OpenClaw) to query a local codebase semantically via the code-search-api service. It provides tools for semantic code search, project listing, and health checks without modifying the underlying data.

## Key Features
- Semantic code search with multiple response formats (raw, compact, by_file)
- Integration with code-search-api for local codebase indexing and querying
- Read-only operations (no mutations, deletions, or backfills)
- Support for MCP clients like Claude Desktop, OpenClaw, and Hermes Agent
- Configurable via environment variables for API URL and authentication

## Why It Matters for RAG Builders
It bridges MCP clients with local codebase search capabilities, enabling AI agents to query and retrieve relevant code snippets efficiently for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
