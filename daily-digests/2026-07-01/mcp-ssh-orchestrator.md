---
title: "samerfarida/mcp-ssh-orchestrator"
category: "Orchestrator"
tech_stack: ["Python", "Docker", "MCP (Model Context Protocol)", "SSH", "YAML", "FastAPI", "PyJWT", "cryptography", "PyNaCl"]
quality_score: 9
rag_relevance: 9
tags: ["SSH orchestration", "zero-trust security", "policy-as-code", "AI infrastructure", "audit logging"]
source: "https://github.com/samerfarida/mcp-ssh-orchestrator"
discovered_at: "2026-07-01T19:49:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP SSH Orchestrator provides secure, policy-enforced SSH access for AI assistants like Claude and Cursor, enabling zero-trust server management with deny-by-default controls, audited command execution, and declarative YAML policy-as-code configurations.

## Key Features
- Deny-by-default access control with policy-as-code via YAML files
- Comprehensive audit logging with structured JSON output for forensics
- Network isolation and IP allowlisting to prevent lateral movement
- Command whitelisting and dangerous operation blocking (e.g., rm -rf, shutdown)
- Integration with MCP clients (Claude, Cursor) for AI-driven server management

## Why It Matters for RAG Builders
It enables secure, audited AI-driven server management by enforcing zero-trust policies and preventing common attack vectors while integrating seamlessly with MCP-aware AI assistants.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyJWT
Automated review identified **PyJWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cryptography
Automated review identified **cryptography** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyNaCl
Automated review identified **PyNaCl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
