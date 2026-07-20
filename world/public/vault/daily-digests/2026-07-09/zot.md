---
title: patriceckhart/zot
category: daily-digests/2026-07-09
tech_stack:
- Go
- JSON-RPC
- OAuth
- TUI
- CLI
- Static Binary
- Telegram Bot
- Extensions
quality_score: 9
rag_relevance: 8
tags:
- coding agent
- multi-provider
- extensible
- lightweight
- TUI
source: https://github.com/patriceckhart/zot
discovered_at: '2026-07-09T17:17:47Z'
evaluated_by: mistral-small-latest
---

## Summary
zot is a lightweight, Go-based coding agent harness designed to orchestrate AI-powered coding workflows with built-in support for multiple LLM providers, tools, and extensibility. It offers a static binary, interactive TUI, and flexible configuration for persistent instructions and themes.

## Key Features
- Supports 20+ LLM providers (Anthropic, OpenAI, Google, GitHub Copilot, Ollama, etc.) with built-in authentication and token refresh
- Four built-in tools (read, write, edit, bash) and three run modes (interactive TUI, print, JSON)
- Extensible via subprocess + JSON-RPC with opt-in installation (`zot ext install`)
- Persistent instructions via `AGENTS.md` and `SKILL.md` files for customizable agent behavior
- Telegram bot integration and user/theme customization via JSON files

## Why It Matters for RAG Builders
zot simplifies the orchestration of AI coding agents by providing a unified, extensible framework that supports multiple providers and tools, making it essential for RAG builders who need flexible, production-ready agent harnesses.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI
Automated review identified **TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Binary
Automated review identified **Static Binary** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot
Automated review identified **Telegram Bot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Extensions
Automated review identified **Extensions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
