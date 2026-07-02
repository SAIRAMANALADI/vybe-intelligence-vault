---
title: "trip2g/trip2g"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "Markdown", "Obsidian", "MCP (Model Context Protocol)", "Jet (templating engine)", "Mermaid", "Telegram API", "Git", "Docker", "Prometheus (metrics)"]
quality_score: 9
rag_relevance: 10
tags: ["knowledge management", "self-hosted", "MCP server", "Obsidian integration", "AI agent orchestration"]
source: "https://github.com/trip2g/trip2g"
discovered_at: "2026-07-02T06:40:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
trip2g transforms an Obsidian vault into a self-hosted, dual-purpose knowledge hub that serves both human readers and AI agents. It exposes notes via a website and an MCP endpoint, enabling real-time synchronization between markdown files and agent tool calls without external dependencies.

## Key Features
- Dual-purpose note serving: renders markdown as web pages for humans and as MCP tool calls for AI agents
- Real-time synchronization between Obsidian edits and live content without export steps
- Federated knowledge mesh enabling cross-hub agent queries with bounded depth and HMAC-signed tokens
- Built-in MCP server with tools like search, note_html, and federated variants for agent interactions
- Agent runtime (fleet) allowing server-side LLM execution scoped to note patterns and glob filters

## Why It Matters for RAG Builders
trip2g eliminates the gap between human-readable knowledge and AI agent accessibility by unifying them in a single, self-hosted system, making it essential for RAG builders who need real-time, transparent, and agent-interactive knowledge bases.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jet (templating engine)
Automated review identified **Jet (templating engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus (metrics)
Automated review identified **Prometheus (metrics)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
