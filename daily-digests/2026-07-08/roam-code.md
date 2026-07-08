---
title: "Cranot/roam-code"
category: "Tooling"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "Git", "CLI", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["code intelligence", "local RAG", "agent safety", "preflight analysis", "evidence-based changes"]
source: "https://github.com/Cranot/roam-code"
discovered_at: "2026-07-08T12:25:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
roam-code is a local codebase intelligence layer for AI coding agents that provides dependency-aware, tamper-evident evidence for code changes. It indexes repositories into a SQLite-backed graph, offers preflight risk assessments, and compiles agent prompts with local facts to reduce token usage and cost.

## Key Features
- SQLite-backed code graph indexing 28 languages with symbols, calls, imports, and git history
- Preflight risk assessment for symbols before editing (blast radius, affected tests, complexity, coupling)
- Tamper-evident ChangeEvidence packets with HMAC-chained run ledgers and signed attestations
- MCP server integration for AI coding agents (Claude Code, Cursor, Continue) with compile-before prompts
- Dependency-aware queries replacing 5-10 tool calls with sub-0.5s responses and 80% token reduction

## Why It Matters for RAG Builders
It provides local, dependency-aware code intelligence and tamper-evident evidence for AI agents, reducing token waste and enabling safer, more efficient code changes in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
