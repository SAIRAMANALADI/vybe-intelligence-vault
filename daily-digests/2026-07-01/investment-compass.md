---
title: "solonhlx-prog/investment-compass"
category: "Agent Framework"
tech_stack: ["Python", "Tushare API", "Markdown", "Parquet", "AI Agent Frameworks (Claude Code, Cursor, Copilot, CrewAI, LangChain, OpenAI Agents SDK)"]
quality_score: 8
rag_relevance: 7
tags: ["AI Agent", "Investment Analysis", "Stock Selection", "Market Timing", "Risk Management"]
source: "https://github.com/solonhlx-prog/investment-compass"
discovered_at: "2026-07-01T15:38:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A platform-agnostic AI Agent skill package for A-share retail investors, providing market analysis, stock evaluation, and stock selection capabilities through a three-layer architecture (timing, allocation, risk control, and execution).

## Key Features
- Three-layer architecture (timing → allocation → risk control + execution) for structured investment decision-making
- Modular knowledge system with six domains (timing, allocation, risk, execution, indicators, trend-system) for flexible loading
- Multi-tier data sourcing (Tushare API → local Parquet → web search) for adaptability to different environments
- Platform-agnostic design compatible with major AI Agent frameworks (Claude Code, Cursor, CrewAI, etc.)
- Built-in risk management and execution discipline rules (e.g., stop-loss, position sizing, trend confirmation)

## Why It Matters for RAG Builders
It provides a structured, modular framework for AI agents to perform investment research and decision-making, bridging the gap between raw data and actionable insights for retail investors.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tushare API
Automated review identified **Tushare API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parquet
Automated review identified **Parquet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AI Agent Frameworks (Claude Code, Cursor, Copilot, CrewAI, LangChain, OpenAI Agents SDK)
Automated review identified **AI Agent Frameworks (Claude Code, Cursor, Copilot, CrewAI, LangChain, OpenAI Agents SDK)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
