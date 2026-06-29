---
title: "gintasz/microfoom"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Zod", "Pi Agent SDK", "Claude CLI", "MCP Server", "TUI (Terminal UI)"]
quality_score: 8
rag_relevance: 9
tags: ["agent orchestration", "multi-harness", "coordination engineering", "structured turns", "typed workflows"]
source: "https://github.com/gintasz/microfoom"
discovered_at: "2026-06-29T12:28:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Microfoom is a TypeScript framework for coordination engineering, enabling the composition of multiple agents, sessions, and model harnesses into a single typed coordination script. It provides structured, schema-validated agent interactions with cross-harness support, built-in tracing, and ergonomic APIs for building complex agent workflows.

## Key Features
- Cross-harness agent composition (e.g., Pi, Claude CLI) in a single script
- Schema-validated structured turns with automatic repair for malformed outputs
- Built-in tracing and observability with span trees and token/cost tracking
- Lean and ergonomic API with modes for structured (`value`), freeform (`prose`), and side-effect (`do`) turns
- Programmatic and CLI-based execution with TUI inspector for debugging

## Why It Matters for RAG Builders
Microfoom enables RAG builders to orchestrate complex, multi-agent workflows with typed control flow and cross-harness flexibility, reducing reliance on brittle prompt engineering and improving reliability in production systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi Agent SDK
Automated review identified **Pi Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude CLI
Automated review identified **Claude CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal UI)
Automated review identified **TUI (Terminal UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
