---
title: ArdurAI/ardur-agent
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Rust
- Biscuit (capability tokens)
- Cedar (policy engine)
- JWS-ES256 (receipt signing)
- Qdrant (memory backend)
- Tantivy (sparse retrieval)
- FastEmbed (dense retrieval)
- MCP (Model Context Protocol)
- Slack
- Matrix
- Discord
- Telegram
- Ollama
- Anthropic
- OpenRouter
- OpenAI-compatible endpoints
quality_score: 9
rag_relevance: 8
tags:
- AI agent runtime
- capability-based security
- receipt-chain auditing
- multi-provider LLM access
- bi-temporal memory
source: https://github.com/ArdurAI/ardur-agent
discovered_at: '2026-07-06T21:26:07Z'
evaluated_by: mistral-small-latest
---

## Summary
Ardur is a secure, multi-channel AI agent runtime with a built-in security substrate. It enforces capability-based access control, generates tamper-evident receipt chains, and implements cost-gating for every agent action, ensuring auditability and governance.

## Key Features
- Capability tokens (Biscuit) for scoped, revocable authorization with no ambient authority
- Tamper-evident receipt chain (JWS-ES256) linking every turn to prior actions for auditability
- Four-stage cost-admission gate to control and track spending per turn
- Multi-channel support (Slack, Matrix, Discord, Telegram) with uniform pipeline processing
- Bi-temporal memory backend with hybrid retrieval (dense + sparse) for context-aware responses

## Why It Matters for RAG Builders
Ardur provides a secure, auditable foundation for building governed AI agents with built-in cost control and tamper-evident logging, critical for enterprise and production deployments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Biscuit (capability tokens)
Automated review identified **Biscuit (capability tokens)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cedar (policy engine)
Automated review identified **Cedar (policy engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWS-ES256 (receipt signing)
Automated review identified **JWS-ES256 (receipt signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (memory backend)
Automated review identified **Qdrant (memory backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy (sparse retrieval)
Automated review identified **Tantivy (sparse retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed (dense retrieval)
Automated review identified **FastEmbed (dense retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack
Automated review identified **Slack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Matrix
Automated review identified **Matrix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord
Automated review identified **Discord** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram
Automated review identified **Telegram** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic
Automated review identified **Anthropic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible endpoints
Automated review identified **OpenAI-compatible endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
