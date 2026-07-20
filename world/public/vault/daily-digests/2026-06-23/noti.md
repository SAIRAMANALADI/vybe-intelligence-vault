---
title: AnkushinDaniil/noti
category: daily-digests/2026-06-23
tech_stack:
- Go
- Telegram Bot API
- MCP (Model Context Protocol)
- JSON-RPC 2.0
- systemd/launchd
- HTTP/JSON APIs
quality_score: 9
rag_relevance: 7
tags:
- Claude Code
- Telegram notifications
- MCP integration
- remote interaction
- permission gate
source: https://github.com/AnkushinDaniil/noti
discovered_at: '2026-06-23T19:16:39Z'
evaluated_by: mistral-small-latest
---

## Summary
A Go-based plugin for Claude Code that sends Telegram notifications to a user's phone when the AI pauses for permission or completes a task, enabling remote interaction via an MCP tool. It includes a broker daemon for Telegram updates and supports dual-input questioning (laptop + phone).

## Key Features
- Real-time Telegram notifications for Claude Code events (permission prompts, task completion)
- Dual-input questioning via MCP elicitation (laptop) and phone, with first-answer-wins logic
- Phone-first permission gate for opt-in tool approvals (e.g., Bash, Write, Edit)
- Per-project routing and configuration overrides for targeted notifications
- Zero external runtime dependencies (single static Go binary with optional fallback build)

## Why It Matters for RAG Builders
It bridges the gap between local AI workflows and remote oversight by enabling real-time, phone-based interaction and approvals for Claude Code, enhancing productivity and control in AI-driven tasks.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd/launchd
Automated review identified **systemd/launchd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON APIs
Automated review identified **HTTP/JSON APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
