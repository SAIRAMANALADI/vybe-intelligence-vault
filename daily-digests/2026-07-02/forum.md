---
title: "HarperZ9/forum"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP", "CLI", "Ledger/Journaling", "Deterministic Routing", "Model-Agnostic Executors"]
quality_score: 9
rag_relevance: 10
tags: ["agent orchestration", "replayable ledgers", "multi-agent coordination", "tamper detection", "resumable workflows"]
source: "https://github.com/HarperZ9/forum"
discovered_at: "2026-07-02T15:15:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Forum is an orchestration engine for coordinating multi-agent AI workflows through replayable ledgers. It ensures every routing decision, task, result, and verification step is recorded in a tamper-detectable ledger, enabling inspection, replay, and resumption of agent runs.

## Key Features
- Replayable ledger that records every step (routing, tasks, results, verifications) with tamper detection
- Model-agnostic execution with support for local CLI, OpenAI-compatible servers, and Anthropic API
- Budget-based run control (model calls, wall-clock time, context size) with graceful termination
- Deterministic routing and planning with explicit stop conditions and next-action derivation
- Enterprise-ready CLI/MCP tools for status, debugging, and integration with external systems

## Why It Matters for RAG Builders
Forum provides the critical infrastructure for building auditable, resumable, and verifiable multi-agent AI workflows by making the execution ledger the primary artifact rather than an afterthought.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ledger/Journaling
Automated review identified **Ledger/Journaling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deterministic Routing
Automated review identified **Deterministic Routing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model-Agnostic Executors
Automated review identified **Model-Agnostic Executors** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
