---
title: mtrdesign/whygraph
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- Python
- MCP (Model Context Protocol)
- Git
- GitHub API
- Docker
- FastAPI
- SQLite/PostgreSQL
- LLM Integration
quality_score: 8
rag_relevance: 9
tags:
- code rationale
- git history analysis
- MCP server
- AI editor integration
- developer tooling
source: https://github.com/mtrdesign/whygraph
discovered_at: '2026-07-09T14:45:07Z'
evaluated_by: mistral-small-latest
---

## Summary
Whygraph provides a rationale layer over CodeGraph by collecting and synthesizing evidence from git history, GitHub, and code context to explain the purpose, constraints, and tradeoffs behind code. It serves this information to AI editors via MCP and generates on-demand rationale cards with persistent caching.

## Key Features
- Collects evidence from git history, PRs, issues, and blame to explain code purpose
- Serves rationale via MCP to AI editors like Claude Code
- Generates on-demand rationale cards with constraints, tradeoffs, and risks
- Persistent caching for efficient retrieval
- Supports Docker-based deployment for ease of setup

## Why It Matters for RAG Builders
Whygraph bridges the gap between code and context for AI agents, enabling them to understand the 'why' behind code changes, which is critical for accurate and informed RAG-based code analysis and editing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite/PostgreSQL
Automated review identified **SQLite/PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration
Automated review identified **LLM Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
