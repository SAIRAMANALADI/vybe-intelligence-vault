---
title: nczz/pi-tasks
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- Pi Host APIs
- Node.js
- TUI (Terminal User Interface)
- Redux-like state management
quality_score: 9
rag_relevance: 8
tags:
- execution contracts
- evidence-gated completion
- atomic decomposition
- compaction-safe resume
- AI agent tooling
source: https://github.com/nczz/pi-tasks
discovered_at: '2026-06-23T13:41:27Z'
evaluated_by: mistral-small-latest
---

## Summary
pi-tasks provides Pi-native execution contracts for AI agents, enforcing structured plans, evidence-gated completion, atomic step decomposition, and compaction-safe resume capabilities. It ensures agents cannot falsely claim task completion without verifiable proof and maintains progress integrity during context window compaction.

## Key Features
- Evidence-gated task completion requiring traceable, reproducible proof before marking work as done
- Atomic step decomposition with strict quality gates to prevent vague or compound steps
- Compaction-safe resume via durable snapshots and session replay for context window resilience
- Ordered step execution with current-step evidence locking and scope drift detection
- 12 specialized agent tools for task planning, evidence attachment, decomposition, and recovery guidance

## Why It Matters for RAG Builders
It solves the critical problem of AI agents falsely claiming task completion without verifiable proof, ensuring reliability and traceability in agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi Host APIs
Automated review identified **Pi Host APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface)
Automated review identified **TUI (Terminal User Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redux-like state management
Automated review identified **Redux-like state management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
