---
title: yasyf/yclaw
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Nix
- Docker
- Tailscale
- Qwen MLX
- Nous Hermes Agent
- macOS
- Linux VM
- OAuth Proxy
- Agent Vault
quality_score: 9
rag_relevance: 8
tags:
- credential isolation
- home server
- Apple Silicon
- agent orchestration
- reproducible deployment
source: https://github.com/yasyf/yclaw
discovered_at: '2026-06-23T08:57:53Z'
evaluated_by: mistral-small-latest
---

## Summary
yclaw provides a reproducible, always-on home server setup for running the Nous Hermes agent on Apple Silicon with strict credential isolation. It ensures the agent never accesses API keys or OAuth tokens by routing all secret handling through a dedicated macOS credential custodian VM.

## Key Features
- Strict credential custody via a dedicated macOS VM that brokers all secrets without exposing them to the agent
- Reproducible deployment with a single `just bootstrap` command for building and booting the entire stack
- Multi-node topology using Tailscale MagicDNS for secure, isolated communication between components
- Fallback model support from hosted APIs (GPT-5.5, Gemini-3-pro) to a local Qwen MLX model for privacy
- Comprehensive documentation covering architecture, deployment, and agent conventions

## Why It Matters for RAG Builders
yclaw ensures secure, privacy-preserving deployment of AI agents by enforcing credential isolation and reproducible infrastructure, critical for RAG builders handling sensitive data.

## Tech Stack Deep Dive
### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailscale
Automated review identified **Tailscale** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen MLX
Automated review identified **Qwen MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nous Hermes Agent
Automated review identified **Nous Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS
Automated review identified **macOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux VM
Automated review identified **Linux VM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth Proxy
Automated review identified **OAuth Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Vault
Automated review identified **Agent Vault** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
