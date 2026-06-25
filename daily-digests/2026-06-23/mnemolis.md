---
title: "immortalbob/Mnemolis"
category: "Orchestrator"
tech_stack: ["Python", "Docker", "FastAPI", "SQLite", "LLM Integration", "APScheduler", "REST API", "MCP Server", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["knowledge fusion", "self-hosted", "multi-source routing", "MCP server", "homelab"]
source: "https://github.com/immortalbob/Mnemolis"
discovered_at: "2026-06-23T19:13:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemolis is a self-hosted local knowledge search API designed for homelabs, routing and fusing queries across multiple offline and live sources like Kiwix, FreshRSS, Open-Meteo, and Home Assistant. It exposes both REST and MCP server interfaces for seamless integration with clients such as Open WebUI and Home Assistant.

## Key Features
- Unified API for routing queries to multiple knowledge sources (offline and live)
- Smart fusion of results from multiple sources with descriptive headers to prevent cross-source inference errors
- Query decomposition for handling complex or multi-intent requests
- Conditional query detection for structured binary signals (e.g., uptime, weather conditions)
- Snapshot engine for tracking changes over time and generating summaries of what changed

## Why It Matters for RAG Builders
Mnemolis simplifies the integration of diverse knowledge sources into RAG pipelines by providing a unified, self-hosted API that handles routing, fusion, and conditional logic, reducing complexity for AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration
Automated review identified **LLM Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APScheduler
Automated review identified **APScheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
