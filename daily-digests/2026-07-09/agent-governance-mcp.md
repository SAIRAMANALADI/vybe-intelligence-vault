---
title: Paul-hengChen/agent-governance-mcp
category: daily-digests/2026-07-09
tech_stack:
- JavaScript
- Node.js
- MCP (Model Context Protocol)
- Zod
- SQLite
- HTTP
- Docker
quality_score: 9
rag_relevance: 8
tags:
- AI governance
- multi-agent coordination
- state management
- rule enforcement
- MCP server
source: https://github.com/Paul-hengChen/agent-governance-mcp
discovered_at: '2026-07-09T17:17:56Z'
evaluated_by: mistral-small-latest
---

## Summary
An MCP server providing shared state and governance for multiple AI coding agents (e.g., Claude Code, Cursor) with server-side enforcement to prevent rule drift, lost updates, and iteration discipline failures. It enforces constitution, role-based workflows, and atomic state transitions via hard gates that AI cannot bypass.

## Key Features
- Server-side gates blocking AI rule violations (e.g., lost updates, format drift)
- Shared state and single source of truth for project rules across IDEs
- Role-based workflows with enforced transitions and round caps
- Atomic state transitions with file locking and mtime checks
- Constitution injection and role-specific SOPs for AI agents

## Why It Matters for RAG Builders
It provides critical server-side enforcement for AI governance, preventing rule drift and lost updates in multi-agent workflows, ensuring disciplined iteration and shared state consistency.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
