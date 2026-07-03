---
title: "TT-Wang/memem"
category: "Agent Framework"
tech_stack: ["Python", "SQLite", "FTS5 (Full-Text Search)", "Markdown", "Obsidian", "Claude Code", "MCP (Model Context Protocol)", "Haiku (for text generation)", "JSONL", "Bash"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "self-evolving", "local-first", "Obsidian integration", "AI agent tooling"]
source: "https://github.com/TT-Wang/memem"
discovered_at: "2026-07-03T12:16:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memem is a local-first, persistent memory system for AI coding assistants like Claude Code that automatically mines, stores, and retrieves lessons, decisions, and context from past sessions as human-readable markdown in an Obsidian vault. It eliminates the need to re-explain projects by maintaining a self-evolving knowledge base with SQLite-backed search and retrieval.

## Key Features
- Automatically mines and stores lessons, decisions, and context from AI coding sessions as markdown files in an Obsidian vault
- Uses SQLite FTS5 for fast, persistent full-text search and retrieval of memories
- Supports path-scoped memory retrieval for project-specific context
- Provides MCP tools for on-demand memory recall and active memory slices
- Includes telemetry and feedback loops to improve memory relevance over time

## Why It Matters for RAG Builders
It enables AI agents to retain and leverage persistent, self-evolving context across sessions without cloud dependencies, significantly improving continuity and efficiency in coding workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Haiku (for text generation)
Automated review identified **Haiku (for text generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
