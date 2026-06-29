---
title: "MCamner/mq-agent"
category: "Orchestrator"
tech_stack: ["Python", "OpenAI API", "Ollama", "Textual (TUI)", "Git", "Markdown", "JSON Schema", "HTTP/REST", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent orchestrator", "terminal workflows", "safety gates", "repo intelligence", "controlled execution"]
source: "https://github.com/MCamner/mq-agent"
discovered_at: "2026-06-29T02:55:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mq-agent is a terminal-native AI agent orchestrator designed for the mq ecosystem, enabling controlled terminal workflows with explicit planning, tool routing, verification, memory, and safety gates. It acts as a bridge between AI models and terminal operations, ensuring traceable and gated execution.

## Key Features
- Modular architecture with Planner, Executor, Verifier, Memory, and Safety layers
- Safety modes (read-only, suggest, execute, dangerous) with explicit approval gates
- Integration with mq-hal, mq-mcp, and repo-signal for enhanced AI workflows
- Comprehensive CLI with 30+ commands for repo auditing, release planning, and CI diagnostics
- Persistent memory engine (mqobsidian) for session and state management

## Why It Matters for RAG Builders
mq-agent provides a critical layer of control and safety for AI-driven terminal workflows, ensuring traceable, gated, and verifiable execution which is essential for production-grade RAG and AI agent systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Textual (TUI)
Automated review identified **Textual (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
