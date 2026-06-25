---
title: "MangroveTechnologies/mangrove-agent"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "APScheduler", "SQLite", "MangroveMarkets SDK", "MangroveAI API", "Claude Code", "Docker", "Git", "VSCode"]
quality_score: 9
rag_relevance: 7
tags: ["AI trading", "autonomous agents", "MCP integration", "cron execution", "audit logging"]
source: "https://github.com/MangroveTechnologies/mangrove-agent"
discovered_at: "2026-06-25T19:52:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An autonomous AI trading agent that converts natural-language trading goals into executable strategies, executes them via cron jobs, and logs all actions for audit. It integrates with MangroveMarkets for live swaps and MangroveAI API for strategy generation, with full local key management and SQLite audit trails.

## Key Features
- Natural-language strategy generation via MangroveAI API with backtesting and ranking
- Cron-driven execution for both paper and live trading with identical evaluator paths
- Client-side key management with local Fernet encryption and OS keychain integration
- Full audit trail via SQLite logging for all evaluations, trades, and actions
- Dual protocol support (MCP and REST API) with 95+ tools for trading, market data, and DeFi operations

## Why It Matters for RAG Builders
It provides a turnkey framework for building and deploying autonomous AI trading agents with robust local key management and audit capabilities, critical for RAG builders needing reliable, auditable AI-driven execution pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APScheduler
Automated review identified **APScheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MangroveMarkets SDK
Automated review identified **MangroveMarkets SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MangroveAI API
Automated review identified **MangroveAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VSCode
Automated review identified **VSCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
