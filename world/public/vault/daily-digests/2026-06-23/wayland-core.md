---
title: "FerroxLabs/wayland-core"
category: "Agent Framework"
tech_stack: ["Rust", "LLM Providers (Anthropic, OpenAI, Google, AWS, etc.)", "MCP (Model Context Protocol)", "Bubblewrap/sandbox-exec/AppContainer", "npm", "Git", "TOML (config)", "RON (workflow definitions)"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "multi-provider", "MCP-native", "sandboxing", "swarm orchestration"]
source: "https://github.com/FerroxLabs/wayland-core"
discovered_at: "2026-06-23T08:54:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Wayland Core is a terminal-first, embeddable Rust engine for autonomous LLM agents that supports multi-provider model routing, MCP-native tooling, and parallel agent swarms with OS-native sandboxing. It operates as a standalone engine, a TUI, or a headless service for integration into custom applications.

## Key Features
- Multi-provider LLM support with live model discovery and failover routing
- OS-native sandboxing for secure tool execution (bubblewrap, sandbox-exec, AppContainer)
- Parallel agent swarms with declarative workflows (ForgeFlows) and reducers (consensus, debate)
- MCP-native bidirectional protocol for tool and server integration
- Terminal-first TUI, one-shot CLI, and embeddable headless engine with JSON-Lines protocol

## Why It Matters for RAG Builders
Wayland Core provides a robust, secure, and provider-agnostic foundation for building scalable autonomous LLM agents with built-in orchestration and sandboxing, critical for production-grade RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (Anthropic, OpenAI, Google, AWS, etc.)
Automated review identified **LLM Providers (Anthropic, OpenAI, Google, AWS, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap/sandbox-exec/AppContainer
Automated review identified **Bubblewrap/sandbox-exec/AppContainer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RON (workflow definitions)
Automated review identified **RON (workflow definitions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
