---
title: "Idanref/memotrust"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Git", "Markdown", "JSONL", "MCP (Model Context Protocol)", "CLI tools"]
quality_score: 9
rag_relevance: 10
tags: ["memory verification", "agent memory", "hallucination prevention", "deterministic trust", "auditable logs"]
source: "https://github.com/Idanref/memotrust"
discovered_at: "2026-07-04T18:07:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memotrust is a verified memory layer for AI agents that ensures only evidence-backed, trusted memories are recalled, preventing hallucinations, stale data, or poisoned inputs from spreading across agents. It uses an append-only, git-backed JSONL log and deterministic verification to maintain tamper-evident, auditable memory.

## Key Features
- Quarantines unverified memories until evidence is submitted, preventing poisoned or hallucinated data from being recalled
- Deterministic verification against real sources (files, URLs, commands) with zero credentials required by default
- Git-backed, append-only JSONL log for tamper-evident, diffable, and human-readable memory storage
- Decay and dispute mechanisms to invalidate stale or disputed memories automatically
- MCP-compatible tools for seamless integration with AI agents and dashboards for auditing and approval

## Why It Matters for RAG Builders
It ensures AI agents operate on verified, trustworthy memory, eliminating the risk of hallucinations, stale data, or malicious inputs corrupting agent behavior.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
