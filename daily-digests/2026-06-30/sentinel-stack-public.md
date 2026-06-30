---
title: "azfarh95/sentinel-stack-public"
category: "Orchestrator"
tech_stack: ["Python", "Docker", "Telegram Bot API", "MetaMCP", "OpenClaw", "PostgreSQL", "LM Studio", "Playwright", "yt-dlp", "Google Workspace API", "OneDrive API", "GitHub API", "LibreTranslate", "Cloudflare Tunnel", "WSL2", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["self-hosted", "AI assistant", "MCP", "Telegram bot", "local LLM"]
source: "https://github.com/azfarh95/sentinel-stack-public"
discovered_at: "2026-06-30T13:11:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted, two-bot personal AI assistant stack powered by Claude and local LLMs, controlled entirely via Telegram. It integrates MetaMCP for tool aggregation, OpenClaw for AI agent orchestration, and a watchdog bot for system monitoring and management.

## Key Features
- Two-bot architecture (AI assistant + watchdog bot) for clean separation of user and admin functions
- MetaMCP tool gateway aggregating 13+ MCP servers (Memory, Reminders, Maps, GitHub, Google Workspace, Playwright, etc.)
- Real-time browser automation and streaming via Playwright and Chrome DevTools Protocol
- Auto-restart watchdog with system monitoring and TOTP-gated mini-app dashboard
- Shopping MCP for price comparisons across multiple marketplaces and telco plan analysis

## Why It Matters for RAG Builders
It provides a comprehensive, self-hosted AI orchestration framework with tool integration, monitoring, and real-time interaction, reducing the complexity for RAG builders to deploy and manage a full AI assistant stack locally.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MetaMCP
Automated review identified **MetaMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Workspace API
Automated review identified **Google Workspace API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OneDrive API
Automated review identified **OneDrive API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreTranslate
Automated review identified **LibreTranslate** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WSL2
Automated review identified **WSL2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
