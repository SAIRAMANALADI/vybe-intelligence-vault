---
title: "avivsinai/telclaude"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Docker", "Telegram Bot API", "Claude Code", "Codex CLI", "MCP (Model Context Protocol)", "SQLite/PostgreSQL", "TOTP (Time-based One-Time Password)", "OS Keychain", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["secure AI orchestration", "Telegram integration", "LLM pre-screening", "credential vault", "permission tiers"]
source: "https://github.com/avivsinai/telclaude"
discovered_at: "2026-06-26T06:53:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
telclaude is a secure, isolation-first bridge between Telegram and AI agents (Claude Code, Codex, or custom operators) that enforces strict permission tiers, LLM pre-screening, and human approval workflows. It ensures credential safety, audit logging, and runtime containment for secure AI-agent interactions.

## Key Features
- Mandatory isolation boundary for all LLM/persona execution via Hermes runtime with Docker firewall enforcement
- Tiered permission system (READ_ONLY, WRITE_LOCAL, SOCIAL, FULL_ACCESS) with human approvals for high-risk actions
- Credential vault sidecar daemon that injects API keys without exposing raw credentials to agents
- LLM pre-screening, rate limiting, and audit logging with fail-closed defaults
- Support for multiple AI runtimes (Claude Code, Codex) and social integrations (X, Bluesky, etc.)

## Why It Matters for RAG Builders
It provides a critical security layer for RAG/AI stacks by enforcing strict isolation, permission controls, and auditability in agent workflows, reducing exposure to credential leaks and unauthorized actions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite/PostgreSQL
Automated review identified **SQLite/PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOTP (Time-based One-Time Password)
Automated review identified **TOTP (Time-based One-Time Password)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keychain
Automated review identified **OS Keychain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
