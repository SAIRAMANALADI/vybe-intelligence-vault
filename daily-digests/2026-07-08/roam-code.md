---
title: "Cranot/roam-code"
category: "Tooling"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "Git", "CLI", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["code intelligence", "AI agent safety", "local development", "change evidence", "dependency analysis"]
source: "https://github.com/Cranot/roam-code"
discovered_at: "2026-07-08T17:27:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
roam-code is a local codebase intelligence layer that enables AI coding agents to safely and transparently modify code by providing dependency-aware context, tamper-evident change evidence, and risk-gated editing. It operates entirely offline by default, with opt-in metrics collection.

## Key Features
- SQLite-backed code graph indexing 28 languages with symbols, calls, imports, and git history
- Tamper-evident ChangeEvidence packets with HMAC-chained run ledgers and signed attestations
- Dependency-aware preflight checks (blast radius, affected tests, complexity, coupling) before code edits
- MCP runtime security with policy gating (read_only, safe_edit, migration, autonomous_pr) and secret scrubbing
- Task compiler that pre-executes code-graph lookups to reduce agent turns, tokens, and costs by up to 83%

## Why It Matters for RAG Builders
It provides essential, dependency-aware context and safety gates for AI agents to modify code with verifiable evidence, reducing errors and costs while ensuring local, credential-free operation.

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
