---
title: "othmaratzmueller-bit/mcp-context-toolkit"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Pydantic", "PyYAML", "Markdown", "Git"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "context injection", "dynamic rules", "memory recall", "agent orchestration"]
source: "https://github.com/othmaratzmueller-bit/mcp-context-toolkit"
discovered_at: "2026-07-05T20:57:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that dynamically injects context into AI agents by serving file-scoped rules, architectural decisions, and frecency-ranked memory from markdown and YAML stores. It ensures only relevant context is loaded on demand, reducing noise and improving agent precision.

## Key Features
- File-scoped rules and decisions loaded via glob matching for precise context injection
- Frecency-ranked memory recall with hot/cold tracking for relevance prioritization
- Two-tier storage (project and user) with project-tier overrides for specificity
- Automatic reloading on file changes with mtime-based cache invalidation
- Dual-compatible hook system for seamless integration with MCP clients like Claude Code and Google Antigravity

## Why It Matters for RAG Builders
It enables AI agents to dynamically pull only the relevant context they need at any given moment, reducing noise and improving decision-making without manual prompt engineering.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
