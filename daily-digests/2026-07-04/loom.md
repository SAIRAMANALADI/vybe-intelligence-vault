---
title: "ddevilz/loom"
category: "Tooling"
tech_stack: ["Python", "SQLite", "tree-sitter", "MCP (Model Context Protocol)", "CLI", "Git"]
quality_score: 9
rag_relevance: 10
tags: ["code indexing", "persistent cache", "AI agent tooling", "tree-sitter", "MCP server"]
source: "https://github.com/ddevilz/loom"
discovered_at: "2026-07-04T09:27:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Loom is a persistent symbol index for AI coding agents that indexes codebases into a local SQLite database using tree-sitter, enabling instant function discovery and context retrieval without file exploration. Agents cache their understanding of functions, which is reused in future sessions to skip redundant reads.

## Key Features
- Persistent symbol indexing with tree-sitter and SQLite for zero LLM overhead
- Agent-written summaries cached and reused across sessions to reduce token usage by 51–1500x
- MCP server integration for seamless AI tool compatibility (Claude Code, Cursor, etc.)
- Incremental analysis and delta tracking to avoid redundant work
- Advanced querying with tags, call relationships, and community detection

## Why It Matters for RAG Builders
Loom eliminates redundant codebase exploration for AI agents by caching function understanding, drastically reducing token usage and speeding up development workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
