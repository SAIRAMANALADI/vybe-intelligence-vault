---
title: "alejandroSuch/thresh"
category: "Tooling"
tech_stack: ["Go", "Jira API", "Bubble Tea (TUI)", "Claude Code MCP", "LLM integration (Anthropic/OpenAI)"]
quality_score: 9
rag_relevance: 7
tags: ["Jira integration", "backlog management", "impact ranking", "TUI", "MCP server"]
source: "https://github.com/alejandroSuch/thresh"
discovered_at: "2026-06-26T10:22:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
thresh is a Jira backlog discovery tool that surfaces pending, actionable issues ranked by impact, supporting CLI, TUI, and MCP server modes. It provides deterministic and LLM-based ranking, dependency analysis, and direct Jira interactions via API tokens.

## Key Features
- Discover and rank pending Jira issues by impact (deterministic or LLM-based)
- Supports issue keys, project keys, or custom JQL queries for scoping
- Interactive TUI for navigating and acting on issues (assign, transition, comment)
- MCP server for integration with Claude Code for AI-driven workflows
- Configurable via env vars, config files, or interactive setup

## Why It Matters for RAG Builders
It streamlines Jira backlog prioritization by surfacing actionable issues ranked by impact, reducing manual effort in project management and enabling AI-driven workflows via MCP integration.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jira API
Automated review identified **Jira API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea (TUI)
Automated review identified **Bubble Tea (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code MCP
Automated review identified **Claude Code MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM integration (Anthropic/OpenAI)
Automated review identified **LLM integration (Anthropic/OpenAI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
