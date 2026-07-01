---
title: "sundeep-dayalan/sentient-trader"
category: "Orchestrator"
tech_stack: ["Python", "LangGraph", "FastAPI", "React", "Supabase", "Redis/Valkey", "Alpaca API", "Docker", "PostgreSQL", "Pydantic"]
quality_score: 9
rag_relevance: 7
tags: ["multi-agent systems", "paper trading", "auditable AI", "real-time decision making", "risk-gated automation"]
source: "https://github.com/sundeep-dayalan/sentient-trader"
discovered_at: "2026-07-01T15:41:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sentient Trader is an autonomous AI paper-trading system where a sequential four-agent LLM committee debates market headlines, applies deterministic risk gates, and executes trades only when conviction, risk, and quality thresholds are met. It provides full auditability with replayable decision traces and a live dashboard for real-time observability.

## Key Features
- Sequential four-agent LLM debate with structured reasoning and disagreement
- Deterministic pre-screening and risk gates to filter low-conviction signals
- Full audit trail with replayable decision traces for every trade
- Redis Streams pipeline for at-least-once delivery and fault tolerance
- Live dashboard with real-time signal feed, PnL tracking, and system status

## Why It Matters for RAG Builders
It demonstrates how to build auditable, multi-agent AI systems with risk-gated automation for real-time decision-making, critical for RAG builders integrating agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis/Valkey
Automated review identified **Redis/Valkey** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alpaca API
Automated review identified **Alpaca API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
