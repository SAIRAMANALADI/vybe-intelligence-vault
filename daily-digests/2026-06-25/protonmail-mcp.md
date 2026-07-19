---
title: millsymills-com/protonmail-mcp
category: daily-digests/2026-06-25
tech_stack:
- Go
- Model Context Protocol (MCP)
- Proton Mail API
- gopenpgp
- go-proton-api
- REST
- Keychain/Secret Service (Linux)
quality_score: 8
rag_relevance: 7
tags:
- MCP server
- Proton Mail integration
- email management
- encryption keys
- AI tooling
source: https://github.com/millsymills-com/protonmail-mcp
discovered_at: '2026-06-25T08:34:40Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server for Proton Mail that enables AI clients like Claude Code to manage email addresses, custom domains, mail settings, encryption keys, and calendar events via a standardized MCP interface.

## Key Features
- Full Proton Mail parity with 32 MCP tools (16 read-only, 13 write-enabled, 3 dangerous-write gated)
- Secure credential storage in OS keychain or encrypted file backend
- Supports mail operations (drafts, labels, search, send) and custom domain management
- Read-only calendar and encryption key management with PGP key fingerprint extraction
- Environment-gated write access and irreversible operations for safety

## Why It Matters for RAG Builders
It bridges Proton Mail's email infrastructure with AI agents via MCP, enabling secure, programmatic management of emails, domains, and encryption keys for RAG and automation workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proton Mail API
Automated review identified **Proton Mail API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gopenpgp
Automated review identified **gopenpgp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### go-proton-api
Automated review identified **go-proton-api** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keychain/Secret Service (Linux)
Automated review identified **Keychain/Secret Service (Linux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
