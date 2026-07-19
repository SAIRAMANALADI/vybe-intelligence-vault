---
title: dcellison/kai
category: world/public/vault/daily-digests/2026-06-22
tech_stack:
- Python
- Telegram Bot API
- Claude Code
- Goose
- OpenAI Codex CLI
- OpenCode
- YAML
- SQLite
- FastAPI
- Sudo
- Git
- TOTP (Time-based One-Time Password)
quality_score: 9
rag_relevance: 8
tags:
- AI agent
- multi-user
- local execution
- security
- automation
source: https://github.com/dcellison/kai
discovered_at: '2026-06-22T23:20:25Z'
evaluated_by: mistral-small-latest
---

## Summary
Kai is a persistent, multi-user AI agent framework that manages local agent subprocesses (e.g., Claude Code, Goose, OpenAI Codex CLI) via Telegram, enabling real-time system interactions, automated PR reviews, issue triage, and scheduled jobs. It prioritizes security, isolation, and local execution with optional OS-level process separation.

## Key Features
- Persistent agent subprocesses with lazy creation and idle eviction for efficient resource usage
- Multi-layered security model including Telegram auth, TOTP, process isolation, and path confinement
- Persistent memory layers (identity, home memory, conversation history) for continuity across sessions
- Support for multiple agent backends (Claude Code, Goose, OpenAI Codex CLI, OpenCode) with unified lifecycle management
- Automated PR reviews, issue triage, scheduled jobs, and real-time system interactions via Telegram

## Why It Matters for RAG Builders
Kai provides a robust, secure, and scalable framework for deploying persistent AI agents locally, enabling advanced automation and multi-user collaboration without cloud dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Goose
Automated review identified **Goose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex CLI
Automated review identified **OpenAI Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sudo
Automated review identified **Sudo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOTP (Time-based One-Time Password)
Automated review identified **TOTP (Time-based One-Time Password)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
