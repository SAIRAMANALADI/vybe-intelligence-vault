---
title: marktoda/zj-radar
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Rust
- Zellij
- WASM
- CLI
- KDL (for configuration)
- JSON (for status payloads)
quality_score: 9
rag_relevance: 7
tags:
- Zellij plugin
- AI agent monitoring
- sidebar
- real-time status
- terminal multiplexer
source: https://github.com/marktoda/zj-radar
discovered_at: '2026-07-08T08:17:21Z'
evaluated_by: mistral-small-latest
---

## Summary
zj-radar is a Zellij sidebar plugin that provides real-time visibility into AI agent statuses (e.g., Claude Code, Codex) across all tabs in a Zellij session. It enables users to quickly identify which agent needs attention, jump directly to the relevant tab, and monitor agent states without disrupting existing workflows.

## Key Features
- Live per-tab AI agent status (working, waiting, done, error) with elapsed time and last message
- Click-to-jump navigation to agent tabs requiring attention
- Push-driven updates via `zellij pipe` for minimal overhead and no polling
- Supports Claude Code, Codex, and custom producers via JSON payloads
- Runtime configuration and keybindings without layout edits

## Why It Matters for RAG Builders
It provides critical visibility into AI agent states within existing terminal workflows, reducing context switching and improving productivity for developers using Zellij with AI tools.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zellij
Automated review identified **Zellij** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KDL (for configuration)
Automated review identified **KDL (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (for status payloads)
Automated review identified **JSON (for status payloads)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
