---
title: "prevalentWare/opencode-goal-plugin"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "npm", "OpenCode Plugin System", "Bun"]
quality_score: 9
rag_relevance: 7
tags: ["goal-driven AI", "agent focus", "persistent objectives", "OpenCode plugin", "task automation"]
source: "https://github.com/prevalentWare/opencode-goal-plugin"
discovered_at: "2026-07-09T14:44:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The OpenCode Goal Plugin enhances OpenCode with Codex-style long-running goal mode, enabling AI coding agents to maintain persistent objectives via a `/goal` command, terminal UI indicators, and automated continuation for focused, multi-session task execution.

## Key Features
- Persistent goal state with history, checkpoints, and budgets across sessions
- Automated idle continuation with safeguards (no-progress detection, token limits)
- Plan mode safety to prevent goal escalation from planning-only agents
- Terminal UI sidebar with real-time goal status, elapsed time, and evidence tracking
- Agent tools for goal lifecycle management (create, update, clear, get_history)

## Why It Matters for RAG Builders
It enables AI agents to maintain long-running, focused objectives with persistent state and automated continuation, critical for complex, multi-step coding tasks in RAG workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode Plugin System
Automated review identified **OpenCode Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
