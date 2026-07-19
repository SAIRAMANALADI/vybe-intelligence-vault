---
title: trip2g/trip2g
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Go
- SQLite
- Markdown
- MCP (Model Context Protocol)
- Obsidian
- Docker
- Git
- Jet Templates
- Mermaid
- Telegram API
- OAuth
- Prometheus
quality_score: 9
rag_relevance: 10
tags:
- knowledge management
- self-hosted
- MCP server
- Obsidian integration
- agent orchestration
source: https://github.com/trip2g/trip2g
discovered_at: '2026-07-08T02:07:54Z'
evaluated_by: mistral-small-latest
---

## Summary
trip2g transforms an Obsidian vault into a self-hosted, dual-purpose knowledge hub that serves both human readers via a website and AI agents through an MCP endpoint. It enables real-time synchronization between markdown notes, web publishing, and agent interactions without vendor lock-in.

## Key Features
- Dual-purpose markdown notes: serve as both web pages and MCP tools for AI agents
- Real-time synchronization between Obsidian edits and live updates for humans and agents
- Built-in MCP server with tools like search, note_html, and federated queries
- Federation capability to connect multiple hubs for distributed knowledge sharing
- Agent runtime (fleet) for server-side LLM execution scoped to note changes or cron schedules

## Why It Matters for RAG Builders
trip2g eliminates the need for separate systems to manage human-readable and agent-accessible knowledge, providing a unified, self-hosted platform that bridges Obsidian notes with AI agent workflows while ensuring data ownership and real-time synchronization.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jet Templates
Automated review identified **Jet Templates** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
