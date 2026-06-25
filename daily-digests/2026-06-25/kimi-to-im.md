---
title: "hah23255/kimi-to-im"
category: "Tooling"
tech_stack: ["Python 3.11+", "Telegram Bot API", "systemd", "Kimi CLI", "httpx", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["Telegram integration", "Kimi CLI bridge", "self-hosted", "session persistence", "systemd daemon"]
source: "https://github.com/hah23255/kimi-to-im"
discovered_at: "2026-06-25T19:53:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted Python bridge that connects Telegram to the Kimi CLI, enabling users to interact with Kimi's AI via Telegram while maintaining session continuity and local control. The bridge runs as a systemd-managed daemon and enforces strict user whitelisting.

## Key Features
- Bridges Telegram messages to local Kimi CLI subprocesses for AI interactions
- Maintains session continuity per chat with persistent state management
- Enforces strict user and chat ID whitelisting for security
- Runs as a hardened systemd user service with minimal attack surface
- Provides real-time typing indicators and progress notifications for long turns

## Why It Matters for RAG Builders
It enables seamless, secure, and persistent AI interactions with Kimi CLI via Telegram, extending functionality to mobile users without cloud dependencies.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kimi CLI
Automated review identified **Kimi CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
