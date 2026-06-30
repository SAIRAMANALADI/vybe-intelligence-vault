---
title: "ericlovo/AIIA"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Ollama", "Anthropic API", "Google API", "MCP (Model Context Protocol)", "SQLite", "CLI", "TypeScript (for dashboard)", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["memory layer", "context persistence", "AI tool integration", "local-first", "MCP server"]
source: "https://github.com/ericlovo/AIIA"
discovered_at: "2026-06-30T16:21:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AIIA is a local-first memory layer that bridges human decisions and AI tool interactions, enabling bidirectional context flow between users and their AI assistants like Claude Code or Cursor. It persists decisions, patterns, and observations in structured memory, reducing the need to re-explain context across sessions.

## Key Features
- Bidirectional context flow between users and AI tools, ensuring decisions and observations are preserved
- Structured memory with 9 typed categories, quality scoring, and decay-aware prioritization
- Local-first LLM stack with fallback to cloud models (Anthropic/Google)
- CLI and MCP server for seamless integration with tools like Claude Code and Cursor
- Background jobs for memory consolidation, security scans, and daily reports

## Why It Matters for RAG Builders
AIIA provides a persistent, structured memory layer that eliminates context loss between AI tool sessions, enabling continuous and coherent AI-assisted workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google API
Automated review identified **Google API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (for dashboard)
Automated review identified **TypeScript (for dashboard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
