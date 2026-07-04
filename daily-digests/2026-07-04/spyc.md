---
title: "Tripstack-Corp/spyc"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "Unix domain sockets", "Git", "Terminal UI (TUI)", "Claude Code", "Codex", "Gemini", "Antigravity", "zot"]
quality_score: 9
rag_relevance: 8
tags: ["file commander", "AI agent collaboration", "MCP bridge", "keyboard-driven", "terminal UI"]
source: "https://github.com/Tripstack-Corp/spyc"
discovered_at: "2026-07-04T13:12:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
spyc is a keyboard-driven, vim-flavored terminal file commander designed to collaborate with AI coding agents via an MCP-native bridge. It provides structured, live access to the user's file selection, cursor position, and git state, enabling seamless agent interaction without manual path sharing.

## Key Features
- Keyboard-driven file navigation with vim-like bindings and git-aware listings
- MCP-native socket for real-time agent access to file context (cursor, picks, inventory, git state)
- Multi-pane terminal UI with chord-prefix focus switching (^a, ^w)
- Activity tracking for agents (blocked/done states with notifications)
- Scope registry for coordinating multiple agents to avoid file conflicts

## Why It Matters for RAG Builders
spyc bridges the gap between AI coding agents and file exploration by providing structured, live context access, eliminating manual path sharing and enabling seamless agent collaboration within a unified terminal workspace.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix domain sockets
Automated review identified **Unix domain sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (TUI)
Automated review identified **Terminal UI (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini
Automated review identified **Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Antigravity
Automated review identified **Antigravity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### zot
Automated review identified **zot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
