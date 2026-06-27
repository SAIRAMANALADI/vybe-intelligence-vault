---
title: "AVIDS2/memorix"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "SQLite", "Orama (search engine)", "MCP (Model Context Protocol)", "CLI", "HTTP Service", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["project memory", "MCP integration", "agent orchestration", "local-first", "cross-agent compatibility"]
source: "https://github.com/AVIDS2/memorix"
discovered_at: "2026-06-27T13:24:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Memorix is a local-first shared memory layer designed to provide AI coding agents with persistent, searchable project memory that survives across sessions, IDE switches, and agent handoffs. It integrates seamlessly with popular coding agents like Claude Code, Cursor, and GitHub Copilot via MCP, plugins, or hooks.

## Key Features
- Shared project memory layer for AI coding agents that persists across sessions and IDEs
- Supports integration with 15+ AI agents via MCP, plugins, hooks, or skills
- Git Memory feature converts commits into searchable engineering facts
- Reasoning Memory stores architectural decisions, trade-offs, and alternatives
- Orchestration tools for coordinating agent tasks, handoffs, and parallel work

## Why It Matters for RAG Builders
Memorix eliminates the need for AI agents to repeatedly re-explain project context by providing a persistent, shared memory layer that enhances RAG systems with project-specific knowledge and reasoning traces.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Orama (search engine)
Automated review identified **Orama (search engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Service
Automated review identified **HTTP Service** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
