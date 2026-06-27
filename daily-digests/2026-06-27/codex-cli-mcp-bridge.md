---
title: "0x000x7f/codex-cli-mcp-bridge"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Git", "Codex CLI"]
quality_score: 8
rag_relevance: 9
tags: ["AI agent safety", "MCP server", "code handoff", "deterministic execution", "multi-agent workflow"]
source: "https://github.com/0x000x7f/codex-cli-mcp-bridge"
discovered_at: "2026-06-27T21:01:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An experimental MCP server that bridges Claude Code to Codex CLI for agentic software development, focusing on safety and controlled handoffs between AI agents rather than replacing existing integrations.

## Key Features
- Staged MCP tools for plan, propose, review, and apply phases with explicit human approval gates
- Deterministic patch application with SHA-256 binding, base HEAD checks, and clean-tree validation
- Model-agnostic control layer enabling reuse across MCP-compatible clients or coding CLIs
- Explicit separation of proposer (LLM), gatekeeper (MCP server), and approver (human)
- Experimental design focused on safety and replaceability over convenience

## Why It Matters for RAG Builders
It provides a critical safety and control framework for AI agents handing off coding tasks, ensuring dangerous operations remain outside model control and are validated through deterministic gates.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
