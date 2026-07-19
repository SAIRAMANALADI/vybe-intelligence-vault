---
title: brownie-labs/brownie
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- TypeScript
- Node.js
- Claude Code
- SQLite
- FTS5
- Ink (TUI framework)
- React
- MCP (Model Context Protocol)
- NDJSON
quality_score: 9
rag_relevance: 7
tags:
- autonomous agents
- task automation
- long-term memory
- Claude Code
- TUI
source: https://github.com/brownie-labs/brownie
discovered_at: '2026-07-09T19:29:55Z'
evaluated_by: mistral-small-latest
---

## Summary
Brownie is a CLI tool that autonomously manages two-agent Claude Code sessions to monitor tasks and execute them while you're away, using long-term memory stored in SQLite with FTS5. It operates in a monitor-executor-summarizer loop with a TUI for interaction.

## Key Features
- Two-agent architecture (monitor, executor, summarizer) with parallel loops communicating via a shared task store
- Long-term memory using SQLite + FTS5 for searchable session history and context retention
- Interactive TUI with real-time agent status, slash commands, and configuration management
- Working hours and usage-limit awareness to optimize token usage and avoid overruns
- Headless mode for server deployments with structured logging and control over a local socket

## Why It Matters for RAG Builders
It enables fully autonomous AI-driven task execution and monitoring, reducing manual oversight while leveraging long-term memory for continuous improvement in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ink (TUI framework)
Automated review identified **Ink (TUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON
Automated review identified **NDJSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
