---
title: "sriinnu/takumi"
category: "Agent Framework"
tech_stack: ["Rust", "ratatui", "WebAssembly (Wasm)", "JSON-RPC", "Unix sockets", "MCP (Model Context Protocol)", "TypeScript (parked legacy code)"]
quality_score: 9
rag_relevance: 7
tags: ["terminal agent", "coding assistant", "MCP integration", "plugin system", "Chitragupta client"]
source: "https://github.com/sriinnu/takumi"
discovered_at: "2026-06-23T23:05:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Takumi is a terminal-native AI coding agent written in Rust, acting as a client for the Chitragupta kernel. It provides a full-screen TUI for interacting with an agent loop, built-in tools, MCP server integration, and a WebAssembly plugin system for extensibility.

## Key Features
- Full-screen terminal UI with streaming agent loop and live phase-aware thinking indicator
- Built-in tools (bash, read, edit, write) scoped to the workspace with deny-by-default capability model
- MCP server integration for extensibility without blocking first paint
- WebAssembly plugin system with Sanskrit-named capability tokens and sandboxed execution
- Daemon-only architecture requiring Chitragupta kernel for routing, memory, and credentials

## Why It Matters for RAG Builders
Takumi provides a terminal-native, daemon-backed agent framework that integrates seamlessly with the Chitragupta kernel, enabling secure, extensible, and memory-aware AI coding assistance with a focus on capability-gated plugins and MCP server support.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly (Wasm)
Automated review identified **WebAssembly (Wasm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (parked legacy code)
Automated review identified **TypeScript (parked legacy code)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
