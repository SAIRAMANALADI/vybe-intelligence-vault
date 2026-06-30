---
title: "hrygo/hotplex"
category: "Orchestrator"
tech_stack: ["Go", "WebSocket", "SQLite", "PostgreSQL", "Next.js", "TypeScript", "Python", "Java", "Prometheus", "OpenTelemetry", "Docker"]
quality_score: 9
rag_relevance: 9
tags: ["AI Gateway", "Multi-Platform", "Agent Orchestration", "WebSocket Protocol", "Session Management"]
source: "https://github.com/hrygo/hotplex"
discovered_at: "2026-06-30T13:10:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HotPlex Gateway is a high-performance Go-based WebSocket gateway that unifies access to AI coding agents across multiple platforms (Web, Slack, Feishu) through a single AEP v1 protocol interface. It abstracts agent differences, provides session management, and includes embedded UI components for administration and chat.

## Key Features
- Unified WebSocket gateway (AEP v1) for any AI coding agent with backpressure-aware streaming and automatic LLM retries
- Pluggable worker backends (Claude Code, OpenCode Server, ACP, Codex CLI) with 5-level config fallback
- Multi-platform delivery (Slack, Feishu, Web) with zero agent code changes and embedded UI components
- AI-native cron scheduler for autonomous task creation from natural language with lifecycle controls
- Enterprise-grade security with SSRF protection, API key authentication, and end-to-end observability

## Why It Matters for RAG Builders
HotPlex Gateway simplifies the integration of AI coding agents into multi-platform environments by providing a unified, protocol-agnostic interface, reducing complexity for RAG builders who need seamless agent orchestration and cross-platform accessibility.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
