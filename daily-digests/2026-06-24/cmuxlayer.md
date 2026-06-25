---
title: "EtanHey/cmuxlayer"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Unix sockets", "Bun", "Vitest", "Git"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "terminal orchestration", "multi-agent coordination", "screen parsing", "workspace management"]
source: "https://github.com/EtanHey/cmuxlayer"
discovered_at: "2026-06-24T20:48:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cmuxLayer is an MCP server that enables programmatic control over terminal workspaces for AI agents, providing 35 tools for terminal management, multi-agent orchestration, and screen reading. It bridges AI agents with terminal environments, allowing dynamic workspace manipulation and agent coordination.

## Key Features
- 35 MCP tools for terminal control, agent lifecycle, and metacommunication
- Real-time screen parsing with agent metadata detection (Claude, Codex, Cursor, Gemini)
- Multi-agent orchestration with agent routing, inbox management, and state tracking
- Unix socket-based low-latency communication (1,423x faster than CLI subprocess)
- Workspace layout management including splits, panes, and tab reordering

## Why It Matters for RAG Builders
cmuxLayer enables seamless integration and orchestration of AI agents within terminal environments, critical for building advanced RAG systems that require dynamic workspace control and multi-agent collaboration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
