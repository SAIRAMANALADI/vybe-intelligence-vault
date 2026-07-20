---
title: agenthatch/agenthatch
category: daily-digests/2026-07-08
tech_stack:
- Python
- Jinja2
- LLM APIs (OpenAI, DeepSeek, Anthropic, OpenAI-compatible)
- TOML
- CLI
- Type Annotations
- MCP (Model Context Protocol)
- State Machines
quality_score: 9
rag_relevance: 8
tags:
- agent compilation
- SKILL.md conversion
- deterministic agents
- MCP integration
- AI tooling
source: https://github.com/agenthatch/agenthatch
discovered_at: '2026-07-08T15:15:12Z'
evaluated_by: mistral-small-latest
---

## Summary
agenthatch transforms SKILL.md files into standalone, runnable AI agents by compiling them into deterministic Python packages with type-annotated tools, MCP integration, and runtime configurations. It addresses common issues with raw SKILL.md files like lack of isolation, token waste, and runtime validation failures.

## Key Features
- Compiles SKILL.md into standalone Python agents with isolated runtime environments
- 6-harness LLM pipeline for structured inference and validation of agent specifications
- Type-annotated tool definitions with JSON Schema for reliable tool calling
- Post-generation self-review to catch runtime errors and undefined variables
- PlanLayer state machine for adaptive task execution and error recovery

## Why It Matters for RAG Builders
It bridges the gap between prompt-based agent definitions and software-engineered, production-ready agents, enabling reliable and scalable AI workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenAI, DeepSeek, Anthropic, OpenAI-compatible)
Automated review identified **LLM APIs (OpenAI, DeepSeek, Anthropic, OpenAI-compatible)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Type Annotations
Automated review identified **Type Annotations** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### State Machines
Automated review identified **State Machines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
