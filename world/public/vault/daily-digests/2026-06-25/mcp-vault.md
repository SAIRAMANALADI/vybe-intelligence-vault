---
title: Cloud-Temple/mcp-vault
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Python
- OpenBao
- ASGI
- Docker
- S3
- SSH
- PKI
- ACME
- JWT
- C18 (Credential Broker Service)
quality_score: 9
rag_relevance: 8
tags:
- secret management
- AI agents
- OpenBao
- MCP server
- security
source: https://github.com/Cloud-Temple/mcp-vault
discovered_at: '2026-06-25T08:34:04Z'
evaluated_by: mistral-small-latest
---

## Summary
MCP Vault is a secure secret management server for AI agents, embedding OpenBao (a HashiCorp Vault fork) as its encryption engine. It provides a 1Password-like experience tailored for AI workflows with granular access control, SSH CA, PKI, and audit capabilities.

## Key Features
- Embedded OpenBao for secure secret storage and encryption
- Granular access control via MCP policies (6 pre-built examples)
- SSH Certificate Authority per vault with cryptographic isolation
- Internal PKI with ACME support for certificate issuance
- Audit logging with ring buffer and persistent JSONL storage

## Why It Matters for RAG Builders
MCP Vault provides a critical security layer for AI agents by centralizing and securing secrets, SSH access, and certificates, ensuring compliance and reducing attack surfaces in AI-driven workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenBao
Automated review identified **OpenBao** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASGI
Automated review identified **ASGI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PKI
Automated review identified **PKI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACME
Automated review identified **ACME** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C18 (Credential Broker Service)
Automated review identified **C18 (Credential Broker Service)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
