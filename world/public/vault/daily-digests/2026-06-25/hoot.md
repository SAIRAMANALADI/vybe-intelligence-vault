---
title: DUBSOpenHub/hoot
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- Node.js
- GitHub Copilot SDK
- SQLite
- Telegram Bot API
- EventEmitter
- Priority Queue
- Circuit Breaker
- Docker (implied for deployment)
quality_score: 9
rag_relevance: 8
tags:
- AI daemon
- background service
- multi-channel
- long-term memory
- agent framework
source: https://github.com/DUBSOpenHub/hoot
discovered_at: '2026-06-25T07:26:41Z'
evaluated_by: mistral-small-latest
---

## Summary
Hoot is a 24/7 AI daemon that runs locally on your machine, providing persistent AI assistance via Telegram, terminal, or HTTP API. It features long-term memory, background agents, and multi-channel support with pluggable AI backends like Copilot SDK, Ollama, or OpenAI.

## Key Features
- Runs 24/7 as a background service with persistent memory across sessions
- Supports multiple AI backends (Copilot SDK, Ollama, Anthropic, OpenAI) via pluggable interface
- Multi-channel access (Telegram, terminal TUI, HTTP API) with unified context
- Background agent pool for concurrent task execution with proactive notifications
- Extensible via skills (markdown-based) and plugins (TypeScript modules) with hot-reload

## Why It Matters for RAG Builders
Hoot enables RAG builders to deploy a persistent, multi-channel AI orchestrator that maintains long-term context and handles background tasks, reducing the need for manual session management and improving user experience.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Copilot SDK
Automated review identified **GitHub Copilot SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EventEmitter
Automated review identified **EventEmitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Priority Queue
Automated review identified **Priority Queue** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Circuit Breaker
Automated review identified **Circuit Breaker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied for deployment)
Automated review identified **Docker (implied for deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
