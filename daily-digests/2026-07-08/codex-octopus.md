---
title: "xiaolai/codex-octopus"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "OpenAI Codex SDK", "Jest/Vitest"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Codex agents", "multi-agent", "sandboxed execution", "AI tooling"]
source: "https://github.com/xiaolai/codex-octopus"
discovered_at: "2026-07-08T08:18:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Octopus is an MCP server that wraps the OpenAI Codex SDK to enable the creation of multiple specialized Codex agents, each with customizable models, sandboxes, effort levels, and personalities, accessible via any MCP client.

## Key Features
- Spins up multiple specialized Codex agents from a single binary with distinct configurations
- Supports customizable sandbox modes (read-only, workspace-write, danger-full-access) and effort levels (minimal to xhigh)
- Includes an agent factory tool for interactive configuration generation via MCP clients
- Enforces security by defaulting to read-only sandboxes and allowing only tightening of sandbox modes and approval policies
- Provides per-invocation parameter overrides for fine-grained control over agent behavior

## Why It Matters for RAG Builders
It enables RAG builders to deploy multiple specialized AI agents with distinct capabilities and security constraints, enhancing modularity and control in AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex SDK
Automated review identified **OpenAI Codex SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest/Vitest
Automated review identified **Jest/Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
