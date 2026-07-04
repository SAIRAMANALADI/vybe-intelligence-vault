---
title: "kitepon-rgb/aiterm-mcp"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "tmux", "MCP (Model Context Protocol)", "PTY (Pseudo Terminal)", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "persistent terminal", "tmux integration", "AI-driven shell", "token reduction"]
source: "https://github.com/kitepon-rgb/aiterm-mcp"
discovered_at: "2026-07-04T09:19:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aiterm-mcp provides an AI-driven persistent terminal as a stdio MCP server, backed by tmux, enabling AI clients to interact with a single long-lived shell session. This eliminates repeated authentication and connection overhead for commands like SSH, Docker exec, or REPLs.

## Key Features
- Single persistent PTY session managed via tmux, surviving restarts of the MCP server or AI client
- Six MCP tools (pty_open, pty_send, pty_read, pty_key, pty_close, pty_list) for terminal interaction
- Token-reduced output reads with per-command reducers (e.g., git log, grep) to minimize context length
- Nested session support (SSH, Docker, REPLs) via text commands sent to the same persistent terminal
- Completion detection with four-layer logic (exit code, regex match, quiescence, timeout) for reliable command termination

## Why It Matters for RAG Builders
It enables AI clients to interact with persistent, authenticated shells without repeated reconnections, reducing token overhead and improving reliability for RAG and agent-based systems.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PTY (Pseudo Terminal)
Automated review identified **PTY (Pseudo Terminal)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
