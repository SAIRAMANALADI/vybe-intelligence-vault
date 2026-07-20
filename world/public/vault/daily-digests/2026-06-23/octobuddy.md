---
title: lml2468/octobuddy
category: daily-digests/2026-06-23
tech_stack:
- Go
- Wails v3
- Svelte 5
- SQLite
- NDJSON
- Unix Domain Sockets
- TypeScript
- Claude Code
- WuKongIM
quality_score: 9
rag_relevance: 8
tags:
- agent gateway
- multi-agent orchestration
- prompt injection defense
- desktop app
- sandboxing
source: https://github.com/lml2468/octobuddy
discovered_at: '2026-06-23T10:38:21Z'
evaluated_by: mistral-small-latest
---

## Summary
OctoBuddy is a cross-platform agent gateway that normalizes coding-agent CLI outputs into a unified event stream, enabling multi-agent orchestration with a native desktop app. It abstracts agent-specific details behind a driver interface, allowing seamless integration of multiple agents (e.g., Claude, Codex) while providing per-session sandboxing, prompt-injection defenses, and persistent conversation states.

## Key Features
- Agent-agnostic core with a unified `AgentEvent` vocabulary, enabling easy integration of new agents via driver implementations
- Per-session sandboxing and conversation resumption with deterministic working directories and auto-memory persistence
- Prompt-injection defense with security prefixes, message anchors, and sanitized rolling group-context windows
- Multi-bot support with isolated stacks, skills, and workflows per bot, editable in-app without external dependencies
- Cross-platform deployment as a single static Go binary with a polished Wails + Svelte desktop app for macOS, Linux, and Windows

## Why It Matters for RAG Builders
OctoBuddy simplifies the integration and management of multiple coding agents into RAG pipelines by providing a standardized, secure, and scalable gateway that handles orchestration, state persistence, and UI integration out of the box.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wails v3
Automated review identified **Wails v3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Svelte 5
Automated review identified **Svelte 5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON
Automated review identified **NDJSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix Domain Sockets
Automated review identified **Unix Domain Sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WuKongIM
Automated review identified **WuKongIM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
