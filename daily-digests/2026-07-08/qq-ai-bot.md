---
title: "happysnaker/qq-ai-bot"
category: "Orchestrator"
tech_stack: ["Node.js", "TypeScript", "Docker", "OneBot 11", "ACP (Agent Client Protocol)", "Prometheus", "GitHub Actions", "PostgreSQL", "Redis"]
quality_score: 9
rag_relevance: 8
tags: ["QQ bot", "AI bridge", "OneBot 11", "ACP protocol", "self-hosted"]
source: "https://github.com/happysnaker/qq-ai-bot"
discovered_at: "2026-07-08T19:16:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-grade, self-hosted QQ ↔ AI bridge that integrates OneBot 11-compatible QQ clients (e.g., NapCat, LLOneBot) with ACP-compatible agents, enabling persistent sessions, progress streaming, and metrics for AI bot deployments.

## Key Features
- OneBot 11 forward/reverse WebSocket integration for QQ clients like NapCat and LLOneBot
- ACP-compatible agent runtime for connecting local or self-hosted AI models (e.g., DeepSeek)
- Persistent session management with support for file, Redis, and PostgreSQL stores
- Real-time progress streaming of AI responses back to QQ chats
- Built-in metrics and observability (Prometheus-style `/metrics`, latency histograms)

## Why It Matters for RAG Builders
It provides a critical integration layer for RAG/AI stacks by bridging QQ communication with ACP-compatible agents, enabling seamless, production-ready AI bot deployments with session persistence and progress tracking.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OneBot 11
Automated review identified **OneBot 11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Client Protocol)
Automated review identified **ACP (Agent Client Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
