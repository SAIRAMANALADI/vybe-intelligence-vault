---
title: "Digital-Process-Tools/claude-remember"
category: "Tooling"
tech_stack: ["Python", "Bash", "Claude Code", "Haiku (Claude model)", "Git", "jq"]
quality_score: 9
rag_relevance: 7
tags: ["context persistence", "Claude Code plugin", "memory management", "agent continuity", "session hooks"]
source: "https://github.com/Digital-Process-Tools/claude-remember"
discovered_at: "2026-07-02T09:58:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-remember is a plugin for Claude Code that provides continuous memory across sessions by automatically saving, compressing, and loading agent context. It enables agents to retain institutional knowledge, team conventions, and prior work without manual prompting or copy-pasting.

## Key Features
- Automatic session memory capture and compression using Haiku model
- Layered memory storage (now.md, today-*.md, recent.md, archive.md) for efficient token usage
- Three lifecycle hooks (SessionStart, UserPromptSubmit, PostToolUse) for seamless integration
- Configurable storage modes (local, external, git backup) with security considerations
- Cost-effective summarization (< $0.01 per session) using Haiku model

## Why It Matters for RAG Builders
It enables AI agents to maintain continuity across sessions without manual intervention, reducing context loss and improving productivity in long-running workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Haiku (Claude model)
Automated review identified **Haiku (Claude model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jq
Automated review identified **jq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
