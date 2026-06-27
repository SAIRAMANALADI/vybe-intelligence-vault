---
title: "ipsupport-llc/ipsupport-code"
category: "Agent Framework"
tech_stack: ["Go", "LM Studio", "OpenAI-compatible API", "Bubble Tea (TUI framework)", "JSON (configuration and data storage)", "Shell scripting (installation and updates)"]
quality_score: 9
rag_relevance: 7
tags: ["local AI agent", "self-learning", "tool-calling", "TUI interface", "LM Studio integration"]
source: "https://github.com/ipsupport-llc/ipsupport-code"
discovered_at: "2026-06-27T20:57:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-learning local coding agent designed for LM Studio, enabling interactive and automated task execution via a reason-act-observe loop. It features a Claude-Code-style TUI, tool-based interactions, and continuous improvement through reflection and lesson storage.

## Key Features
- Interactive TUI with plan/auto modes for task execution
- Self-learning mechanism that stores lessons from past runs to improve future performance
- Native tool-calling support for file, run, git, web, and calc operations
- Permission-controlled actions with a deny floor for critical operations
- Project-specific and global configuration with skills and context management

## Why It Matters for RAG Builders
It provides a lightweight, local-first alternative for AI-driven coding tasks with built-in self-improvement, making it ideal for developers who prioritize privacy and control over their workflow.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea (TUI framework)
Automated review identified **Bubble Tea (TUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (configuration and data storage)
Automated review identified **JSON (configuration and data storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting (installation and updates)
Automated review identified **Shell scripting (installation and updates)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
