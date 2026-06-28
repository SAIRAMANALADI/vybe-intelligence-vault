---
title: "blak0p/git-courer"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Git", "Ollama", "YAML", "JSON"]
quality_score: 9
rag_relevance: 8
tags: ["Git automation", "MCP server", "AI agent integration", "commit safety", "worktree isolation"]
source: "https://github.com/blak0p/git-courer"
discovered_at: "2026-06-28T22:04:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
git-courer is an MCP server that provides AI agents with a safe, structured interface to Git operations, enabling isolated worktrees, automatic backups, and deterministic commit type classification without relying on Bash commands or exposing raw Git output.

## Key Features
- Isolated worktrees for each agent session to prevent conflicts
- Automatic backup before every mutation operation
- Deterministic commit type classification via Go AST analysis
- Structured JSON input/output for all Git operations
- Dual-mode execution (LLM-enabled or manual) for flexibility

## Why It Matters for RAG Builders
It provides a secure, structured, and agent-friendly way to integrate Git operations into AI workflows, reducing risks of unintended changes and enabling reliable automation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
