---
title: "Protocol-Wealth/nexus-core"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "FastMCP", "asyncpg", "httpx", "mypy", "ruff", "PostgreSQL", "Google Cloud Run", "Cloudflare", "yfinance", "CoinGecko", "Deribit", "DeBank", "Tatum", "QuantLib", "PyPortfolioOpt", "Riskfolio-Lib"]
quality_score: 9
rag_relevance: 8
tags: ["financial analysis", "MCP tools", "regime detection", "options pricing", "DeFi analytics"]
source: "https://github.com/Protocol-Wealth/nexus-core"
discovered_at: "2026-07-02T12:11:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Nexus Core is an open-source regime-adaptive financial analysis engine that exposes financial data, analytics, and MCP tools for AI clients like Claude, GPT, or Gemini. It provides real-time market data, EMF scoring, options pricing, LP analytics, and on-chain/DeFi insights via REST and MCP interfaces.

## Key Features
- Regime-adaptive financial analysis with 5 macroeconomic states (Growth, Transition, Hard Asset, Deflation, Repression)
- MCP tool orchestration enabling AI clients to access financial insights without domain-specific logic
- EMF durability scoring framework combining SEC EDGAR fundamentals, technicals, and regime alignment
- Exact LP analytics for Uniswap V3 and Aerodrome Slipstream positions with impermanent loss and fee calculations
- Comprehensive market, economic, and on-chain data APIs with real-time and historical endpoints

## Why It Matters for RAG Builders
Nexus Core provides regime-aware financial analysis and MCP tooling that enables AI agents to make contextually accurate decisions without requiring deep financial domain expertise.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncpg
Automated review identified **asyncpg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Run
Automated review identified **Google Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare
Automated review identified **Cloudflare** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yfinance
Automated review identified **yfinance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoinGecko
Automated review identified **CoinGecko** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deribit
Automated review identified **Deribit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeBank
Automated review identified **DeBank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tatum
Automated review identified **Tatum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QuantLib
Automated review identified **QuantLib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPortfolioOpt
Automated review identified **PyPortfolioOpt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Riskfolio-Lib
Automated review identified **Riskfolio-Lib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
