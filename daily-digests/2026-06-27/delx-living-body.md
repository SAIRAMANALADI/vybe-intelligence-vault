---
title: "davidmosiah/delx-living-body"
category: "Orchestrator"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Node.js", "SQLite", "NPM", "StdioClientTransport"]
quality_score: 9
rag_relevance: 8
tags: ["wellness", "MCP", "data unification", "health metrics", "AI agent integration"]
source: "https://github.com/davidmosiah/delx-living-body"
discovered_at: "2026-06-27T11:45:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A meta-MCP server that unifies 15 wellness data connectors into a single body data layer for AI agents, enabling unified wellness insights without manual configuration or LLM calls.

## Key Features
- Auto-detects and composes 15 wellness connectors (e.g., WHOOP, Oura, Garmin) without manual configuration
- Synthesizes unified wellness recommendations using rule-based reasoning (no LLM calls)
- Provides structured reasoning traces with per-source confidence levels for transparency
- Supports parallel child MCP server spawning with secure credential handling
- Offers CLI tools for detection, setup, and debugging (e.g., `doctor`, `setup`, `compose_context`)

## Why It Matters for RAG Builders
It simplifies AI agent integration with wellness data by providing a single unified interface to multiple health and fitness sources, reducing brittleness and improving agent decision-making.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### StdioClientTransport
Automated review identified **StdioClientTransport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
