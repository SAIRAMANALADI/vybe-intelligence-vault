---
title: "bgheneti/secure-assistant-stack"
category: "Orchestrator"
tech_stack: ["ZeroClaw", "OneCLI", "LiteLLM", "PrivateMode", "Squid", "Multipass", "Docker", "PostgreSQL", "Python", "Shell Scripting"]
quality_score: 8
rag_relevance: 7
tags: ["security-hardened", "zero-trust", "agent-orchestration", "self-hosted", "credential-vault"]
source: "https://github.com/bgheneti/secure-assistant-stack"
discovered_at: "2026-06-24T16:15:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security-hardened stack for deploying ZeroClaw agents with default-deny egress, zero raw credentials, and tiered identities. It composes open-source components into a self-hosted, isolated VM setup for secure personal LLM assistants.

## Key Features
- Default-deny egress with allowlisted Squid proxy to prevent unauthorized outbound traffic
- Zero raw credentials via OneCLI's scoped, per-request token injection for SaaS interactions
- Tiered identities (updates, tasks, unrestricted) with isolated blast radii and sandboxed tool access
- TEE-confidential inference via PrivateMode for model calls to prevent data exfiltration
- One-command bring-up using Multipass for macOS/Linux VM provisioning and Docker-in-Docker for sandboxing

## Why It Matters for RAG Builders
It provides a production-grade, security-first framework for deploying AI agents that mitigates critical risks like credential theft and unauthorized data exfiltration by design.

## Tech Stack Deep Dive
### ZeroClaw
Automated review identified **ZeroClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OneCLI
Automated review identified **OneCLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PrivateMode
Automated review identified **PrivateMode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Squid
Automated review identified **Squid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Multipass
Automated review identified **Multipass** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
