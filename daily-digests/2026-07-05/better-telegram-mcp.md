---
title: "n24q02m/better-telegram-mcp"
category: "Agent Framework"
tech_stack: ["Python", "Telegram Bot API", "MTProto (Telethon)", "Model Context Protocol (MCP)", "Docker", "HTTP", "Pydantic", "FastAPI"]
quality_score: 9
rag_relevance: 8
tags: ["Telegram integration", "AI agent tools", "MCP server", "multi-mode authentication", "media management"]
source: "https://github.com/n24q02m/better-telegram-mcp"
discovered_at: "2026-07-05T13:26:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI agents to interact with Telegram's bot and user-account modes, providing tools for managing messages, chats, media, and contacts with dual-mode support (Bot API and MTProto).

## Key Features
- Dual-mode support for both bot and user-account interactions via Telegram Bot API and MTProto
- 7 MCP tools for comprehensive message, chat, media, and contact management
- Web-based OTP authentication for user-mode sign-in without CLI dependency
- Security-hardened with SSRF protection, path traversal prevention, and error sanitization
- Multi-user remote support with per-JWT-sub credential isolation

## Why It Matters for RAG Builders
It provides AI agents with direct, secure, and multi-modal access to Telegram's ecosystem, enabling seamless integration for messaging, media, and contact management in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MTProto (Telethon)
Automated review identified **MTProto (Telethon)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
