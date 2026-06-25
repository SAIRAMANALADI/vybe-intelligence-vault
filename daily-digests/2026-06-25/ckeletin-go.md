---
title: "peiman/ckeletin-go"
category: "Agent Framework"
tech_stack: ["Go", "Taskfile", "Viper", "Zerolog", "Bubble Tea", "GitHub Actions", "CodeQL", "ADRs (Architecture Decision Records)"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent framework", "CLI development", "Go framework", "production-ready scaffolding", "architectural enforcement"]
source: "https://github.com/peiman/ckeletin-go"
discovered_at: "2026-06-25T08:30:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ckeletin-go is an AI-first Go framework designed to enable AI agents to build production-ready CLIs correctly by enforcing machine-checkable architectural rules and patterns. It provides an updatable framework layer that improves over time while keeping user code untouched.

## Key Features
- AI agent-ready architecture with machine-checkable rules via AGENTS.md, CLAUDE.md, and hooks
- Updatable framework layer (.ckeletin/) that evolves independently of user code
- Ultra-thin command pattern with enforced ≤30-line run functions for maintainability
- ≥85% test coverage enforced by CI with automated architecture validation
- Centralized, type-safe configuration registry with precedence-based overrides

## Why It Matters for RAG Builders
It enables AI agents to consistently generate correct, production-grade Go CLIs by embedding machine-enforceable architectural rules and patterns, reducing drift and manual oversight in AI-assisted development.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Taskfile
Automated review identified **Taskfile** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Viper
Automated review identified **Viper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zerolog
Automated review identified **Zerolog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea
Automated review identified **Bubble Tea** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CodeQL
Automated review identified **CodeQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADRs (Architecture Decision Records)
Automated review identified **ADRs (Architecture Decision Records)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
