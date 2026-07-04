---
title: "luisgf/infrabroker"
category: "Tooling"
tech_stack: ["Go", "SSH", "Kubernetes", "MCP (Model Context Protocol)", "OAuth2/OIDC", "Ed25519", "HSM/KMS (Azure Key Vault)", "mTLS", "ASCIIcast"]
quality_score: 9
rag_relevance: 8
tags: ["ephemeral credentials", "AI agent security", "infrastructure access", "SSH broker", "Kubernetes access"]
source: "https://github.com/luisgf/infrabroker"
discovered_at: "2026-07-04T13:18:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Infrabroker is an infrastructure access broker designed for AI agents, enabling secure SSH and Kubernetes operations without exposing credentials to the model. It generates ephemeral, scope-limited credentials for each operation, ensuring anti-exfiltration and anti-reuse security.

## Key Features
- Ephemeral SSH certificates and Kubernetes tokens minted per operation, discarded after use
- Separate signer service for CA key management and policy enforcement
- MCP-native tools for AI agents (SSH and Kubernetes operations)
- Multi-user authentication via OAuth2/OIDC or mTLS
- Comprehensive audit logging with cryptographic chaining and session recording

## Why It Matters for RAG Builders
It provides a critical security layer for RAG and AI stacks by ensuring credentials never enter the model's context, preventing prompt injection and credential exfiltration.

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

### HSM/KMS (Azure Key Vault)
Automated review identified **HSM/KMS (Azure Key Vault)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
