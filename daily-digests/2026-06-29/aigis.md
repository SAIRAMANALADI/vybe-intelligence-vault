---
title: "killertcell428/aigis"
category: "Tooling"
tech_stack: ["Python", "HMAC-SHA256", "CLI", "Docker", "Kubernetes", "FastAPI", "Apache 2.0"]
quality_score: 9
rag_relevance: 8
tags: ["AI Security", "Agent Guardrails", "Audit Logging", "Compliance", "Tamper-Evident"]
source: "https://github.com/killertcell428/aigis"
discovered_at: "2026-06-29T02:54:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aigis is an open-source trust layer designed to enable secure deployment of autonomous AI agents like Claude Code by providing deterministic guardrails, tamper-evident audit logs, and compliance-ready trust packs for security teams. It integrates seamlessly with agent frameworks to block malicious tool calls and generate audit evidence for IT approval.

## Key Features
- Deterministic guardrails for AI agent tool calls (Bash, Edit, Write, WebFetch) with pre-execution scanning
- Tamper-evident audit logs with HMAC-SHA256 and hash-chain verification for integrity
- Automated generation of IT-approval packs mapping to ISO/IEC 27001, NIST AI RMF, OWASP LLM Top 10, and regional standards
- Pre-built integrations for Claude Code, MCP, LangGraph, and Docker/Kubernetes sidecars
- 44 compliance templates across US, CN, JP, and EU regions for evidence collection

## Why It Matters for RAG Builders
Aigis provides the critical missing layer of runtime security and auditability for AI agents, enabling organizations to deploy autonomous tools like Claude Code with IT approval while maintaining compliance and evidence trails.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache 2.0
Automated review identified **Apache 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
