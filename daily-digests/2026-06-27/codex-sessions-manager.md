---
title: "1939869736luosi/codex-sessions-manager"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "CLI", "MCP (Model Context Protocol)", "JSONL", "Zstandard (zstd) compression"]
quality_score: 9
rag_relevance: 7
tags: ["session cleanup", "local audit", "Codex Desktop", "residue detection", "AI agent integration"]
source: "https://github.com/1939869736luosi/codex-sessions-manager"
discovered_at: "2026-06-27T15:13:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
codex-sessions-manager is a local audit and cleanup tool for Codex sessions, designed to inspect, verify, and safely delete residual files and database records left behind by Codex Desktop's built-in archive/delete operations. It supports CLI, MCP server, and Skill integrations for AI agents.

## Key Features
- Read-only audit and verification of local Codex session residues (files, SQLite, global state)
- Safe, recoverable deletion with rollback support and trash/restore functionality
- MCP server and Skill integration for AI agents (Claude Code, Codex, etc.)
- Explicit delete planning with preview and conflict-safe restore operations
- Cross-platform compatibility (CLI, MCP, Skill) with ecosystem-specific adapters

## Why It Matters for RAG Builders
It ensures AI agents and users can reliably clean up and verify local Codex session residues, preventing privacy leaks and storage bloat in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zstandard (zstd) compression
Automated review identified **Zstandard (zstd) compression** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
