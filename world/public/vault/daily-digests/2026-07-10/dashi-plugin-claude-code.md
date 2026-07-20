---
title: qwwiwi/dashi-plugin-claude-code
category: daily-digests/2026-07-10
tech_stack:
- TypeScript
- Bun
- Claude Code
- Telegram Bot API
- grammy
- Zod
- tmux
- MCP (Model Context Protocol)
- YAML
quality_score: 9
rag_relevance: 8
tags:
- Telegram integration
- Claude Code plugin
- AI agent
- SDK billing optimization
- multichat routing
source: https://github.com/qwwiwi/dashi-plugin-claude-code
discovered_at: '2026-07-10T06:31:12Z'
evaluated_by: mistral-small-latest
---

## Summary
A TypeScript-based Bun plugin that transforms a live Claude Code session into a Telegram agent, enabling interactive AI workflows via Telegram without per-message SDK billing. It replaces the deprecated `claude -p` gateway pattern and supports features like multichat routing, media handling, and terminal mirroring.

## Key Features
- Replaces deprecated `claude -p` gateway with a persistent interactive session to avoid per-message SDK billing after June 2026
- Supports multichat routing to manage multiple Telegram chats under a single identity with per-chat tmux sessions
- Includes media and voice message transcription for richer interactions
- Features terminal mirroring to reflect Claude Code session state in Telegram
- Provides plugin hooks for progress reporting, task management, and interactive commands

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to integrate Claude Code with Telegram for interactive agent workflows while avoiding costly per-message SDK billing and maintaining context continuity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### grammy
Automated review identified **grammy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
