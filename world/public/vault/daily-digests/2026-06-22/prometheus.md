---
title: FeverDream-dev/Prometheus
category: daily-digests/2026-06-22
tech_stack:
- Python
- Ollama
- Textual (TUI framework)
- SQLite
- Git
- Playwright
- Docker
- Bubblewrap
- sandbox-exec
- PyTorch
- Diffusers
- MCP (Model Context Protocol)
- JSON-RPC
quality_score: 9
rag_relevance: 8
tags:
- local-first
- multi-model
- deterministic
- sandboxed
- hardware-aware
source: https://github.com/FeverDream-dev/Prometheus
discovered_at: '2026-06-22T18:56:09Z'
evaluated_by: mistral-small-latest
---

## Summary
PROMETHEUS is a local-first, adaptive multi-model coding agent that operates entirely on user hardware with explicit user consent for network use. It functions as a local alternative to cloud-based coding assistants like Claude Code or OpenCode, prioritizing privacy, hardware awareness, and deterministic task completion.

## Key Features
- Hardware-aware model selection with explicit hardware detection (CPU/GPU/VRAM) and package recommendations
- Deterministic, evidence-driven task completion with ≥95% weighted acceptance criteria for 'done' status
- Four-tier sandbox security (off/basic/docker/native) with path-traversal and symlink-escape guards
- Three-seat agent arena (Envoy/Forge/Argus) with structured handoffs and escalation paths
- Built-in TUI with slash commands, demo mode, and visual smoke tests for UI validation

## Why It Matters for RAG Builders
PROMETHEUS provides a privacy-preserving, locally deployable alternative to cloud-based coding agents, enabling RAG builders to integrate secure, hardware-aware, and deterministic agentic workflows without telemetry or quota constraints.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Textual (TUI framework)
Automated review identified **Textual (TUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap
Automated review identified **Bubblewrap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sandbox-exec
Automated review identified **sandbox-exec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Diffusers
Automated review identified **Diffusers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
