---
title: "imatza-rh/mcp-zuul"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP/HTTPS", "WebSocket", "Kerberos/SPNEGO", "Docker", "GitHub Actions"]
quality_score: 9
rag_relevance: 9
tags: ["CI/CD debugging", "MCP server", "Zuul integration", "log analysis", "pipeline monitoring"]
source: "https://github.com/imatza-rh/mcp-zuul"
discovered_at: "2026-06-28T22:04:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-zuul is an MCP (Model Context Protocol) server that provides structured access to Zuul CI systems, enabling AI agents to debug build failures, search logs, and manage pipelines without manual UI navigation.

## Key Features
- Structured failure analysis with task-level error details from Zuul's job-output.json
- Precise log navigation with regex search, context lines, and line-range support
- Live pipeline awareness with job progress, ETA, and pre-failure detection
- Kerberos/SPNEGO authentication support for secure Zuul instance access
- Write operations for enqueueing, promoting, and managing builds (disabled by default)

## Why It Matters for RAG Builders
It enables AI agents to programmatically debug CI/CD failures, reducing manual log parsing and accelerating root cause analysis for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kerberos/SPNEGO
Automated review identified **Kerberos/SPNEGO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
