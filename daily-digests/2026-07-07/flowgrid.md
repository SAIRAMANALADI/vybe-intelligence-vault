---
title: "dlxeva/FlowGrid"
category: "Orchestrator"
tech_stack: ["Python", "CLI", "Markdown", "JSON", "File-based state management"]
quality_score: 8
rag_relevance: 7
tags: ["project state management", "decision tracking", "local-first", "rationale preservation", "multi-agent continuity"]
source: "https://github.com/dlxeva/FlowGrid"
discovered_at: "2026-07-07T13:16:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FlowGrid is a local-first project-state context engine designed for rationale-heavy, non-coding business projects. It enables AI agents to preserve reviewed judgments, project state, and reasoning chains in local files, ensuring traceable and resumable project context across sessions.

## Key Features
- Local-first project state storage with durable markdown files
- Patch-first write strategy for reviewable changes before merging
- Two-layer state protocol (formal ledger + pending patches) for multi-agent relay
- Structured decision logs with rationale, alternatives, and reversal conditions
- Host-agnostic CLI for integration with any AI agent capable of file operations

## Why It Matters for RAG Builders
FlowGrid ensures AI agents can maintain traceable, resumable, and defensible project context across sessions, critical for rationale-heavy business projects where judgment chains must be preserved and revisited.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### File-based state management
Automated review identified **File-based state management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
