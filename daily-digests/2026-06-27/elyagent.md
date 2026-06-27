---
title: "franckolv-dev/ElyAgent"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Next.js", "LangGraph", "Docker", "PostgreSQL", "Redis", "LangChain", "Elastic License v2", "JWT", "AES-256-GCM", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["Self-hosted", "Privacy-first", "PII masking", "Multi-LLM", "Human-in-the-loop"]
source: "https://github.com/franckolv-dev/ElyAgent"
discovered_at: "2026-06-27T20:56:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ELY is a sovereign, self-hosted AI agent designed for privacy-conscious users and organizations. It runs on local hardware, masks sensitive data (PII) before LLM calls, enforces human-in-the-loop (HITL) for irreversible actions, and supports multi-user, multi-LLM, and multi-channel interactions while ensuring GDPR compliance.

## Key Features
- Native PII anonymization before LLM calls to protect sensitive data (emails, IBANs, API tokens, etc.)
- Structural human-in-the-loop (HITL) for irreversible actions with persistent bans and audit trails
- Multi-user support with per-user memory, vaults, and LLM budget management
- Self-improving agent with autonomous playbook generation from failures and real-time success diagnostics
- Multi-channel support (web, voice, mobile, Telegram, Slack, Discord) and hybrid local/cloud LLM routing

## Why It Matters for RAG Builders
ELY provides a critical privacy-preserving layer for RAG/AI stacks by anonymizing sensitive data before LLM calls and enforcing strict human oversight, making it essential for organizations handling confidential or regulated data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elastic License v2
Automated review identified **Elastic License v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
