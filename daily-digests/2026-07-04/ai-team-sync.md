---
title: "pvestal/ai-team-sync"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "PostgreSQL", "VS Code Extension", "CLI", "MCP (Model Context Protocol)", "FastAPI", "React (for dashboard)", "Git Hooks"]
quality_score: 9
rag_relevance: 7
tags: ["multi-agent coordination", "conflict prevention", "session management", "file locking", "AI agent tooling"]
source: "https://github.com/pvestal/ai-team-sync"
discovered_at: "2026-07-04T17:04:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ai-team-sync is a coordination tool designed to prevent conflicts between AI agents (and humans) working on the same codebase. It provides real-time visibility into active sessions, file scope locks, and logged decisions through a VS Code extension, browser dashboard, CLI, and MCP server for Claude Code.

## Key Features
- Declared sessions with file scope locks (advisory or exclusive) to prevent conflicts
- Real-time visibility via VS Code extension, browser dashboard, CLI, and MCP server
- Logged decisions for persistent context beyond chat sessions
- Git hooks and agent hooks for automated coordination
- Support for multiple AI agents (Claude Code, Cursor, Codex) and humans

## Why It Matters for RAG Builders
It ensures seamless collaboration between AI agents by preventing file conflicts and providing shared context, reducing wasted effort and improving productivity in multi-agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension
Automated review identified **VS Code Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for dashboard)
Automated review identified **React (for dashboard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
