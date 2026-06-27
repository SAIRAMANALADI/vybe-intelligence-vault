---
title: "kerbelp/metatron"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "Model Context Protocol (MCP)", "Git", "Anthropic API", "Docker", "React (UI)", "TOML (config)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "codebase conventions", "agent tooling", "self-hosted", "decision tracking"]
source: "https://github.com/kerbelp/metatron"
discovered_at: "2026-06-27T07:23:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Metatron is a self-hosted system that captures a codebase's implementation decisions, conventions, and edge cases as structured records, serving them to coding agents via MCP. It bridges the gap between raw code and contextual understanding, enabling agents to write code aligned with team-specific patterns.

## Key Features
- Structured decision records with human-in-the-loop curation (pattern, scope, rationale, confidence, source_refs)
- Integration with MCP for real-time agent access to codebase conventions
- Open Knowledge Format (OKF) export for portable, git-tracked decision bundles
- Feedback loop for refining decisions based on agent interactions
- Multi-mode operation: MCP server, CLI tool, or files-first workflow

## Why It Matters for RAG Builders
Metatron enables AI agents to write code aligned with a team's specific conventions and historical decisions, reducing context loss and improving code quality in RAG-based workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (UI)
Automated review identified **React (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
