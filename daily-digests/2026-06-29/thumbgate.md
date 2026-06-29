---
title: "IgorGanapolsky/ThumbGate"
category: "Tooling"
tech_stack: ["JavaScript", "TypeScript", "Node.js", "MCP (Model Context Protocol)", "LanceDB", "Embeddings (bge-small)", "CI/CD (GitHub Actions)", "NPM", "React (for UI components)"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent governance", "pre-execution blocking", "local-first security", "repeat mistake prevention", "token cost optimization"]
source: "https://github.com/IgorGanapolsky/ThumbGate"
discovered_at: "2026-06-29T21:25:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ThumbGate is a local-first firewall for AI coding agents that blocks dangerous tool calls (e.g., rm -rf, secret exfiltration) before execution using PreToolUse hooks. It converts user feedback into enforceable prevention rules, reducing repeated AI mistakes and token waste.

## Key Features
- PreToolUse hook integration with major AI agents (Claude Code, Cursor, Codex, etc.)
- Feedback-driven prevention rules that block repeated mistakes permanently
- Context Brain (BRAIN.md) for institutional memory shared across agent sessions
- Local CPU-only embeddings for semantic rule matching without external API calls
- Discoverable slash-commands for guardrail management and enforcement visibility

## Why It Matters for RAG Builders
ThumbGate prevents costly AI agent mistakes before they execute, saving tokens and reducing risk in production environments.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (bge-small)
Automated review identified **Embeddings (bge-small)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for UI components)
Automated review identified **React (for UI components)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
