---
title: "wacht-platform/snippet-service"
category: "Agent Framework"
tech_stack: ["Rust", "Terminal UI (TUI)", "HTTP/WebSocket", "Cloudflare Tunnel", "TOML (config)", "msgpack (session storage)", "OpenAI API", "Anthropic API", "Gemini API", "OAuth (ChatGPT subscription)"]
quality_score: 9
rag_relevance: 8
tags: ["AI coding agent", "terminal UI", "remote control", "model flexibility", "persistent sessions"]
source: "https://github.com/wacht-platform/snippet-service"
discovered_at: "2026-07-05T11:27:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
snippet is an open-source AI coding agent that runs locally in your terminal with a durable TUI and a headless daemon for remote control. It supports multiple AI models, parallel sub-agents, and persistent sessions with checkpointing and rewinding capabilities.

## Key Features
- Durable terminal UI with automatic checkpointing and rewinding for session persistence
- Headless daemon (`serve`) with authenticated remote control via mobile/desktop app
- Support for multiple AI models (Claude, GPT, Gemini, local, etc.) with profile switching
- Parallel sub-agents for scoped work and real tool surface (file ops, shell, search, etc.)
- Self-updating binary with persistent memory and long-running session support

## Why It Matters for RAG Builders
It provides a self-hosted, durable AI coding agent with remote control capabilities, enabling developers to own their AI workflows without cloud lock-in while supporting multi-model flexibility and persistent sessions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (TUI)
Automated review identified **Terminal UI (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/WebSocket
Automated review identified **HTTP/WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### msgpack (session storage)
Automated review identified **msgpack (session storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth (ChatGPT subscription)
Automated review identified **OAuth (ChatGPT subscription)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
