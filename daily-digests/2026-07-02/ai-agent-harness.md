---
title: "dexmaddy/ai-agent-harness"
category: "Orchestrator"
tech_stack: ["Python", "YAML", "JSON", "Shell Scripting", "Git", "Hooks", "Validators"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent reliability", "context management", "session continuity", "rule enforcement", "anti-hallucination"]
source: "https://github.com/dexmaddy/ai-agent-harness"
discovered_at: "2026-07-02T19:16:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A hook-based framework designed to enforce reliability and structure in AI coding agent sessions by implementing structural gates, tiered context loading, drift detection, and session continuity. It prevents common issues like context waste, rule drift, and unverified completion through enforced hooks and persistent session state.

## Key Features
- Tiered context loading (Tier 1 and Tier 2) to minimize token waste and enforce relevance
- Structural gates that block tool usage until required context is loaded (e.g., PreToolUse, UserPromptSubmit)
- Drift detection and auto-healing for stale references or rules
- Session continuity with persistent backlog and handoff tracking
- Self-verification hooks to ensure work is completed and validated before session exit

## Why It Matters for RAG Builders
It provides a robust framework to enforce reliability and prevent common pitfalls in AI agent sessions, ensuring consistent and verifiable outcomes for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hooks
Automated review identified **Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Validators
Automated review identified **Validators** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
