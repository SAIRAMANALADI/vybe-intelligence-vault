---
title: dbtlr/mimir
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Bun
- SQLite
- Kysely
- MCP (Model Context Protocol)
- REST API
- React (for UI console)
- Vite
quality_score: 8
rag_relevance: 7
tags:
- work state management
- task tracking
- SQLite
- MCP server
- CLI tool
source: https://github.com/dbtlr/mimir
discovered_at: '2026-06-23T13:47:45Z'
evaluated_by: mistral-small-latest
---

## Summary
Mimir is a work state management system designed as the source of truth for tasks, hierarchies, and artifacts, operating as a standalone SQLite-backed tool with CLI, MCP, HTTP API, and web console interfaces for human and agent interactions.

## Key Features
- Single SQLite-backed store for ephemeral work state with derived live rollups (no stored aggregations)
- Four unified interfaces: CLI, MCP server for agents, HTTP API, and embedded web console
- Agent integration via MCP with embedded skills and repo binding support
- Derived status logic (e.g., ready, blocked, stale) computed on-demand rather than stored
- Read-only operator console with PWA capabilities and offline support

## Why It Matters for RAG Builders
Mimir provides a structured, agent-friendly system for managing dynamic work state, enabling RAG builders to integrate task tracking and state derivation into AI workflows seamlessly.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kysely
Automated review identified **Kysely** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for UI console)
Automated review identified **React (for UI console)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
