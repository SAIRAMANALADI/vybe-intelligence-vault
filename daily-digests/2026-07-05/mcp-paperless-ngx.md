---
title: "teran/mcp-paperless-ngx"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "HTTP", "Docker", "golangci-lint", "goreleaser"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "Paperless-ngx", "document management", "AI integration", "HTTP transport"]
source: "https://github.com/teran/mcp-paperless-ngx"
discovered_at: "2026-07-05T00:02:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server written in Go that bridges AI assistants to Paperless-ngx document management systems via the Model Context Protocol (MCP) over HTTP. It enables secure, per-request token-authenticated interactions with Paperless-ngx's REST API through 7 specialized MCP tools.

## Key Features
- Remote MCP server using Streamable HTTP protocol (not stdio-bound)
- Per-request token authentication via Authorization header
- 7 MCP tools for document search, retrieval, and metadata operations
- Go-based implementation using the official MCP Go SDK
- Docker and multi-platform binary support via goreleaser

## Why It Matters for RAG Builders
It enables AI assistants to securely and efficiently interact with Paperless-ngx document management systems, unlocking structured document retrieval and search capabilities for RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### golangci-lint
Automated review identified **golangci-lint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### goreleaser
Automated review identified **goreleaser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
