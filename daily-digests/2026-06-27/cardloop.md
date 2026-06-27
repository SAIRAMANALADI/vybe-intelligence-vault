---
title: "igdigitallab/cardloop"
category: "Orchestrator"
tech_stack: ["Python 3.11+", "Node.js 20+", "Claude Code CLI", "React", "Vite", "aiohttp", "Git", "Docker", "PWA (Progressive Web App)", "WebSockets", "SSE (Server-Sent Events)", "systemd"]
quality_score: 9
rag_relevance: 8
tags: ["Claude agents", "kanban automation", "mobile-first PWA", "self-hosted", "git worktree"]
source: "https://github.com/igdigitallab/cardloop"
discovered_at: "2026-06-27T00:08:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cardloop is a self-hosted, mobile-first kanban board where each card auto-runs a Claude agent to complete tasks autonomously. It integrates with existing Claude subscriptions for zero marginal cost per task and provides a PWA for seamless mobile access.

## Key Features
- Auto-runs Claude agents directly from kanban cards with isolated git worktrees for safe execution
- Mobile-first PWA for seamless access and live streaming agent output on phones
- Uses existing Claude subscription for zero per-token billing beyond the subscription cost
- Isolated worktree runs with a review gate (Check/Apply/Discard) for safe merges
- Deferred runs with auto-resume on rate limits, ensuring continuous agent operation

## Why It Matters for RAG Builders
Cardloop streamlines AI-driven task automation by turning kanban cards into autonomous agent sessions, enabling seamless, mobile-accessible project management with zero marginal cost per task.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 20+
Automated review identified **Node.js 20+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### aiohttp
Automated review identified **aiohttp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PWA (Progressive Web App)
Automated review identified **PWA (Progressive Web App)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSockets
Automated review identified **WebSockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
