---
title: "NG-Bullseye/cortex-board"
category: "Orchestrator"
tech_stack: ["Python", "FastMCP", "FastAPI", "Ionic", "Angular", "Capacitor", "TypeScript", "Markdown", "Telegram Bot API", "Claude (AI Model)"]
quality_score: 7
rag_relevance: 6
tags: ["Kanban", "Markdown-driven", "Telegram integration", "Live projection", "AI agent orchestration"]
source: "https://github.com/NG-Bullseye/cortex-board"
discovered_at: "2026-06-23T13:49:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cortex-board is a live Kanban board system that dynamically projects tickets from Markdown files, combining a FastMCP server, FastAPI backend, and an Ionic/Angular/Capacitor frontend into a single repository. It integrates with Telegram via a dedicated agent to create tickets from `/board` commands.

## Key Features
- Live Kanban board projected from Markdown ticket files without a separate JSON store
- Integrated MCP server (FastMCP) and REST API (FastAPI) served from a single origin
- Ionic/Angular/Capacitor frontend built into the repository for unified deployment
- Telegram bot agent (`board-agent`) filters `/board` commands to create tickets dynamically
- Zero-config setup with overridable environment variables for paths and ports

## Why It Matters for RAG Builders
It provides a lightweight, Markdown-native Kanban system with AI agent integration, enabling seamless ticket creation from natural language inputs like Telegram commands for RAG and AI workflow orchestration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ionic
Automated review identified **Ionic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Angular
Automated review identified **Angular** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Capacitor
Automated review identified **Capacitor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude (AI Model)
Automated review identified **Claude (AI Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
