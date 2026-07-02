---
title: "ArthurDEV44/pyxis"
category: "Agent Framework"
tech_stack: ["Rust", "Ratatui", "Landlock (Linux sandboxing)", "Secret Service API (keyring)", "SSE (Server-Sent Events)", "OAuth PKCE", "Model Context Protocol (MCP)", "JSONL (session persistence)"]
quality_score: 8
rag_relevance: 9
tags: ["terminal agent", "model-agnostic", "sandboxed execution", "headless core", "GPU embedding"]
source: "https://github.com/ArthurDEV44/pyxis"
discovered_at: "2026-07-02T21:01:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pyxis is a native, model-agnostic AI coding agent designed to run directly in the terminal. It features a headless core that emits structured events, supports real tools (read, grep, edit, bash), and is built to be embedded in GPU-accelerated terminal workspaces like Paneflow.

## Key Features
- Native Rust binary with no Node runtime dependency
- Headless core emitting structured events for embedding in other UIs
- Built-in tool suite (read, grep, edit, bash) with fail-closed permissions
- Landlock-based filesystem sandboxing and network proxy for security
- Persistent JSONL sessions with resume and MCP integration

## Why It Matters for RAG Builders
Pyxis provides a model-agnostic, headless agent core that can be embedded in GPU-accelerated terminal workspaces, enabling secure, sandboxed AI coding agents with structured event-driven architectures.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ratatui
Automated review identified **Ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock (Linux sandboxing)
Automated review identified **Landlock (Linux sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Secret Service API (keyring)
Automated review identified **Secret Service API (keyring)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth PKCE
Automated review identified **OAuth PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL (session persistence)
Automated review identified **JSONL (session persistence)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
