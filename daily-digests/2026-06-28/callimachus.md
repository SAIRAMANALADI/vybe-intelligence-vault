---
title: "BetaBots-LLC/callimachus"
category: "Orchestrator"
tech_stack: ["Tauri 2", "Rust", "React 19", "TypeScript", "SQLite", "FTS5", "sqlite-vec", "fastembed", "Vite 8", "MCP (Model Context Protocol)", "CLI (Command Line Interface)", "VS Code / Cursor Extension"]
quality_score: 9
rag_relevance: 10
tags: ["local RAG", "AI coding history", "semantic search", "agent orchestration", "project memory"]
source: "https://github.com/BetaBots-LLC/callimachus"
discovered_at: "2026-06-28T07:01:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Callimachus is a local-first desktop application that indexes, searches, and distills conversations from 11 AI coding agents into a unified SQLite store. It enables RAG over personal coding history, project memory management, and agent-agnostic chat with on-device embeddings and semantic search.

## Key Features
- Indexes conversations from 11 AI coding agents into a local SQLite store with hybrid keyword and semantic search (BM25 + KNN via sqlite-vec).
- Distills decisions, gotchas, and TODOs into project memory with optional LLM-powered auto-distillation and conflict review.
- Provides an MCP server and CLI for agents to query and update the index mid-session, enabling context-aware coding assistance.
- Links threads to git commits, snapshots agent sessions, and surfaces recurring issues or cost metrics for analysis.
- Supports VS Code/Cursor extensions and integrates with OS keychains for secure, private, and offline-first operation.

## Why It Matters for RAG Builders
Callimachus provides a unified, local-first RAG system for AI coding agents, enabling persistent memory, semantic search, and agent-agnostic context sharing without cloud dependency.

## Tech Stack Deep Dive
### Tauri 2
Automated review identified **Tauri 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed
Automated review identified **fastembed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite 8
Automated review identified **Vite 8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (Command Line Interface)
Automated review identified **CLI (Command Line Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code / Cursor Extension
Automated review identified **VS Code / Cursor Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
