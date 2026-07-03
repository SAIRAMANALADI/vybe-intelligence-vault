---
title: "raphasouthall/neurostack"
category: "Orchestrator"
tech_stack: ["Python", "Node.js", "TypeScript", "SQLite", "Ollama (optional)", "Git", "Model Context Protocol (MCP)", "FastAPI", "React (for UI components)"]
quality_score: 9
rag_relevance: 10
tags: ["knowledge graph", "stale detection", "persistent memory", "MCP integration", "local-first"]
source: "https://github.com/raphasouthall/neurostack"
discovered_at: "2026-07-03T15:11:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NeuroStack is a local-first memory layer for existing Markdown notes that indexes them into a searchable knowledge graph, detects stale or outdated information, and integrates with AI assistants via the Model Context Protocol (MCP). It enables persistent AI memory across sessions without modifying source files by default.

## Key Features
- Indexes existing Markdown notes (Obsidian, Notion, etc.) into a searchable knowledge graph without modifying source files by default
- Detects and flags stale or outdated notes before AI cites them, preventing misinformation
- Tiered retrieval system (Quick facts, Summaries, Full content) to optimize token usage
- Opt-in MCP write tools for AI-assisted note editing with git-backed version control
- Profession-specific workflows (researcher, writer, student, developer, etc.) with tailored templates and AI guidance

## Why It Matters for RAG Builders
NeuroStack solves the critical problem of AI assistants forgetting or citing outdated information by providing persistent, self-updating memory of your notes with built-in stale detection, ensuring accuracy and relevance in RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (optional)
Automated review identified **Ollama (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for UI components)
Automated review identified **React (for UI components)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
