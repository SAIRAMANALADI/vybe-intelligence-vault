---
title: leesgit/claude-session-continuity-mcp
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- TypeScript
- Node.js
- SQLite
- MCP (Model Context Protocol)
- Semantic Embeddings (multilingual-e5-small)
- Bash
- Claude Code Hooks
quality_score: 9
rag_relevance: 8
tags:
- session continuity
- context management
- local memory
- Claude Code
- automated hooks
source: https://github.com/leesgit/claude-session-continuity-mcp
discovered_at: '2026-07-09T04:46:51Z'
evaluated_by: mistral-small-latest
---

## Summary
A zero-config, 100% local session memory tool for Claude Code that automatically captures, stores, and restores project context across sessions using Claude Hooks. Eliminates manual context-setting by tracking decisions, errors, solutions, and directives locally with SQLite and semantic search.

## Key Features
- Zero-config setup with global npm installation and automatic hook registration
- Five automated Claude Hooks (SessionStart, UserPromptSubmit, PostToolUse, PreCompact, Stop) for seamless context capture and injection
- 100% local storage with SQLite and multilingual semantic search (KO/EN/JA) for efficient memory recall
- Automatic error-to-solution recall and structured handover context for session transitions
- Token-efficient memory management with temporal decay, noise filtering, and progressive disclosure

## Why It Matters for RAG Builders
It eliminates manual context-setting overhead in AI coding sessions by automating memory capture and recall, significantly improving productivity for RAG builders working with Claude Code.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Embeddings (multilingual-e5-small)
Automated review identified **Semantic Embeddings (multilingual-e5-small)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Hooks
Automated review identified **Claude Code Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
