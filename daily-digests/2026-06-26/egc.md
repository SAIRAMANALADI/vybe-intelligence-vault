---
title: "Fmarzochi/EGC"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "Markdown", "Docker (implied for deployment)", "JavaScript"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "AI agent synchronization", "session continuity", "MCP runtime", "context management"]
source: "https://github.com/Fmarzochi/EGC"
discovered_at: "2026-06-26T22:14:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
EGC (Extended Global Context) is a local runtime that provides persistent memory for AI coding tools, enabling seamless continuation of work across sessions without manual prompts. It synchronizes state, decisions, and context across multiple AI agents and tools like Claude Code, Cursor, and Gemini CLI.

## Key Features
- Automatic state persistence and loading across AI sessions without manual input
- Two integrated MCP servers (egc-memory and egc-guardian) for memory and safety checks
- Real-time synchronization of context across multiple AI tools (Claude, Cursor, etc.)
- Human-readable Markdown state files for easy inspection and editing
- Built-in dashboard for monitoring AI agent activity, token usage, and costs

## Why It Matters for RAG Builders
EGC eliminates the need for AI agents to start from scratch in each session, drastically improving productivity and continuity for RAG and AI stack builders by maintaining persistent, synchronized context.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied for deployment)
Automated review identified **Docker (implied for deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
