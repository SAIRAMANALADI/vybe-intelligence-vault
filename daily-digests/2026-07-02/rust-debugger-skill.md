---
title: "mohsen1/rust-debugger-skill"
category: "Tooling"
tech_stack: ["Rust", "rust-analyzer", "lldb-dap", "codelldb", "MCP (Model Context Protocol)", "Unix sockets", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["debugging", "Rust", "MCP server", "agent tooling", "interactive debugging"]
source: "https://github.com/mohsen1/rust-debugger-skill"
discovered_at: "2026-07-02T12:12:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
`rdbg` is a Rust debugger designed for coding agents, enabling interactive debugging with breakpoints, variable inspection, and live variable modification without manual `println!` logging. It functions as both a CLI tool and an MCP server for agents like Claude Code or Codex.

## Key Features
- Interactive debugging with breakpoints, step-through, and variable inspection in real Rust values (not raw pointers)
- CLI and MCP server modes for seamless integration with coding agents like Claude Code or Codex
- Live variable modification (`rdbg set`) and conditional execution to test fixes without recompiling
- Trace functionality to capture variable evolution across loops or function calls in a single command
- Daemon-based architecture for persistent debugging sessions with state preserved between commands

## Why It Matters for RAG Builders
It bridges the gap between code editing and runtime inspection for AI agents, enabling them to debug Rust programs interactively without manual logging or rebuild cycles.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rust-analyzer
Automated review identified **rust-analyzer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### lldb-dap
Automated review identified **lldb-dap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### codelldb
Automated review identified **codelldb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
