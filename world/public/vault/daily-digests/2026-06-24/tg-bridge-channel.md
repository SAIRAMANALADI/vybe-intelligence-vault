---
title: "AliceLJY/tg-bridge-channel"
category: "Tooling"
tech_stack: ["JavaScript", "Bun", "Telegram Bot API", "Claude Agent SDK", "Claude CLI (claude --bg)", "SQLite", "Redis", "A2A-TG Protocol", "Node.js"]
quality_score: 8
rag_relevance: 9
tags: ["Telegram integration", "AI agent control", "Claude Code", "multi-agent collaboration", "self-hosted"]
source: "https://github.com/AliceLJY/tg-bridge-channel"
discovered_at: "2026-06-24T02:47:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted Telegram bridge that enables AI coding agents (Claude Code, Codex, Gemini) to be controlled via Telegram chats, treating the chat interface as a terminal. It leverages Claude Agent View background sessions for subscription-billed operations and supports multi-agent collaboration via the A2A-TG protocol.

## Key Features
- Telegram-based control of AI coding agents (Claude Code, Codex, Gemini) with the chat acting as a terminal
- Supports single-agent, parallel sessions, and experimental multi-agent collaboration via A2A-TG protocol
- Uses Claude Agent View background sessions (`claude --bg`) for subscription-billed operations with per-turn worker spawning
- Security guardrails via a destructive command blocklist to prevent catastrophic operations
- Configurable engine modes (SDK adapter or pool engine) for flexibility in deployment

## Why It Matters for RAG Builders
It provides a practical, self-hosted interface to control AI coding agents via Telegram, enabling seamless integration into workflows for developers who prefer chat-based interactions over traditional terminals.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Agent SDK
Automated review identified **Claude Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude CLI (claude --bg)
Automated review identified **Claude CLI (claude --bg)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A-TG Protocol
Automated review identified **A2A-TG Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
