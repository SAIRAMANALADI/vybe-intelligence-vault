---
title: "a2cr/a2cr"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "FastAPI", "PyPI", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent handoff", "context management", "MCP server", "work state preservation", "local workspace"]
source: "https://github.com/a2cr/a2cr"
discovered_at: "2026-06-25T07:28:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A2CR is a local MCP workspace designed to facilitate AI agent handoffs by enabling agents like Codex, Claude Code, and Roo Code to save compact WorkBaton checkpoints, store temporary WorkStash notes, and resume long coding tasks from a fresh AI window without losing critical context.

## Key Features
- Compact WorkBaton checkpoints for resuming AI coding tasks with minimal context loss
- Temporary WorkStash notes for supporting context referenced by WorkBaton
- Local SQLite storage for WorkBaton, WorkStash, and WorkThread records
- MCP-compatible tools for saving, resuming, and managing work state
- Browser-based dashboard for visualizing and managing A2CR workspace

## Why It Matters for RAG Builders
A2CR solves the critical problem of context loss during AI agent handoffs by providing a lightweight, local mechanism to preserve and resume work state, making long-running AI coding tasks more reliable and efficient.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
