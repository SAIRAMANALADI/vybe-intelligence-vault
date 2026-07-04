---
title: "bhargavamin/contexer"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "JSON", "CLI", "Git", "uv (Python package manager)"]
quality_score: 9
rag_relevance: 8
tags: ["AI memory", "engineering decisions", "coding agents", "knowledge capture", "cross-session context"]
source: "https://github.com/bhargavamin/contexer"
discovered_at: "2026-07-04T15:06:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Contexer is an engineering decision layer for AI coding agents that captures, stores, and replays architecture decisions, constraints, conventions, and patterns across sessions and tools like Claude Code, Cursor, Codex, and Gemini CLI. It eliminates the need to re-explain engineering knowledge in every AI session.

## Key Features
- Captures architecture decisions, constraints, conventions, and patterns in real-time during AI coding sessions
- Replays relevant engineering knowledge automatically at the start of new AI sessions
- Works across multiple AI coding tools (Claude Code, Cursor, Codex, Gemini CLI) without vendor lock-in
- Uses deterministic hooks and natural language directives for decision storage
- Provides versioned, human-approved decision history with optional governance

## Why It Matters for RAG Builders
Contexer ensures AI coding agents retain and apply engineering knowledge consistently across sessions, reducing rework and improving code quality without manual documentation overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
