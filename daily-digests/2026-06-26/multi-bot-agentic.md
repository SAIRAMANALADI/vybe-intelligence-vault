---
title: "Francis1998/multi-bot-agentic"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "OpenAI API", "Claude Code CLI", "Gemini API", "Kimi API", "Ruff", "Mypy", "Pytest"]
quality_score: 9
rag_relevance: 9
tags: ["deterministic agent", "agent orchestration", "rationale traces", "provider adapters", "safety controls"]
source: "https://github.com/Francis1998/multi-bot-agentic"
discovered_at: "2026-06-26T06:51:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic AI-agent orchestrator implementing explicit Observe -> Decide -> Act loops with durable event logging, rationale traces, and provider adapters for OpenAI, Claude Code, Gemini, and Kimi. Designed for production-grade agent workflows with safety controls and offline demo capabilities.

## Key Features
- Explicit Observe -> Decide -> Act runtime loop with state-machine lifecycle
- Durable SQLite event logging with replay and reporting capabilities
- Provider-agnostic adapters for OpenAI, Claude Code, Gemini, and Kimi
- Deterministic fake provider for offline demos and CI testing
- Safety policies for bounded scope, timeouts, and cancellation

## Why It Matters for RAG Builders
It provides a production-ready framework for building auditable, deterministic AI agents with explicit control loops and safety controls, essential for RAG builders who need reliable, explainable agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kimi API
Automated review identified **Kimi API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
