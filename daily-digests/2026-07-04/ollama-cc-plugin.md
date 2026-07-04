---
title: "xoonjaeho/ollama-cc-plugin"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "Claude Code", "Git", "Shell"]
quality_score: 8
rag_relevance: 7
tags: ["Claude Code", "Ollama integration", "Agentic workflows", "Code review", "Local LLM"]
source: "https://github.com/xoonjaeho/ollama-cc-plugin"
discovered_at: "2026-07-04T06:46:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides a plugin for Claude Code that integrates local or cloud Ollama models as a secondary engine, enabling read-only consults, code reviews, and agentic tasks like isolated file edits or full Claude Code sessions. It supports both stateless queries and tool-based agentic workflows with safety controls.

## Key Features
- Seamless integration of Ollama models into Claude Code as a secondary engine
- Two-tiered interaction: read-only consult/review and agentic rescue with isolated git worktree
- Safety controls for agentic tasks (diff review, shell access opt-in, cloud egress disclosures)
- Support for both local and cloud Ollama models with configurable defaults
- Self-contained Python scripts with unit tests for companion and agent tiers

## Why It Matters for RAG Builders
It enables AI engineers to leverage local or cloud Ollama models directly within Claude Code for enhanced code review, consults, and agentic tasks while maintaining safety through isolated worktrees and diff reviews.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
