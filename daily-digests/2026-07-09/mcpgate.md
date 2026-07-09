---
title: "Mcpgate-de/mcpgate"
category: "Orchestrator"
tech_stack: ["Python", "Docker", "MCP (Model Context Protocol)", "OAuth/OIDC", "YAML", "REST APIs", "OpenAPI", "PostgreSQL", "Redis"]
quality_score: 9
rag_relevance: 10
tags: ["MCP gateway", "self-hosted", "PII pseudonymization", "policy enforcement", "AI agent integration"]
source: "https://github.com/Mcpgate-de/mcpgate"
discovered_at: "2026-07-09T21:19:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcpgate is a self-hosted MCP gateway that enables AI agents (Claude, ChatGPT, etc.) to securely connect to 40+ enterprise tools while enforcing privacy, policy, and data governance. It provides PII pseudonymization, two-layer policy hooks, and a context map for agent-aware tooling.

## Key Features
- Connects AI agents to 40+ enterprise tools via a single gateway
- Built-in PII pseudonymization with on-prem rehydration for GDPR compliance
- Two-layer policy hooks (company + user) with hot-reload support
- Context Map for agent-aware tooling and company-specific knowledge
- Zero data at rest with BSL 1.1 licensing (free for up to 5 users)

## Why It Matters for RAG Builders
mcpgate enables RAG/AI stacks to securely and privately connect to enterprise tools while enforcing governance policies, making it essential for building production-grade AI agents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth/OIDC
Automated review identified **OAuth/OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
