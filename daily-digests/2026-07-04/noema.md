---
title: "Fail-Safe/Noema"
category: "Tooling"
tech_stack: ["Go", "SQLite", "Markdown", "MCP (Model Context Protocol)", "FTS5 (Full-Text Search)", "Vector Clocks", "SHA-256 Hashing"]
quality_score: 9
rag_relevance: 10
tags: ["agent-memory", "local-first", "markdown-storage", "MCP-server", "persistent-memory"]
source: "https://github.com/Fail-Safe/Noema"
discovered_at: "2026-07-04T17:02:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Noema is a local-first, persistent memory layer for AI agents that stores structured knowledge as plain markdown files with a SQLite index. It exposes agent memory via MCP (Model Context Protocol) for seamless integration with popular AI tools like Claude Code and GitHub Copilot.

## Key Features
- Local-first memory storage with plain markdown files and SQLite indexing for full-text search
- MCP server integration enabling compatibility with AI tools like Claude Code and GitHub Copilot
- Peer-to-peer federation with vector clocks and conflict resolution for distributed memory sync
- Filesystem watcher for real-time updates from editors like VS Code and Obsidian
- Structured memory types (fact, decision, intent, etc.) and SHA-256 content hashing for integrity

## Why It Matters for RAG Builders
Noema provides a critical local-first memory layer for RAG systems, enabling persistent, structured knowledge storage that integrates seamlessly with AI agents and avoids cloud dependency or API costs.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Clocks
Automated review identified **Vector Clocks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 Hashing
Automated review identified **SHA-256 Hashing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
