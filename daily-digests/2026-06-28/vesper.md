---
title: "randileeharper/vesper"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "SQLite", "A2A Protocol", "MCP (Model Context Protocol)", "Cider Apple Music Client", "CLI"]
quality_score: 8
rag_relevance: 6
tags: ["music agent", "Apple Music", "Cider client", "A2A protocol", "MCP transport"]
source: "https://github.com/randileeharper/vesper"
discovered_at: "2026-06-28T16:16:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Vesper is a specialized music-control agent designed for the Cider Apple Music client, providing text-first interfaces for playback control, adaptive music sessions, and preference management. It offloads music-specific tasks to a dedicated specialist, keeping the main conversational agent lean.

## Key Features
- Local and remote playback control (play, pause, stop, next, previous)
- Natural-language music requests with adaptive session handling
- Preference memory via SQLite for user-specific music tastes
- Multiple transport options (CLI, A2A HTTP, MCP stdio/HTTP)
- Intentional minimal structured API with text-first interface

## Why It Matters for RAG Builders
Vesper simplifies integrating music control into AI agents by providing a specialized, text-first interface that handles complex music tasks while keeping the main agent lightweight.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A Protocol
Automated review identified **A2A Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cider Apple Music Client
Automated review identified **Cider Apple Music Client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
