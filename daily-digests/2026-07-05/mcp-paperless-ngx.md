---
title: "teran/mcp-paperless-ngx"
category: "Orchestrator"
tech_stack: ["Go", "Model Context Protocol (MCP)", "HTTP/Streamable Transport", "Docker", "CI/CD (GitHub Actions)", "golangci-lint", "goreleaser"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "document management", "Paperless-ngx", "multi-tenant", "remote protocol"]
source: "https://github.com/teran/mcp-paperless-ngx"
discovered_at: "2026-07-05T23:05:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-paperless-ngx is a remote Model Context Protocol (MCP) server that enables AI assistants to interact with Paperless-ngx document management systems over HTTP. It acts as a secure, multi-tenant gateway, relaying authenticated requests to Paperless-ngx without storing or inspecting tokens.

## Key Features
- Remote MCP server over Streamable HTTP, eliminating local stdio dependencies
- Multi-tenant architecture with per-user Paperless-ngx API token relay
- Transparent authentication with zero token storage or logging
- Production-grade security with distroless images, rate limiting, and read-only filesystems
- 7+ MCP tools for document search, full-text retrieval, and metadata access

## Why It Matters for RAG Builders
It enables secure, scalable integration of Paperless-ngx document repositories with AI assistants via the Model Context Protocol, simplifying multi-tenant deployments without per-user setup.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable Transport
Automated review identified **HTTP/Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
