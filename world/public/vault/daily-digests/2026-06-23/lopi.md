---
title: konjoai/lopi
category: daily-digests/2026-06-23
tech_stack:
- Rust
- Tokio
- SQLite
- ratatui
- axum
- teloxide
- Twilio
- Claude Code
- Git
quality_score: 9
rag_relevance: 9
tags:
- agent orchestration
- Claude Code
- Rust
- concurrent execution
- git isolation
source: https://github.com/konjoai/lopi
discovered_at: '2026-06-23T13:41:25Z'
evaluated_by: mistral-small-latest
---

## Summary
lopi is a high-performance Rust-based agent orchestrator designed to run Claude Code agents concurrently in git-isolated branches. It features retry loops, SQLite memory, a TUI and web dashboard, and remote control via Telegram and WhatsApp.

## Key Features
- Concurrent agent execution in git-isolated branches with rollback support
- Priority-based task queue with retry loops and persistent SQLite memory
- Live TUI and web dashboard for monitoring and control
- Remote agent management via Telegram and WhatsApp
- Automated PR creation and CI integration via webhooks

## Why It Matters for RAG Builders
lopi provides a robust, high-performance foundation for orchestrating multiple AI agents concurrently with built-in reliability and observability features essential for production RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### axum
Automated review identified **axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### teloxide
Automated review identified **teloxide** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Twilio
Automated review identified **Twilio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
