---
title: "juandarn/rawcode"
category: "Tooling"
tech_stack: ["Shell", "Bash", "PowerShell", "Claude Code Plugin System", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
tags: ["Claude Code", "AI Coding Assistant", "System Prompt Optimization", "Code Generation", "Developer Tooling"]
source: "https://github.com/juandarn/rawcode"
discovered_at: "2026-07-01T00:05:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
rawcode is a Claude Code plugin that injects a system prompt into every session to optimize code generation behavior, enforcing best practices like reading before writing, concise outputs, and security checks without requiring manual invocation or agent selection.

## Key Features
- Automatically injects a system prompt into every Claude Code session for optimized behavior
- Enforces guardrails like reading existing code before modifications and protecting sensitive files
- Reduces output token count by ~35% with no measurable impact on correctness (validated via HumanEval benchmark)
- Provides real-time statusline with context percentage, cost tracking, and git branch info
- Cross-platform installation (Mac/Linux/Windows) with one-line scripts and manual setup options

## Why It Matters for RAG Builders
It standardizes and optimizes Claude Code's behavior for AI-driven development workflows, reducing verbosity and enforcing best practices without manual intervention.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Plugin System
Automated review identified **Claude Code Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
