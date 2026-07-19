---
title: cephalopod-ai/tagteam
category: daily-digests/2026-07-08
tech_stack:
- Go
- CLI
- Git
- Multi-agent orchestration
- Diff/patch handling
- Test execution
- Configuration management
quality_score: 8
rag_relevance: 9
tags:
- multi-agent orchestration
- headless agents
- code review automation
- AI-driven development
- transparent workflows
source: https://github.com/cephalopod-ai/tagteam
discovered_at: '2026-07-08T21:01:23Z'
evaluated_by: mistral-small-latest
---

## Summary
tagteam is a Go-based CLI tool that orchestrates headless coding agents (e.g., Claude, Codex, AGY) into multi-agent workflows like supervisor, relay, solo, and adversarial modes. It automates agent handoffs, captures run artifacts (briefs, diffs, reviews), and provides transparent, inspectable execution for AI-driven code generation and review.

## Key Features
- Multi-agent workflows (supervisor, relay, solo, adversarial modes) with explicit role separation
- Automated implement → diff → test → review loops with configurable round limits
- Persistent run artifacts (briefs, diffs, reviews, test results) for full transparency
- Cost-aware agent selection (e.g., cheap worker + strong reviewer) to optimize LLM spend
- Config layering (repo/user/env/flags) and dry-run support for debugging

## Why It Matters for RAG Builders
It streamlines multi-agent AI workflows into a single command, reducing manual handoffs and enabling cost-efficient, transparent code generation and review for RAG builders.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Multi-agent orchestration
Automated review identified **Multi-agent orchestration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Diff/patch handling
Automated review identified **Diff/patch handling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Test execution
Automated review identified **Test execution** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Configuration management
Automated review identified **Configuration management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
