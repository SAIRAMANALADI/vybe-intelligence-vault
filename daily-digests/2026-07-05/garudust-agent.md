---
title: "garudust-org/garudust-agent"
category: "Agent Framework"
tech_stack: ["Rust", "egui", "Leptos", "SQLite", "Tokio", "Serde", "MCP (Model Context Protocol)", "WebAssembly (WASM)", "Docker", "Telegram API", "Discord API", "Slack API", "Matrix API", "LINE API", "WhatsApp API"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent runtime", "self-hosted", "multi-platform", "LLM integration", "sandboxing"]
source: "https://github.com/garudust-org/garudust-agent"
discovered_at: "2026-07-05T06:36:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Garudust Agent is a self-improving, self-hostable AI agent runtime written in Rust, designed for minimal footprint (~10 MB) and zero runtime dependencies. It supports multi-platform messaging, 24+ LLM providers, parallel tool execution, and secure sandboxing, with both CLI and server modes.

## Key Features
- Minimal footprint (~10 MB binary) with zero runtime dependencies, supporting ARM and Raspberry Pi
- Supports 24+ LLM providers with automatic fallback key rotation and model routing via `--hint`
- Multi-platform messaging (Telegram, Discord, Slack, Matrix, LINE, WhatsApp, Webhook) with per-platform RBAC
- Self-improving agent with persistent memory, automatic skill generation, and cross-session goal tracking
- Secure sandboxing for tools (terminal, file I/O, browser automation) with approval modes and secret redaction

## Why It Matters for RAG Builders
Garudust Agent provides a lightweight, secure, and highly customizable framework for building production-grade AI agents with persistent memory and multi-platform integration, reducing complexity for RAG/AI stack builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### egui
Automated review identified **egui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Leptos
Automated review identified **Leptos** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Serde
Automated review identified **Serde** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly (WASM)
Automated review identified **WebAssembly (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Matrix API
Automated review identified **Matrix API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LINE API
Automated review identified **LINE API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhatsApp API
Automated review identified **WhatsApp API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
