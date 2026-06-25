---
title: "SaravananJaichandar/world-model-mcp"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "Temporal Knowledge Graph", "CLI", "TUI", "Benchmarking"]
quality_score: 9
rag_relevance: 10
tags: ["temporal knowledge graph", "constraint enforcement", "contradiction resolution", "AI agent memory", "code validation"]
source: "https://github.com/SaravananJaichandar/world-model-mcp"
discovered_at: "2026-06-24T06:50:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
World Model MCP is a temporal knowledge graph and MCP server that enforces constraints, tracks contradictions, and prevents repeated coding mistakes for AI agents like Claude Code and Cursor. It validates code changes against learned constraints, re-injects context after compaction, and resolves conflicts using confidence-weighted resolution.

## Key Features
- Validates code changes against learned constraints at edit boundaries to prevent hallucinations
- Tracks and resolves contradictions with confidence-weighted resolution and provenance tracking
- Re-injects relevant context after compaction to maintain agent memory across sessions
- Includes empirical benchmarks (SWE-bench Verified) proving measurable reduction in repeated mistakes
- Supports slash commands and TUI widgets for in-agent interaction and monitoring

## Why It Matters for RAG Builders
It provides a persistent memory layer for AI coding agents that measurably reduces repeated mistakes and regressions, ensuring more reliable and consistent code generation across sessions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Temporal Knowledge Graph
Automated review identified **Temporal Knowledge Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI
Automated review identified **TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Benchmarking
Automated review identified **Benchmarking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
