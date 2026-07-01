---
title: "itsHabib/ship"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "pnpm", "Zod", "Pino (logging)", "@cursor/sdk"]
quality_score: 9
rag_relevance: 9
tags: ["workflow automation", "agent orchestration", "MCP server", "state machine", "async execution"]
source: "https://github.com/itsHabib/ship"
discovered_at: "2026-07-01T05:26:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ship is a dev-workflow MCP toolkit that enables async execution, persistence, and inspection of agent runs for coding tasks. It provides both single-run and multi-stream driver engines with durable state management, failure diagnosis, and MCP/CLI interfaces for seamless integration into AI-driven development workflows.

## Key Features
- Async kickoff for agent runs with durable persistence and queryable records
- Single-run and multi-stream driver engines with deterministic state machines
- MCP server with 9 tools and resource endpoints for programmatic control
- Failure diagnosis with canonical categories (e.g., timeout-near-cap, agent-collapse)
- CLI surface for terminal-friendly interaction and driver engine management

## Why It Matters for RAG Builders
Ship provides a critical layer for orchestrating and persisting agent runs in RAG/AI stacks, enabling async execution, failure diagnosis, and scalable multi-stream workflows with durable state management.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pino (logging)
Automated review identified **Pino (logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @cursor/sdk
Automated review identified **@cursor/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
