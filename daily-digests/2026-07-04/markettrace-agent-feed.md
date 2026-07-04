---
title: "MarketTrace/markettrace-agent-feed"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "HTTP/JSON APIs", "OAuth", "Docker"]
quality_score: 8
rag_relevance: 9
tags: ["crypto market data", "perpetual futures", "AI agent tools", "market microstructure", "MCP server"]
source: "https://github.com/MarketTrace/markettrace-agent-feed"
discovered_at: "2026-07-04T06:48:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MarketTrace agent-feed provides a read-only, normalized cross-exchange market state for crypto perpetual futures, designed for AI agents. It offers real-time microstructure data (funding rates, OI, CVD, liquidations) with self-declared coverage and freshness metrics, enabling agents to interpret market conditions without predictions.

## Key Features
- Normalized cross-exchange market state snapshots (funding, OI, CVD, liquidations, order-book imbalance)
- Self-declared coverage and freshness for every metric to ensure transparency
- Historical conditional outcomes and base rates for informed decision-making
- Consolidated OHLCV candles across multiple venues for volatility and trend analysis
- Zero-dependency stdio bridge for local deployment with optional proxy to hosted MCP server

## Why It Matters for RAG Builders
It provides essential, normalized, and transparent crypto market microstructure data that AI agents can use to interpret market conditions without relying on predictions or opaque sources.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON APIs
Automated review identified **HTTP/JSON APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
