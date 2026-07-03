---
title: "littleoffice/mcp-searxng-relay"
category: "Agent Framework"
tech_stack: ["Go", "Docker", "Model Context Protocol (MCP)", "SearXNG", "Kubernetes", "Prometheus (metrics)", "SSRF protection", "Bearer token authentication"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "self-hosted search", "SearXNG integration", "security-hardened", "audit logging"]
source: "https://github.com/littleoffice/mcp-searxng-relay"
discovered_at: "2026-07-03T17:22:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables AI agents to perform web search and URL fetching through a self-hosted SearXNG instance, prioritizing security, auditability, and compliance for restricted environments. It supports both local (stdio) and networked (HTTP) deployments with robust features like SSRF protection, rate limiting, and reproducible builds.

## Key Features
- Web search and URL fetching via self-hosted SearXNG with full query control and audit trails
- Structured content extraction (Markdown, PDF, Office docs) with charset detection and readability optimization
- SSRF protection, rate limiting, and bearer token authentication for secure deployments
- Reproducible container builds with supply-chain provenance verification
- Per-domain metrics, prompt fencing, and session management for compliance and monitoring

## Why It Matters for RAG Builders
It enables AI agents to perform secure, auditable web searches and content retrieval within restricted environments, eliminating reliance on third-party APIs while maintaining compliance and operational control.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus (metrics)
Automated review identified **Prometheus (metrics)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSRF protection
Automated review identified **SSRF protection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer token authentication
Automated review identified **Bearer token authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
