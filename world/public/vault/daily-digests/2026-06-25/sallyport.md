---
title: ginkida/sallyport
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- TypeScript
- Python
- Chrome Extension (MV3)
- WebSocket (WS)
- HMAC-SHA256
- MCP (Model Context Protocol)
- Pytest
- Vitest
- Ruff
- Mypy
- ESLint
- Prettier
- TypeScript Compiler (tsc)
quality_score: 9
rag_relevance: 8
tags:
- browser automation
- security
- MCP client
- Chrome extension
- HMAC authentication
source: https://github.com/ginkida/sallyport
discovered_at: '2026-06-25T11:39:42Z'
evaluated_by: mistral-small-latest
---

## Summary
Sallyport is a secure browser-automation bridge that connects Claude Code (or any MCP client) to Chrome via a Chrome extension and a Python MCP server. It provides a secure alternative to Kimi WebBridge with explicit security boundaries, domain allowlisting, and HMAC-based authentication.

## Key Features
- HMAC-SHA256 signed WebSocket communication with timestamp and nonce validation for replay protection
- Domain allowlisting enforced in the extension with per-domain opt-in for `evaluate` tool
- Structured Chrome DevTools Protocol (CDP) calls for secure DOM interactions without content-script injection
- Audit logging of all tool calls with a rolling history of 500 entries
- Cross-language canonical-JSON and HMAC test vectors for compatibility and security validation

## Why It Matters for RAG Builders
Sallyport provides a secure, auditable, and domain-restricted bridge for AI agents to interact with Chrome, addressing critical security gaps in browser automation tools.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extension (MV3)
Automated review identified **Chrome Extension (MV3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket (WS)
Automated review identified **WebSocket (WS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESLint
Automated review identified **ESLint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prettier
Automated review identified **Prettier** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript Compiler (tsc)
Automated review identified **TypeScript Compiler (tsc)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
