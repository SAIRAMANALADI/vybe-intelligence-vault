---
title: "freshdigital-it/claude-execution-harness"
category: "Orchestrator"
tech_stack: ["Shell", "Claude Code", "JSON", "Git Hooks", "Subagents", "Adversarial Verification"]
quality_score: 9
rag_relevance: 8
tags: ["autopilot", "task automation", "self-healing", "trajectory tracking", "Claude Code"]
source: "https://github.com/freshdigital-it/claude-execution-harness"
discovered_at: "2026-07-09T17:17:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code autopilot harness that automates task execution with self-healing memory, trajectory tracking, and enforcement hooks to eliminate mid-run interruptions and ensure deterministic, reviewable outcomes.

## Key Features
- Eliminates mid-run interruptions by deferring security reviews and verifications to a single end-of-run ledger
- Enforces deterministic task resumption via `plan.dag.json` and cross-run memory (`agentdb`)
- Implements 300-LOC file size hooks and stop-hook enforcement to ensure task completion before session exit
- Learned routing via `frontier.json` to optimize model selection and task classification based on historical pass/fail rates
- Isolated local preview environments with throwaway databases to prevent run collisions

## Why It Matters for RAG Builders
It streamlines AI agent workflows by automating task execution, enforcing completion, and preserving context across runs, reducing manual oversight and improving reliability for RAG builders.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subagents
Automated review identified **Subagents** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Adversarial Verification
Automated review identified **Adversarial Verification** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
