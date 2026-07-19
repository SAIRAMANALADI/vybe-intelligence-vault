---
title: electron-stagewright/electron-stagewright
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- TypeScript
- Electron
- Model Context Protocol (MCP)
- Playwright
- Node.js
- Accessibility Tree (ARIA)
quality_score: 9
rag_relevance: 10
tags:
- MCP server
- Electron automation
- AI agent UX
- Accessibility-driven
- Token-efficient
source: https://github.com/electron-stagewright/electron-stagewright
discovered_at: '2026-06-25T00:10:23Z'
evaluated_by: mistral-small-latest
---

## Summary
Electron Stagewright is an agent-native MCP server that enables AI agents to control and inspect real Electron desktop applications with structured, agent-optimized APIs. It replaces human-centric automation tools like Playwright with primitives designed for LLM reasoning, reducing token waste and enabling autonomous recovery.

## Key Features
- Agent-native primitives like `expect_*` assertions and composite state predicates to minimize round-trips and token usage
- Hot-reload-aware snapshots with diff reporting for focused reasoning on changed elements
- Session traces with deterministic replay and per-tool token budgets for debugging and cost control
- Framework-agnostic accessibility tree queries using ARIA roles instead of framework-specific selectors
- Support for attaching to running Electron apps, injecting into main processes, and validating packaged app bundles

## Why It Matters for RAG Builders
It provides the missing agent-first automation layer for Electron apps, enabling AI agents to interact with desktop UIs efficiently and autonomously without human-like reasoning overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Accessibility Tree (ARIA)
Automated review identified **Accessibility Tree (ARIA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
