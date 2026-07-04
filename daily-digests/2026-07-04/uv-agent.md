---
title: "4fuu/uv-agent"
category: "Agent Framework"
tech_stack: ["Python", "uv (Python package manager)", "FastAPI (implied by API support)", "ANSI TUI", "Plugin system (entry points)", "MCP (Model Context Protocol) clients", "Git", "JSON configuration"]
quality_score: 9
rag_relevance: 8
tags: ["coding agent", "auditable execution", "context compaction", "plugin system", "Python runtime"]
source: "https://github.com/4fuu/uv-agent"
discovered_at: "2026-07-04T16:58:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
uv-agent is a Python-native coding agent that enforces a strict single `run_python` boundary for all external actions, ensuring auditable, replayable, and interruptible execution. It leverages a managed runtime with plugin extensibility and advanced context compaction for long-running sessions.

## Key Features
- Single `run_python` boundary for all external actions, ensuring auditable and replayable execution
- Cache-aware NetGain compaction for long-running sessions, optimizing context retention and cost efficiency
- Managed Python runtime with helpers for file editing, command execution, and dependency management
- Extensible plugin system for adding runtime namespaces, actions, and UI providers without altering the model boundary
- Headless service mode for schedulers, chat bridges, and long-running integrations

## Why It Matters for RAG Builders
It provides a secure, auditable, and replayable framework for AI agents to interact with external systems, critical for building reliable RAG pipelines with controlled tool access.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by API support)
Automated review identified **FastAPI (implied by API support)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ANSI TUI
Automated review identified **ANSI TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Plugin system (entry points)
Automated review identified **Plugin system (entry points)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) clients
Automated review identified **MCP (Model Context Protocol) clients** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON configuration
Automated review identified **JSON configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
