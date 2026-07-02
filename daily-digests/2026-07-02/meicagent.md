---
title: "joncovington/MEICAgent"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "tastytrade API", "SQLite", "Pytest", "pytz"]
quality_score: 8
rag_relevance: 6
tags: ["options trading", "AI agent", "0DTE strategies", "tastytrade", "autonomous trading"]
source: "https://github.com/joncovington/MEICAgent"
discovered_at: "2026-07-02T17:42:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MEICAgent is an AI-driven trading agent that autonomously executes Multiple Entry Iron Condor (MEIC) strategies for 0DTE options using the tastytrade brokerage API and Claude Code. It dynamically assesses market conditions, makes entry/stop decisions, and executes trades while logging actions in plain English.

## Key Features
- AI-driven decision-making for 0DTE options trading with dynamic entry/stop logic
- Supports concurrent trading across multiple index/equity symbols with shared risk budget
- Real-time market condition assessment and plain English logging of actions
- Configurable via JSON with no hardcoded contract parameters
- Local dashboard for monitoring and EOD reporting

## Why It Matters for RAG Builders
It provides a production-ready framework for AI-driven autonomous trading of high-risk 0DTE options, demonstrating real-world integration of AI decision-making with live brokerage APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tastytrade API
Automated review identified **tastytrade API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytz
Automated review identified **pytz** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
