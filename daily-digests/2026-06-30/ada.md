---
title: "black141312/ada"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "OpenAI API", "Anthropic API", "React", "node-pty", "MCP (Model Context Protocol)", "tsx", "Express.js"]
quality_score: 9
rag_relevance: 8
tags: ["coding agent", "multi-provider routing", "terminal UI", "skills system", "MCP connectors"]
source: "https://github.com/black141312/ada"
discovered_at: "2026-06-30T16:21:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ada is a terminal-based coding agent that acts as a universal client for multiple LLM providers through a single OpenAI-compatible interface. It includes a backend router that normalizes responses from various providers and a lightweight client with agentic capabilities, skills, and MCP connectors.

## Key Features
- Unified backend routing for 11+ LLM providers with zero-code model addition
- Agentic loop with tools (read/write/edit files, bash, web search, LSP diagnostics) and auto-format on edit
- Permission modes (/ask, /plan, /auto) and real PTY shell for TTY compatibility
- ~285 built-in skills with relevance-based auto-application and MCP connector support
- Sessions, checkpoint/undo, worktrees, snapshots, and GitHub/Google OAuth login

## Why It Matters for RAG Builders
ada simplifies multi-provider LLM integration for RAG builders by providing a single OpenAI-compatible interface with built-in agentic capabilities, skills, and MCP connectors, reducing complexity in orchestrating diverse AI models.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### node-pty
Automated review identified **node-pty** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tsx
Automated review identified **tsx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express.js
Automated review identified **Express.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
