---
title: sipyourdrink-ltd/bernstein
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Python
- Git
- JWT
- HMAC-SHA256
- Ed25519/EdDSA
- JWS (RFC 7515)
- JCS (RFC 8785)
- Docker
- CLI Agents (Claude Code, Codex, Gemini CLI, etc.)
quality_score: 9
rag_relevance: 9
tags:
- multi-agent orchestration
- deterministic scheduling
- audit-grade compliance
- CLI coding agents
- air-gap deployable
source: https://github.com/sipyourdrink-ltd/bernstein
discovered_at: '2026-06-25T11:40:07Z'
evaluated_by: mistral-small-latest
---

## Summary
Bernstein is a deterministic Python-based orchestrator for CLI coding agents that coordinates parallel AI-driven tasks in isolated git worktrees, ensuring reproducible, tamper-evident workflows with HMAC-signed audit chains and per-artefact lineage tracking.

## Key Features
- Parallel execution of 44+ CLI coding agents in isolated git worktrees
- HMAC-SHA256 audit chain with tamper-evident logging (RFC 2104)
- Signed agent cards using Ed25519/EdDSA and JWS (RFC 7515)
- Per-artefact lineage tracking linked to producer inputs and model costs
- Bearer-token task server with zero-trust JWT authentication

## Why It Matters for RAG Builders
Bernstein provides a critical layer of deterministic orchestration and auditability for RAG/AI stacks that rely on CLI coding agents, ensuring reproducible, compliance-ready workflows with tamper-evident records.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519/EdDSA
Automated review identified **Ed25519/EdDSA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWS (RFC 7515)
Automated review identified **JWS (RFC 7515)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JCS (RFC 8785)
Automated review identified **JCS (RFC 8785)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Agents (Claude Code, Codex, Gemini CLI, etc.)
Automated review identified **CLI Agents (Claude Code, Codex, Gemini CLI, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
