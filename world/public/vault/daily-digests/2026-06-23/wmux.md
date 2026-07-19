---
title: openwong2kim/wmux
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Electron
- TypeScript
- React
- ConPTY
- xterm.js
- Playwright
- CDP (Chrome DevTools Protocol)
- Node.js
- Zustand
- Python
quality_score: 9
rag_relevance: 7
tags:
- Windows terminal
- AI agent orchestration
- browser automation
- MCP server
- terminal multiplexer
source: https://github.com/openwong2kim/wmux
discovered_at: '2026-06-23T10:33:26Z'
evaluated_by: mistral-small-latest
---

## Summary
wmux is a native Windows terminal multiplexer designed for AI agents, enabling parallel execution of coding agents like Claude Code, Codex CLI, and Gemini CLI in split panes with built-in browser automation and zero-config MCP integration. It eliminates the need for WSL while providing tmux-like features, agent coordination, and session persistence.

## Key Features
- Split panes and workspaces for running multiple AI agents simultaneously in one window
- Agent-to-agent messaging and task delegation with execute approval gates for security
- Built-in Chrome browser automation via CDP for real browser control by agents
- Session persistence and supervision with auto-restart across crashes and reboots
- Zero-config MCP server integration for seamless agent tool access

## Why It Matters for RAG Builders
wmux enables AI agents to run in parallel on Windows with native terminal and browser control, reducing setup complexity and improving multi-agent collaboration without requiring WSL.

## Tech Stack Deep Dive
### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ConPTY
Automated review identified **ConPTY** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xterm.js
Automated review identified **xterm.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDP (Chrome DevTools Protocol)
Automated review identified **CDP (Chrome DevTools Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zustand
Automated review identified **Zustand** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
