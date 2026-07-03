---
title: "systempromptio/systemprompt-template"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "Docker", "YAML", "ChaCha20-Poly1305", "JWT", "MCP", "Anthropic SDK", "OpenAI SDK", "Gemini SDK"]
quality_score: 9
rag_relevance: 10
tags: ["AI governance", "self-hosted", "secret protection", "compliance", "audit trail"]
source: "https://github.com/systempromptio/systemprompt-template"
discovered_at: "2026-07-03T15:09:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted Rust-based governance and orchestration template for AI agents, enabling secure, auditable, and provider-agnostic AI fleet management with built-in secret protection, RBAC, and compliance-ready logging.

## Key Features
- Single Rust binary with PostgreSQL for all AI fleet operations (inference, auditing, evals)
- In-process governance pipeline with JWT validation, RBAC, secret detection, and rate limiting
- Credentials injected into tool subprocesses only (never in LLM context) with ChaCha20-Poly1305 encryption
- Built-in compliance for SOC 2, ISO 27001, HIPAA, and OWASP Agentic Top 10 with structured audit logs
- Provider-agnostic integration with Anthropic, OpenAI, and Gemini via configurable defaults

## Why It Matters for RAG Builders
It provides a critical governance layer for RAG/AI stacks, ensuring secure, auditable, and compliant AI agent operations without relying on external SaaS tools.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChaCha20-Poly1305
Automated review identified **ChaCha20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI SDK
Automated review identified **OpenAI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini SDK
Automated review identified **Gemini SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
