---
title: "didrod205/oh-my-fable"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Fetch API", "CLI Tools", "NPM", "JSON Schema", "Serialization"]
quality_score: 9
rag_relevance: 10
tags: ["durable agents", "resumable workflows", "model-agnostic", "checkpointing", "self-correcting"]
source: "https://github.com/didrod205/oh-my-fable"
discovered_at: "2026-06-29T07:26:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
oh-my-fable is a model-agnostic agent harness that enables durable, resumable task execution for long-running AI workflows. It implements a plan-first, self-correcting approach where the entire run state is serialized and checkpointed after every step, ensuring crashes become pauses rather than failures.

## Key Features
- Crash resilience via serialized RunContext checkpointed after every step, enabling seamless resumption from the last checkpoint
- Plan-first execution with structured reflection and dynamic replanning based on real-time progress and obstacles
- Deterministic testing through stateless model interactions and scripted provider simulations
- Zero runtime dependencies and support for multiple providers (Anthropic, OpenAI-compatible, local models, CLI logins)
- Hard budget ceilings (steps, tokens, wall-clock time) and recovery caps to prevent runaway execution

## Why It Matters for RAG Builders
It provides the critical infrastructure for building reliable, long-running AI agents that can survive crashes, maintain state, and self-correct without losing progress, making it essential for production-grade RAG and agentic systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fetch API
Automated review identified **Fetch API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Serialization
Automated review identified **Serialization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
