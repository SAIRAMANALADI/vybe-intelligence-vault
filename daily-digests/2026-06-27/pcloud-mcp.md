---
title: "terraincognita07/pcloud-mcp"
category: "Orchestrator"
tech_stack: ["Go", "Model Context Protocol (MCP)", "OAuth 2.0", "Docker", "CI/CD (GitHub Actions)", "Static Binary Distribution"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "pCloud integration", "secure file access", "OAuth hardening", "path traversal protection"]
source: "https://github.com/terraincognita07/pcloud-mcp"
discovered_at: "2026-06-27T21:01:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A hardened Model Context Protocol (MCP) server for pCloud cloud storage, written in Go. It enables secure, plain-language interaction with pCloud files and folders while enforcing strict path containment and OAuth-only authentication to mitigate security risks.

## Key Features
- 21 MCP tools for file/folder operations (browse, download, upload, organize, share, delete)
- Path-traversal-proof downloads with kernel-enforced containment via `os.Root`
- OAuth 2.0-only authentication with token stored securely (0600 permissions)
- Supports both local (stdio) and remote (HTTP) deployment modes with bearer token auth
- Destructive operations flagged (e.g., delete) with MCP `DestructiveHint` for host confirmation

## Why It Matters for RAG Builders
It provides a secure, hardened bridge between LLMs and cloud storage, ensuring safe file operations while mitigating risks like path traversal and unauthorized access in AI-driven workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Binary Distribution
Automated review identified **Static Binary Distribution** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
