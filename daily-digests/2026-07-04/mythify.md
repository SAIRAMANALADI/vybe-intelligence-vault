---
title: "hannsxpeter/mythify"
category: "Orchestrator"
tech_stack: ["Python 3.9+", "Node.js 18+ (optional for MCP server)", "Git", "CLI", "MCP (Model Context Protocol) Server", "JSON/YAML for state management"]
quality_score: 9
rag_relevance: 9
tags: ["evidence-based workflows", "AI agent orchestration", "verification-driven development", "persistent memory", "autonomous loops"]
source: "https://github.com/hannsxpeter/mythify"
discovered_at: "2026-07-04T15:08:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mythify is an evidence protocol and toolkit designed to enforce operational discipline in AI coding agents by requiring executed verification (e.g., passing tests) over confident prose to mark work as complete. It provides a structured loop for planning, acting, and verifying tasks with persistent memory and autonomous loop capabilities.

## Key Features
- Enforces executed verification (e.g., passing tests) as the definition of 'done' for AI agents, replacing optimistic claims with concrete evidence.
- Provides a structured loop (PLAN -> ACT -> VERIFY) with persistent state stored in `.mythify/` for cross-session continuity.
- Supports autonomous loops with bounded autonomy, cost budgets, and escalation policies to prevent unbounded execution.
- Integrates with existing tools like godplans and godaudits for importing plans and audits while preserving verification commands.
- Offers an MCP server for fanout parallelism, git worktree isolation, and native chat agent integration (Claude Code, Codex).

## Why It Matters for RAG Builders
Mythify ensures AI agents produce verifiable, repeatable outcomes by enforcing evidence-based workflows, making it essential for building reliable RAG and AI systems where correctness and traceability are critical.

## Tech Stack Deep Dive
### Python 3.9+
Automated review identified **Python 3.9+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 18+ (optional for MCP server)
Automated review identified **Node.js 18+ (optional for MCP server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) Server
Automated review identified **MCP (Model Context Protocol) Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML for state management
Automated review identified **JSON/YAML for state management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
