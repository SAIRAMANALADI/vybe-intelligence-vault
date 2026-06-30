---
title: "repairman29/chump"
category: "Orchestrator"
tech_stack: ["Rust", "SQLite", "Ollama", "vLLM", "mistral.rs", "Axum", "Git", "GitHub API", "ACP (Agent Client Protocol)", "Tauri", "PWA (Progressive Web App)", "Discord Bot", "CLI", "Mermaid.js"]
quality_score: 9
rag_relevance: 9
tags: ["multi-agent coordination", "self-hosted AI", "local inference", "gap registry", "agent framework"]
source: "https://github.com/repairman29/chump"
discovered_at: "2026-06-29T23:59:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chump is a self-hosted multi-agent fleet coordinator and gap registry designed for AI coding agents. It enables concurrent agent sessions on the same repository without conflicts, supports local-first inference, and provides persistent memory with SQLite and optional brain components.

## Key Features
- File-based leases and SQLite gap registry for concurrent agent sessions without conflicts
- Built-in agent with 30+ governed tools, persistent memory, and local LLM support (Ollama, vLLM, mistral.rs)
- Linked worktrees and merge-queue ship pipeline for isolated, conflict-free PRs
- Supports any coding agent (Claude Code, opencode, Aider, etc.) via coordinator layer
- Multiple interfaces: web PWA, CLI, Discord bot, Tauri desktop, and ACP editor integration

## Why It Matters for RAG Builders
Chump provides a robust, self-hosted orchestration layer for AI coding agents, enabling scalable, conflict-free multi-agent workflows with persistent memory and local inference, critical for production-grade RAG and AI engineering stacks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vLLM
Automated review identified **vLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mistral.rs
Automated review identified **mistral.rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Client Protocol)
Automated review identified **ACP (Agent Client Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PWA (Progressive Web App)
Automated review identified **PWA (Progressive Web App)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord Bot
Automated review identified **Discord Bot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
