---
title: "edobreque/clens"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Claude Code", "JSONL", "OpenTelemetry", "CLI", "TUI"]
quality_score: 9
rag_relevance: 8
tags: ["session observability", "agent tracing", "local-first", "Claude Code", "debugging"]
source: "https://github.com/edobreque/clens"
discovered_at: "2026-06-22T18:49:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cLens is a local-first observability tool for Claude Code agents that captures and analyzes agentic sessions without external dependencies. It records every tool call, decision, and reasoning step in JSONL files and provides post-hoc analysis via a CLI and interactive TUI.

## Key Features
- Zero-config session capture with ~2ms overhead per event
- 23 built-in extractors for backtrack detection, decision analysis, edit chains, and plan drift
- Interactive TUI for exploring sessions with keyboard navigation
- Agentic plugin enabling self-analysis of sessions by Claude Code agents
- OpenTelemetry export for integration with existing observability stacks

## Why It Matters for RAG Builders
cLens provides critical visibility into agentic workflows by capturing and analyzing every decision and tool call locally, enabling debugging, optimization, and trust in AI-driven development processes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI
Automated review identified **TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
