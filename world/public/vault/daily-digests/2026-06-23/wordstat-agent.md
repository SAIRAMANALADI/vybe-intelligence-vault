---
title: puzanov/wordstat-agent
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- Yandex Cloud Search API
- Yandex Cloud AI Studio
- CLI
- Environment Variables
quality_score: 8
rag_relevance: 7
tags:
- Yandex Wordstat
- Search Trends
- API Integration
- AI Agents
- Trend Analysis
source: https://github.com/puzanov/wordstat-agent
discovered_at: '2026-06-23T13:43:45Z'
evaluated_by: mistral-small-latest
---

## Summary
A knowledge base and toolkit for interacting with the Yandex Wordstat API via Yandex Cloud Search API v2, providing trend analysis methodologies and a ready-to-use scanner script for AI agents.

## Key Features
- Comprehensive guide (AGENTS.md) for accessing and using Yandex Wordstat API, including common pitfalls and billing requirements
- CLI tool (scripts/wordstat.py) with commands for top queries, dynamics, regions, and niche trend scanning
- Methodology for calculating trends based on year-over-year share growth, accounting for seasonality and platform compression
- Ready-to-use `.env.example` template for secure API key and folder ID management
- Designed for seamless integration with AI agents (e.g., Claude Code, Cursor) to automate search trend analysis

## Why It Matters for RAG Builders
It provides critical infrastructure and guidance for AI agents to reliably interact with Yandex Wordstat API, enabling automated search trend analysis and volume tracking for RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Yandex Cloud Search API
Automated review identified **Yandex Cloud Search API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Yandex Cloud AI Studio
Automated review identified **Yandex Cloud AI Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Environment Variables
Automated review identified **Environment Variables** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
