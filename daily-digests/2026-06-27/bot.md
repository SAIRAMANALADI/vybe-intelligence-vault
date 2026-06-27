---
title: "adiiaot/bot"
category: "Tooling"
tech_stack: ["Python 3.12", "FastAPI", "uvicorn", "python-telegram-bot", "TradingView API (RapidAPI)", "Nvidia NIM (Llama Vision Models)", "Firestore (Firebase)", "Railway"]
quality_score: 8
rag_relevance: 6
tags: ["trading signals", "multi-timeframe analysis", "AI-powered chart analysis", "Telegram bot", "FastAPI"]
source: "https://github.com/adiiaot/bot"
discovered_at: "2026-06-27T15:14:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A trading signal generator for XAU/USD that combines TradingView market data with Nvidia Vision AI for chart analysis, delivering signals via Telegram and a FastAPI web API. It implements a multi-timeframe framework to identify high-probability trading opportunities.

## Key Features
- 4-timeframe Mr PFX framework for XAU/USD signal generation (1H/4H trend, 15M levels, 5M pullback, 1M entry)
- Dual verification system combining TradingView data with Nvidia Vision AI for confidence scoring
- Telegram bot with interactive commands (/signal, /analyze, /log_trade, /stats)
- REST API endpoints for signal retrieval, trade logging, and statistics via FastAPI
- Trade logging with PnL calculation and streak tracking using Firestore

## Why It Matters for RAG Builders
It provides a practical pipeline for integrating AI-driven market analysis with structured trading strategies, useful for building RAG systems that require real-time financial data and multi-modal verification.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvicorn
Automated review identified **uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-telegram-bot
Automated review identified **python-telegram-bot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TradingView API (RapidAPI)
Automated review identified **TradingView API (RapidAPI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nvidia NIM (Llama Vision Models)
Automated review identified **Nvidia NIM (Llama Vision Models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firestore (Firebase)
Automated review identified **Firestore (Firebase)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Railway
Automated review identified **Railway** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
