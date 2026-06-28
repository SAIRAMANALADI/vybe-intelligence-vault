---
title: "Anakior/atlas-mind"
category: "Orchestrator"
tech_stack: ["Python 3.11+", "Git", "MCP (Model Context Protocol)", "HTML/CSS/JavaScript (frontend)", "MiniSearch (fuzzy search)", "AGPL-3.0 License"]
quality_score: 9
rag_relevance: 10
tags: ["knowledge base", "MCP server", "git-native", "self-hosted", "AI memory"]
source: "https://github.com/Anakior/atlas-mind"
discovered_at: "2026-06-28T12:17:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Atlas Mind is a self-hostable, git-native knowledge base engine designed to serve as an external brain for AI systems. It decouples content (plain files in a git repo) from the engine (a lightweight Python HTTP server) and exposes an MCP endpoint for AI interaction.

## Key Features
- Git-native knowledge base with plain Markdown/HTML/PDF/DOCX files stored in a user-controlled repository
- MCP endpoint exposing 24 tools for AI interaction (read, write, graph, time-travel, activity, inbox)
- Lightweight Python HTTP server with no database, supporting offline PWA mode
- Multi-format document preview (Markdown, HTML, PDF, DOCX) with inline rendering
- Self-hosting with optional cloud mode (accounts, access control, 2FA, rate limiting)

## Why It Matters for RAG Builders
Atlas Mind provides a critical bridge between AI systems and user-controlled knowledge bases, enabling secure, transparent, and git-native memory integration for RAG pipelines.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS/JavaScript (frontend)
Automated review identified **HTML/CSS/JavaScript (frontend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniSearch (fuzzy search)
Automated review identified **MiniSearch (fuzzy search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AGPL-3.0 License
Automated review identified **AGPL-3.0 License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
