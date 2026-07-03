---
title: "FerhatDundar/s3-mcp-connector"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "AWS SDK for Go", "LocalStack", "MinIO", "Docker", "GitHub Actions", "golangci-lint", "Dependabot"]
quality_score: 10
rag_relevance: 9
tags: ["MCP server", "S3 integration", "AI agent tools", "LocalStack", "MinIO"]
source: "https://github.com/FerhatDundar/s3-mcp-connector"
discovered_at: "2026-07-03T00:03:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI agents to interact directly with Amazon S3 or any S3-compatible storage (LocalStack, MinIO) via a single static Go binary. It provides 8 tools for managing buckets and objects, supporting both real AWS and local testing environments.

## Key Features
- Exposes 8 MCP tools for S3 operations (list/read/write/delete buckets and objects)
- Supports both real AWS S3 and S3-compatible endpoints (LocalStack, MinIO) via environment variables
- Single static Go binary with zero runtime dependencies, deployable as an MCP plugin
- Built-in input validation, size caps (e.g., 200KB for reads, 5MB for writes), and response format options (markdown/json)
- Automated CI/CD with unit tests, linting, security scanning, and end-to-end LocalStack verification

## Why It Matters for RAG Builders
It empowers AI agents to directly manipulate S3 data, enabling real-world file operations like reading configs, storing reports, or cleaning up stale data without requiring manual AWS CLI usage.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SDK for Go
Automated review identified **AWS SDK for Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LocalStack
Automated review identified **LocalStack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MinIO
Automated review identified **MinIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### golangci-lint
Automated review identified **golangci-lint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dependabot
Automated review identified **Dependabot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
