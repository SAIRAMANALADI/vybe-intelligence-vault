---
title: "ChronoAIProject/NyxID"
category: "Orchestrator"
tech_stack: ["Rust", "Docker", "MongoDB", "OIDC/OAuth 2.0", "PKCE", "RBAC", "Model Context Protocol (MCP)", "REST API", "SSH Tunneling", "OpenAPI"]
quality_score: 9
rag_relevance: 10
tags: ["AI Agent Gateway", "Credential Management", "MCP Tools", "NAT Traversal", "API Proxy"]
source: "https://github.com/ChronoAIProject/NyxID"
discovered_at: "2026-06-26T13:11:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NyxID is an open-source Agent Connectivity Gateway that enables AI agents (e.g., Claude Code, Cursor, n8n) to securely access any API—public or private—without exposing raw credentials. It acts as a reverse proxy with credential injection, NAT traversal, and MCP tool wrapping for seamless integration.

## Key Features
- Secure credential injection without exposing raw API keys to agents
- NAT traversal to reach localhost or private services via credential nodes
- Auto-wrap REST APIs as MCP tools for AI agents like Claude Code and Cursor
- Per-agent isolation with scoped tokens and RBAC for fine-grained access control
- OIDC/OAuth 2.0 with PKCE and transaction approval for identity management

## Why It Matters for RAG Builders
NyxID eliminates the security risk of exposing API keys to AI agents while enabling seamless, secure access to any API—public or private—making it essential for RAG/AI stack builders focused on secure, scalable agent integrations.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MongoDB
Automated review identified **MongoDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC/OAuth 2.0
Automated review identified **OIDC/OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PKCE
Automated review identified **PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RBAC
Automated review identified **RBAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH Tunneling
Automated review identified **SSH Tunneling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
