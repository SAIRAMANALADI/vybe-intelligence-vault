---
title: feimingxliu/ub
category: daily-digests/2026-07-10
tech_stack:
- Go
- SQLite
- Bubble Tea (TUI framework)
- Cobra (CLI framework)
- LLM Providers (OpenAI, Anthropic, Ollama, etc.)
- MCP (Model Context Protocol)
- LSP (Language Server Protocol)
quality_score: 9
rag_relevance: 8
tags:
- terminal agent
- local-first
- LLM integration
- session replay
- hackable
source: https://github.com/feimingxliu/ub
discovered_at: '2026-07-10T06:52:09Z'
evaluated_by: mistral-small-latest
---

## Summary
ub is a lean, local-first terminal coding agent written in Go that integrates with LLM providers to execute tasks, persist session logs, and provide a transparent, hackable agent loop. It operates entirely on disk with no daemon or telemetry, emphasizing user control and replayability.

## Key Features
- Multi-provider LLM support with offline/fake provider for CI
- Permission-first execution modes with approval workflows and blocklists
- SQLite-backed append-only session logs for full replayability
- Tiny surface area with single binary (~26k lines of Go)
- Local tooling integration (filesystem, shell, search, LSP, MCP)

## Why It Matters for RAG Builders
ub provides a transparent, local-first agent framework that enables RAG builders to integrate secure, replayable, and permission-controlled LLM-driven coding agents into their workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea (TUI framework)
Automated review identified **Bubble Tea (TUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cobra (CLI framework)
Automated review identified **Cobra (CLI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (OpenAI, Anthropic, Ollama, etc.)
Automated review identified **LLM Providers (OpenAI, Anthropic, Ollama, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol)
Automated review identified **LSP (Language Server Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
