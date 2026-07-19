---
title: trueoriginlabs/vibatchium
category: daily-digests/2026-07-07
tech_stack:
- Python
- Playwright
- Chromium
- CDP (Chrome DevTools Protocol)
- FastAPI
- curl_cffi
- XSalsa20-Poly1305
- OS keyring
- MCP (Model Context Protocol)
- WebSocket
- REST API
quality_score: 9
rag_relevance: 10
tags:
- browser automation
- Cloudflare bypass
- multi-session
- credential vault
- prompt-injection safety
source: https://github.com/trueoriginlabs/vibatchium
discovered_at: '2026-07-07T02:34:16Z'
evaluated_by: mistral-small-latest
---

## Summary
vibatchium is an agent-piloted browser automation toolkit designed to bypass Cloudflare and other anti-bot systems for AI agents. It combines patched Playwright, multi-session daemon management, credential vaults, vision-based clicking, and prompt-injection safety into a single MCP server with parallel Chromium instances.

## Key Features
- Patched Playwright for stealthy browser automation with Cloudflare CDP-leak fixes
- Multi-session daemon supporting N parallel Chromium instances with persistent profiles
- Encrypted credential vault with TOTP and IMAP email-code polling for 2FA handling
- Vision-first clicking with spend caps and prompt-injection classifier (0% FP on 204 samples)
- MCP server and REST shim for seamless integration with AI agents and coding tools

## Why It Matters for RAG Builders
It enables AI agents to reliably bypass anti-bot systems like Cloudflare, perform authenticated browsing, and securely manage credentials, making it essential for RAG pipelines requiring real-world web interaction.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDP (Chrome DevTools Protocol)
Automated review identified **CDP (Chrome DevTools Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### curl_cffi
Automated review identified **curl_cffi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XSalsa20-Poly1305
Automated review identified **XSalsa20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS keyring
Automated review identified **OS keyring** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
