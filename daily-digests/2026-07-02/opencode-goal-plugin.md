---
title: "prevalentWare/opencode-goal-plugin"
category: "Tooling"
tech_stack: ["TypeScript", "OpenCode Plugin System", "Node.js", "npm"]
quality_score: 9
rag_relevance: 7
tags: ["goal-driven AI", "OpenCode plugin", "long-running tasks", "AI agent focus", "task persistence"]
source: "https://github.com/prevalentWare/opencode-goal-plugin"
discovered_at: "2026-07-02T15:11:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenCode Goal Plugin enables Codex-style long-running goal mode for OpenCode, allowing AI coding agents to maintain persistent objectives with slash commands, terminal UI indicators, and automatic continuation until goals are completed or blocked.

## Key Features
- Persistent goal state with history and checkpoints via `/goal` slash command
- Terminal UI sidebar indicator for real-time goal tracking
- Automatic continuation on idle with safety limits (token budget, duration, no-progress thresholds)
- Plan-mode safety to prevent unauthorized goal execution during planning sessions
- Agent tools for goal lifecycle management (create, update, clear, history retrieval)

## Why It Matters for RAG Builders
It enables AI agents to maintain focus on long-running objectives with persistent state and evidence-based completion, critical for complex RAG workflows requiring sustained task execution.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode Plugin System
Automated review identified **OpenCode Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
