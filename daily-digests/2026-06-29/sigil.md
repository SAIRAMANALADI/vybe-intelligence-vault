---
title: "Anmol-Srv/sigil"
category: "Orchestrator"
tech_stack: ["Postgres", "pgvector", "MCP (Model Context Protocol)", "TypeScript/JavaScript", "Shell scripting", "Git", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["memory layer", "local-first", "MCP-native", "cross-agent", "Postgres-backed"]
source: "https://github.com/Anmol-Srv/sigil"
discovered_at: "2026-06-29T07:31:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sigil provides a local-first memory layer for AI agents, enabling shared context across tools like Claude Code, Codex CLI, Cursor, and Kiro. It stores memory in a user-controlled Postgres database and integrates via MCP or CLI, eliminating vendor lock-in and enabling cross-agent, cross-machine knowledge consistency.

## Key Features
- Universal memory layer for AI agents with zero vendor dependency
- Auto-capture of context from Claude Code via hooks (no manual input required)
- Hybrid retrieval (pgvector + BM25 + RRF) with ACT-R and Hebbian re-ranking for relevance
- Cross-machine synchronization via shared Postgres database
- Pluggable pod system for extensible memory types (sessions, projects, people, playbooks, vitals)

## Why It Matters for RAG Builders
Sigil eliminates fragmented agent memory by providing a shared, local-first brain that any agent can access, ensuring consistent context and reducing redundant explanations across tools and machines.

## Tech Stack Deep Dive
### Postgres
Automated review identified **Postgres** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript/JavaScript
Automated review identified **TypeScript/JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
