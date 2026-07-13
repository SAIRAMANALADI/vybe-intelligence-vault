---
title: "luisgf/infrabroker"
category: "Orchestrator"
tech_stack: ["Go", "SSH", "Kubernetes", "MCP (Model Context Protocol)", "OAuth2/OIDC", "Ed25519", "Azure Key Vault", "mTLS", "ASCIIcast"]
quality_score: 9
rag_relevance: 10
tags: ["ephemeral credentials", "AI agent security", "SSH broker", "Kubernetes access", "credential isolation"]
source: "https://github.com/luisgf/infrabroker"
discovered_at: "2026-07-07T18:59:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Infrabroker is an infrastructure access broker designed for AI agents, enabling secure SSH and Kubernetes operations without exposing credentials to the model. It generates ephemeral, scope-limited credentials for each operation, ensuring anti-exfiltration and controlled access.

## Key Features
- Ephemeral credentials (SSH certs/tokens) generated per operation and discarded immediately after use
- Separate signer service for CA key management and policy enforcement
- AI-action firewall with per-command policy, dry-run, and human-in-the-loop approval
- Multi-protocol support (MCP stdio, HTTP+OIDC, mTLS) for flexible deployment
- Cryptographically chained audit logs with non-repudiation and session recording

## Why It Matters for RAG Builders
It provides a critical security layer for RAG/AI stacks by preventing credential exfiltration and enforcing granular access control for AI agents interacting with infrastructure.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2/OIDC
Automated review identified **OAuth2/OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure Key Vault
Automated review identified **Azure Key Vault** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASCIIcast
Automated review identified **ASCIIcast** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
