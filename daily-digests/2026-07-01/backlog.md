---
title: "mazen160/backlog"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "CLI", "MCP (Model Context Protocol)", "HTML/CSS", "JavaScript", "Markdown"]
quality_score: 9
rag_relevance: 8
tags: ["task management", "AI agent memory", "local-first", "attribution tracking", "agentic loop"]
source: "https://github.com/mazen160/backlog"
discovered_at: "2026-07-01T17:55:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Backlog is a local-first task and context manager designed to enable AI coding agents to maintain state and memory across sessions. It provides a centralized SQLite database for tasks, plans, docs, and memory, shared by humans and AI agents with full attribution tracking.

## Key Features
- Centralized SQLite database for tasks, plans, docs, and memory shared by humans and AI agents
- Full actor attribution for every write (human or AI) with audit trails
- Agentic loop workflow: pick → plan → ship → review → attribute for parallel agent sessions
- Integration with AI coding agents via CLI, MCP, or pre-built skills for tools like Claude Code
- Versioned plans and docs with immutable history and full-text search

## Why It Matters for RAG Builders
Backlog eliminates the problem of AI agents losing state between sessions by providing a persistent, shared memory layer that enables parallel, attributed, and cost-efficient agentic workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS
Automated review identified **HTML/CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
