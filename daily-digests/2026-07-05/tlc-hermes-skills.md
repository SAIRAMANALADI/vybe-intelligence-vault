---
title: "FXDavid-OffbeatForex/tlc-hermes-skills"
category: "Agent Framework"
tech_stack: ["Python", "Hermes Agent", "Shell (setup.sh)", "Git", "MetaTrader 5 (MT5)", "TradingView API", "OpenClaw"]
quality_score: 8
rag_relevance: 7
tags: ["technical analysis", "multi-school consensus", "Hermes Agent skills", "market analysis", "deterministic aggregation"]
source: "https://github.com/FXDavid-OffbeatForex/tlc-hermes-skills"
discovered_at: "2026-07-05T23:00:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A set of three Hermes Agent skills that implement the Trading Legends Council (TLC), where ten technical analysis schools (e.g., Wyckoff, Gann, Elliott) vote blindly on market charts to produce a consensus verdict. The skills automate setup, data fetching, and aggregation via a deterministic Chairman.

## Key Features
- Blind voting by ten technical analysis schools (Wyckoff, Gann, Elliott, etc.) on any market symbol and timeframe
- Deterministic Chairman aggregates votes into a single LONG/SHORT/NO_TRADE verdict without LLM bias
- Self-bootstrapping skills that clone the TLC engine and install dependencies on first run
- Supports MT5 (zero-config) and TradingView (via API key) for market data
- Community skills installable via Hermes Agent or OpenClaw with minimal setup

## Why It Matters for RAG Builders
It provides a structured, multi-school technical analysis consensus engine that can be integrated into AI-driven trading workflows for more reliable market insights.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell (setup.sh)
Automated review identified **Shell (setup.sh)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MetaTrader 5 (MT5)
Automated review identified **MetaTrader 5 (MT5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TradingView API
Automated review identified **TradingView API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
