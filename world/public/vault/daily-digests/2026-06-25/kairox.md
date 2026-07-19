---
title: Z-Only/kairox
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Rust
- Tauri
- Vue.js
- SQLite
- ratatui
- OpenAI API
- Anthropic API
- Ollama
- Model Context Protocol (MCP)
- Playwright
- TOML
quality_score: 9
rag_relevance: 8
tags:
- AI agents
- local-first
- multi-agent orchestration
- context management
- MCP integration
source: https://github.com/Z-Only/kairox
discovered_at: '2026-06-25T11:37:34Z'
evaluated_by: mistral-small-latest
---

## Summary
Kairox is a local-first AI agent workbench featuring a shared Rust core, a terminal UI (TUI), and a Tauri + Vue desktop GUI. It provides a structured runtime for agent orchestration, memory management, tool integration, and multi-agent strategies with context-aware execution.

## Key Features
- Shared Rust core with modular crates for runtime, models, tools, and memory
- Dual UI support: TUI (ratatui) and Tauri + Vue desktop GUI
- Context-aware runtime with token budgeting, compaction, and mid-session model switching
- Built-in tools (filesystem, shell, browser automation, MCP) with granular permission controls
- Headless evaluation harness (`kairox-eval`) for JSONL scenarios and metrics

## Why It Matters for RAG Builders
Kairox provides a robust, modular framework for building and orchestrating AI agents with local-first capabilities, making it essential for developers seeking scalable, context-aware agent systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vue.js
Automated review identified **Vue.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
