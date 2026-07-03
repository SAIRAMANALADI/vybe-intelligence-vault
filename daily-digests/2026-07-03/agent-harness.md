---
title: "madebywild/agent-harness"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "CLI", "Git", "MCP (Model Context Protocol)", "pnpm"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent configuration", "multi-provider support", "prompt management", "MCP integration", "registry-based sharing"]
source: "https://github.com/madebywild/agent-harness"
discovered_at: "2026-07-03T15:06:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Harness is a TypeScript CLI tool and library that provides unified configuration management for AI agents across multiple providers like OpenAI Codex, Anthropic Claude, GitHub Copilot, and Cursor. It enables centralized management of prompts, skills, MCP server configs, and subagents with provider-specific output generation.

## Key Features
- Single source of truth for agent configurations in `.harness/` directory
- Multi-provider support with simultaneous output generation for Codex, Claude, Copilot, and Cursor
- Shareable registries for reusable prompts, skills, and MCP configs (inspired by shadcn/ui)
- U-Haul tool for migrating legacy provider configs into canonical structures
- Watch mode for automatic regeneration on file changes

## Why It Matters for RAG Builders
It simplifies the management and deployment of AI agent configurations across multiple providers, ensuring consistency and reusability while reducing operational overhead for RAG builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
