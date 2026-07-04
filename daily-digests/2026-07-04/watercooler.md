---
title: "mostlyharmless-ai/watercooler"
category: "Agent Framework"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Git", "TOML", "CLI", "MCP Clients (Claude Code, Codex, Cursor)"]
quality_score: 9
rag_relevance: 8
tags: ["collaboration", "decision tracking", "agent-human workflow", "git-native", "MCP server"]
source: "https://github.com/mostlyharmless-ai/watercooler"
discovered_at: "2026-07-04T17:04:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Watercooler is an MCP server that provides git-native shared reasoning for human-AI coding teams, preserving decisions, critique, and rationale alongside the codebase. It enables structured, versioned collaboration where agents propose and humans decide, ensuring durable and reviewable context for code changes.

## Key Features
- Git-backed thread storage for durable reasoning and decisions
- Structured write actions (say, ack, handoff, set_status) with role-aware entries
- Ball-passing mechanism to track accountability and workflow progression
- Integration with MCP clients for seamless agent-human collaboration
- Federated search across repositories and semantic/keyword search within threads

## Why It Matters for RAG Builders
Watercooler ensures critical reasoning and decisions are preserved alongside code, enabling RAG systems to retrieve context-rich, versioned rationale for better AI-assisted development and debugging.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Clients (Claude Code, Codex, Cursor)
Automated review identified **MCP Clients (Claude Code, Codex, Cursor)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
