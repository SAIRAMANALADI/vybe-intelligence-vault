---
title: "HarperZ9/forum"
category: "Orchestrator"
tech_stack: ["Python", "Standard Library", "HTTP", "MCP (Model Context Protocol)", "TOML", "JSON", "Asyncio"]
quality_score: 9
rag_relevance: 10
tags: ["agent orchestration", "replayable ledger", "model-agnostic", "quality gates", "deterministic routing"]
source: "https://github.com/HarperZ9/forum"
discovered_at: "2026-07-07T16:26:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
forum is a zero-dependency orchestration engine for agent fleets that routes tasks, plans dependency graphs, and executes them across model-agnostic backends while maintaining a replayable causal ledger for verification and resumption.

## Key Features
- Zero-dependency runtime with Python 3.11+ support
- Replayable causal ledger with hash-chaining and content addressing for tamper detection
- Model-agnostic execution via CLI, OpenAI-compatible APIs, or Anthropic API
- Human-in-the-loop approval gates with durable deadlines and witnessed escalation
- Bounded budgets (model calls, wall clock, context tokens) and expert delivery profiles

## Why It Matters for RAG Builders
It provides verifiable, replayable orchestration of agent fleets with a tamper-proof ledger, enabling RAG builders to audit, challenge, and resume runs with full transparency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Standard Library
Automated review identified **Standard Library** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
