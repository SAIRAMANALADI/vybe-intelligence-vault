---
title: "flowork-os/Flowork_Agent"
category: "Agent Framework"
tech_stack: ["Go", "WASM (wazero)", "SQLite (FTS5)", "Model Context Protocol (MCP)", "Telegram/Discord/Slack/WhatsApp integrations", "STT/TTS (offline)", "Security scanning tools"]
quality_score: 9
rag_relevance: 8
tags: ["self-hosted", "WASM sandboxing", "local-first", "security-first", "multi-agent orchestration"]
source: "https://github.com/flowork-os/Flowork_Agent"
discovered_at: "2026-07-03T06:58:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Flowork Agent is a self-hosted, local-first operating system for AI agents that runs entirely offline on user hardware. It provides a frozen microkernel, WASM-sandboxed agents with self-improving memory, and a built-in security radar to guard against tampering and vulnerabilities.

## Key Features
- Frozen microkernel with immutable core and self-guarding Guardian for tamper detection
- Per-agent WASM sandboxing with isolated SQLite memory (FTS5-based brain)
- Built-in security radar with ~16K-check arsenal to scan code and targets
- Plug-and-play `.fwpack` modules for tools, channels, and agents with hot-loading
- MCP client and server support for seamless integration with external tools and clients

## Why It Matters for RAG Builders
Flowork Agent provides a secure, self-hosted foundation for AI agents with built-in memory, security, and offline capability, making it ideal for building trustworthy, long-term AI systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (wazero)
Automated review identified **WASM (wazero)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5)
Automated review identified **SQLite (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram/Discord/Slack/WhatsApp integrations
Automated review identified **Telegram/Discord/Slack/WhatsApp integrations** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STT/TTS (offline)
Automated review identified **STT/TTS (offline)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Security scanning tools
Automated review identified **Security scanning tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
