---
title: "arthjean/pyxis"
category: "Agent Framework"
tech_stack: ["Rust", "Ratatui", "Landlock (Linux sandboxing)", "Secret Service API (credential storage)", "OpenAI Codex API (ChatGPT subscription)", "SSE (Server-Sent Events)", "JSONL (session persistence)", "MCP (Model Context Protocol)"]
quality_score: 8
rag_relevance: 9
tags: ["AI coding agent", "terminal-based", "model-agnostic", "sandboxed execution", "multi-provider architecture"]
source: "https://github.com/arthjean/pyxis"
discovered_at: "2026-07-04T15:03:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pyxis is a native, model-agnostic AI coding agent designed to run directly in the terminal. It features a headless core that emits structured events, supports real tools (read, grep, edit, bash), and is built for multi-provider extensibility with a focus on embedding in GPU-accelerated terminal workspaces like Paneflow.

## Key Features
- Headless core emitting structured events for embedding in other UIs or tools
- Real tools (read, grep, edit, bash) with fail-closed permissions and taint tracking
- Linux filesystem sandboxing via Landlock and network proxy for controlled outbound traffic
- Persistent JSONL sessions with resume capability and goal-based completion loops
- Multi-provider architecture with a clean Provider trait for easy adapter integration

## Why It Matters for RAG Builders
Pyxis provides a model-agnostic, headless agent core that can be embedded in GPU-accelerated terminal workspaces or other AI tools, enabling seamless integration of real tools and sandboxed execution for reliable RAG and AI stack builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ratatui
Automated review identified **Ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock (Linux sandboxing)
Automated review identified **Landlock (Linux sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Secret Service API (credential storage)
Automated review identified **Secret Service API (credential storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex API (ChatGPT subscription)
Automated review identified **OpenAI Codex API (ChatGPT subscription)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL (session persistence)
Automated review identified **JSONL (session persistence)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
