---
title: "brokermr810/QuantDinger"
category: "Orchestrator"
tech_stack: ["Python", "Docker", "PostgreSQL", "Redis", "CCXT", "FastAPI", "React", "TypeScript", "MCP (Model Context Protocol)", "OAuth", "Celery", "GHCR (GitHub Container Registry)"]
quality_score: 9
rag_relevance: 8
tags: ["quantitative trading", "AI agent framework", "self-hosted", "multi-broker execution", "backtesting"]
source: "https://github.com/brokermr810/QuantDinger"
discovered_at: "2026-06-28T22:05:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
QuantDinger is an open-source, self-hosted AI infrastructure layer for quantitative trading that unifies research, strategy development, backtesting, paper/live execution, and monitoring into a single stack. It enables users to turn trading ideas into executable Python strategies with multi-LLM agent support and multi-broker connectivity.

## Key Features
- Unified workflow from AI research to live execution with audit logging
- Dual strategy runtimes: vectorized IndicatorStrategy and event-driven ScriptStrategy
- Multi-venue execution support (CCXT crypto, IBKR, Alpaca) with isolated multi-tenant sessions
- Agent Gateway integration for AI agents (Cursor, Claude Code) with paper-only trading by default
- Production-grade infrastructure with PostgreSQL 16, Redis 7, and Docker Compose deployment

## Why It Matters for RAG Builders
QuantDinger provides a critical orchestration layer for RAG/AI stack builders by enabling seamless integration of AI-driven trading strategies with robust backtesting, execution, and monitoring capabilities in a self-hosted environment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CCXT
Automated review identified **CCXT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GHCR (GitHub Container Registry)
Automated review identified **GHCR (GitHub Container Registry)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
