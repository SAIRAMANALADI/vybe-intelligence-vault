---
title: "marktoda/zj-radar"
category: "UI Component"
tech_stack: ["Rust", "Zellij", "WebAssembly (WASM)", "Claude Code", "Codex", "CLI", "JSON", "KDL (configuration)"]
quality_score: 9
rag_relevance: 7
tags: ["Zellij plugin", "AI agent monitoring", "sidebar UI", "push-driven updates", "real-time status"]
source: "https://github.com/marktoda/zj-radar"
discovered_at: "2026-06-30T13:08:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
zj-radar is a Zellij plugin that provides a live sidebar for monitoring AI-agent status across all tabs in a Zellij session, including working, waiting, done, or error states, without requiring new terminals or wrappers.

## Key Features
- Live sidebar showing AI-agent status (working, waiting, done, error) per tab
- Click-to-jump navigation to tabs needing attention
- Push-driven updates via Zellij pipes (no polling or blocking)
- Supports Claude Code, Codex, and custom producers via JSON payloads
- Runtime configuration and keybindings for dynamic adjustments

## Why It Matters for RAG Builders
It provides real-time visibility into AI-agent states within existing Zellij workflows, eliminating the need for separate monitoring tools or wrappers while improving developer productivity.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zellij
Automated review identified **Zellij** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly (WASM)
Automated review identified **WebAssembly (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KDL (configuration)
Automated review identified **KDL (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
