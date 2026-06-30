---
title: "adeoluwaadesina/wingman-mcp"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "SQLite", "HTML/CSS/JS", "Sortable.js", "platformdirs", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "task management", "AI planning", "Claude integration", "persistent plans"]
source: "https://github.com/adeoluwaadesina/wingman-mcp"
discovered_at: "2026-06-30T10:55:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Wingman is an open-source MCP server that provides Claude AI with a persistent, interactive plan panel for managing tasks directly within chat conversations. It enables task tracking, reordering, and completion via a live UI widget, persisting plans locally using SQLite.

## Key Features
- Interactive plan panel rendered inline in chat via MCP Apps (SEP-1865)
- 12 LLM-visible tools for plan and task management (create, tick, reorder, rename, etc.)
- Local SQLite persistence for plans and tasks, surviving restarts and conversation changes
- Drag-to-reorder tasks, inline renaming, and one-click task execution with framed prompts
- Build plans from conversation history or start empty and populate dynamically

## Why It Matters for RAG Builders
Wingman streamlines AI-driven task execution by providing a persistent, interactive plan panel that enhances collaboration between users and LLMs, ensuring clarity and continuity in multi-step workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS/JS
Automated review identified **HTML/CSS/JS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sortable.js
Automated review identified **Sortable.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### platformdirs
Automated review identified **platformdirs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
