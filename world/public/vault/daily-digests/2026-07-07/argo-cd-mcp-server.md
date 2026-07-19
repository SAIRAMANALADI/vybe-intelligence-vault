---
title: kamolc4/argo-cd-mcp-server
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- TypeScript
- Express
- Model Context Protocol (MCP)
- Argo CD REST API
- Jest
- GitHub Actions
- Pino (logging)
- Zod (validation)
- Bearer Token Authentication
- Rate Limiting
quality_score: 9
rag_relevance: 8
tags:
- GitOps
- Kubernetes
- MCP Server
- Argo CD
- AI Integration
source: https://github.com/kamolc4/argo-cd-mcp-server
discovered_at: '2026-07-07T22:09:41Z'
evaluated_by: mistral-small-latest
---

## Summary
A production-ready Model Context Protocol (MCP) server that enables AI clients like Claude Desktop and Cursor to interact with Argo CD for GitOps workflows. It provides secure, read-only visibility into Argo CD applications, sync status, health, and Kubernetes resources while optionally supporting controlled sync operations.

## Key Features
- Secure MCP server for Argo CD API integration with Bearer token protection
- Read-only and low-impact tools for application inspection, health, and sync status
- Optional controlled sync operations via feature flag (ENABLE_SYNC_TOOL)
- Structured logging, rate limiting, and health endpoint for production readiness
- Least-privilege security model with least-risk write operations

## Why It Matters for RAG Builders
This MCP server enables AI assistants to safely interact with Argo CD for GitOps workflows, bridging the gap between AI agents and Kubernetes deployments without exposing unrestricted cluster access.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express
Automated review identified **Express** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argo CD REST API
Automated review identified **Argo CD REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pino (logging)
Automated review identified **Pino (logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod (validation)
Automated review identified **Zod (validation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Authentication
Automated review identified **Bearer Token Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rate Limiting
Automated review identified **Rate Limiting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
