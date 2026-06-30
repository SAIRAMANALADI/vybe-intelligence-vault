---
title: "qkal/techne"
category: "Tooling"
tech_stack: ["Python 3.12+", "MCP (Model Context Protocol)", "ruff", "pyright", "uv", "Pyright LSP"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "code validation", "shadow workspace", "ruff", "pyright"]
source: "https://github.com/qkal/techne"
discovered_at: "2026-06-30T21:04:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Quality MCP is a Python 3.12+ MCP server designed to validate proposed file changes in temporary shadow workspaces without modifying the real repository. It runs a quality toolchain (ruff, pyright) on isolated copies of the workspace and returns structured diagnostics for agents.

## Key Features
- Validates patches in isolated shadow workspaces without modifying the real repository
- Supports unified diff-based patch validation with strict security constraints
- Integrates ruff and pyright for static analysis and type checking
- Provides structured diagnostics and risk assessments for agents
- Enforces read-only security model with path normalization and allowlist-based subprocess execution

## Why It Matters for RAG Builders
It enables safe, agent-driven code validation in RAG pipelines by preventing real workspace modifications while providing structured diagnostics for quality control.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyright
Automated review identified **pyright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pyright LSP
Automated review identified **Pyright LSP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
