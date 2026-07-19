---
title: majiayu000/remem
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Rust
- SQLite
- SQLCipher
- MCP (Model Context Protocol)
- CLI
- REST API
- Hooks
- Homebrew
- npm
- Cargo
quality_score: 9
rag_relevance: 8
tags:
- memory management
- coding agents
- local-first
- auditable recall
- project context
source: https://github.com/majiayu000/remem
discovered_at: '2026-06-25T07:29:02Z'
evaluated_by: mistral-small-latest
---

## Summary
remem is a local-first Rust-based tool that automatically captures, distills, searches, and injects project memory across coding agents like Claude Code and OpenAI Codex. It eliminates the need to re-explain projects by maintaining a searchable, auditable, and project-scoped memory store using SQLite and SQLCipher.

## Key Features
- Automatically captures and distills project decisions, bug-fix rationale, and preferences across coding sessions
- Provides searchable, auditable, and project-scoped memory storage with SQLite and SQLCipher
- Integrates with Claude Code, OpenAI Codex, and Codex CLI via hooks, MCP, CLI, and REST API
- Supports deterministic recall and governance with commands like `remem search`, `remem why`, and `remem status`
- Enables seamless memory injection at session start and summarization at session end

## Why It Matters for RAG Builders
It eliminates session amnesia in coding agents by providing persistent, searchable, and auditable project memory, reducing redundant explanations and improving AI-driven development efficiency.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLCipher
Automated review identified **SQLCipher** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hooks
Automated review identified **Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
