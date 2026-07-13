---
title: "doeixd/opencode-ralph-rlm"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "OpenCode SDK", "LLM APIs", "CLI Tools", "File-based Memory System"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous coding", "iterative agent loops", "file-first memory", "RLM", "OpenCode plugin"]
source: "https://github.com/doeixd/opencode-ralph-rlm"
discovered_at: "2026-06-24T16:18:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An OpenCode integration enabling long-running, autonomous coding workflows through iterative agent loops. It combines Ralph (fresh agent runs per attempt) and RLM (recursive, on-demand memory retrieval) to automate goal-driven development with user-defined verification criteria.

## Key Features
- Fresh agent runs per attempt with no context drift
- User-defined verification command as the sole 'done' criterion
- File-based protocol for durable, versionable memory (PLAN.md, NOTES_AND_LEARNINGS.md, etc.)
- Recursive Language Model (RLM) for on-demand memory retrieval via grep/slice
- Multi-plan support with named directories and active plan switching

## Why It Matters for RAG Builders
It enables fully autonomous, goal-driven coding workflows where agents iteratively self-correct based on user-defined tests, reducing manual oversight and improving reliability for long-running tasks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode SDK
Automated review identified **OpenCode SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs
Automated review identified **LLM APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### File-based Memory System
Automated review identified **File-based Memory System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
