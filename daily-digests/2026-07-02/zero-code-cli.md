---
title: "gaoze1998/zero-code-cli"
category: "Agent Framework"
tech_stack: ["Rust", "Tokio", "DeepSeek API", "Ratatui", "Crossterm", "SSE (Server-Sent Events)", "JSON Schema", "TOML"]
quality_score: 9
rag_relevance: 8
tags: ["terminal agent", "safe Rust", "Plan/Build workflow", "ReAct loop", "DeepSeek"]
source: "https://github.com/gaoze1998/zero-code-cli"
discovered_at: "2026-07-02T15:11:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A terminal-based AI coding agent written in safe Rust that interacts with DeepSeek-compatible APIs to autonomously explore codebases, plan solutions, and generate code via a streaming TUI. It employs a Plan/Build dual-mode workflow and a ReAct loop for tool execution.

## Key Features
- Dual-mode Plan/Build workflow for separating design and implementation
- ReAct agent loop with up to 10 tool-call iterations per message
- Five built-in filesystem tools (read_file, write_file, bash, grep, ls) with JSON Schema definitions
- Streaming TUI with real-time token rendering using Ratatui
- Per-project session persistence with auto-save and session management

## Why It Matters for RAG Builders
It provides a lightweight, safe, and auditable framework for building autonomous AI coding agents that can plan, reason, and execute tools in a terminal environment, making it ideal for RAG stack builders seeking modular agentic workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek API
Automated review identified **DeepSeek API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ratatui
Automated review identified **Ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crossterm
Automated review identified **Crossterm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
