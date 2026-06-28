---
title: "bks-lab/open-bridge"
category: "Tooling"
tech_stack: ["Markdown", "YAML", "Git", "Python", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["AI memory", "persistent context", "agent workflow", "git-based knowledge", "self-hosted"]
source: "https://github.com/bks-lab/open-bridge"
discovered_at: "2026-06-28T06:59:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
open-bridge is a plain git repository of markdown and YAML files designed to provide persistent context for AI coding agents across sessions. It enables agents to remember repositories, clients, workflows, and decisions without relying on external databases or SaaS, ensuring vendor-neutral, inspectable memory.

## Key Features
- Plain-text memory substrate (markdown + YAML) stored in a git repo, readable by any AI agent runtime
- Context Booster: Independent layer of structured context (identity, repos, clients, workflows) for agents to avoid re-explaining context
- Chaos Tamer: Task-management system with board, log, and per-task status files to organize and archive work
- CORE/USER split: Shared templates and skills update independently from private user configurations
- Workspace separation: Per-client/engagement workspaces to prevent context bleeding between engagements

## Why It Matters for RAG Builders
It provides a vendor-neutral, persistent memory layer for AI agents using plain text files in git, eliminating the need for external databases or SaaS while enabling structured, inspectable context across sessions.

## Tech Stack Deep Dive
### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
