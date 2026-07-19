---
title: systempromptio/systemprompt-core
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Rust
- PostgreSQL
- A2A Protocol
- Model Context Protocol (MCP)
- OAuth2/OIDC
- HTTP
- SSE (Server-Sent Events)
- JWT (RS256)
- WebAuthn
- Rate Limiting
- Audit Logging
quality_score: 9
rag_relevance: 8
tags:
- AI governance
- agent orchestration
- MCP servers
- self-hosted
- security
source: https://github.com/systempromptio/systemprompt-core
discovered_at: '2026-06-25T11:41:42Z'
evaluated_by: mistral-small-latest
---

## Summary
A self-hosted platform for running AI agents and MCP servers under a unified governance boundary, providing a single Rust binary backed by PostgreSQL for secure, audited, and scalable agentic system operations.

## Key Features
- Unified platform for A2A agents, MCP servers, and OAuth2/OIDC authorization under one HTTP surface
- Compile-time extensions with `inventory` crate for modularity without runtime plugin loading
- Fail-closed governance with default-deny authorization, rate limiting, and structured audit logging
- Built-in provider gateway for routing model requests to upstream providers
- PostgreSQL-backed state management with no outbound calls for governance operations

## Why It Matters for RAG Builders
It provides a secure, self-hosted foundation for governing and orchestrating AI agents and MCP servers, ensuring compliance and control over agentic system operations.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A Protocol
Automated review identified **A2A Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2/OIDC
Automated review identified **OAuth2/OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT (RS256)
Automated review identified **JWT (RS256)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAuthn
Automated review identified **WebAuthn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rate Limiting
Automated review identified **Rate Limiting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Audit Logging
Automated review identified **Audit Logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
