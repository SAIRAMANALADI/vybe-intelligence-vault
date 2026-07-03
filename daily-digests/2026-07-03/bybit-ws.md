---
title: "poliakarmai/bybit-ws"
category: "Tooling"
tech_stack: ["Python", "Bybit API", "SQLite", "asyncio", "Prometheus", "Telegram Bot API", "ntfy", "JSON-RPC", "Docker", "systemd"]
quality_score: 9
rag_relevance: 7
tags: ["trading-engine", "automated-trading", "bybit-api", "mcp-server", "ai-native"]
source: "https://github.com/poliakarmai/bybit-ws"
discovered_at: "2026-07-03T19:12:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An AI-native trading engine for Bybit that implements a Bollinger Grid strategy with automated entries, ATR-adaptive stop-loss/take-profit, trailing mechanisms, DCA, self-learning, and post-trade cluster analysis. Includes an MCP server for AI agents and real-time alerts via Telegram/ntfy.

## Key Features
- Bollinger Grid-based trading with multi-tier strategies (LONG, SHORT, JUNK, x10 leverage)
- ATR-adaptive stop-loss and take-profit with dynamic position sizing
- Self-learning and post-trade cluster analysis for performance optimization
- MCP server for AI agent integration (Claude Code, Cursor, etc.)
- Real-time alerts via Telegram/ntfy and Prometheus metrics

## Why It Matters for RAG Builders
Provides a robust, AI-integrated trading automation framework with modular components and real-time analytics, essential for building adaptive RAG systems in financial AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bybit API
Automated review identified **Bybit API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ntfy
Automated review identified **ntfy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
