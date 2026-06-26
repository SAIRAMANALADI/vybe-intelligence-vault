---
title: "timescale/tiger-slack"
category: "Orchestrator"
tech_stack: ["Python", "TypeScript", "TimescaleDB", "Slack API", "Docker", "MCP (Model Context Protocol)", "WebSocket", "PostgreSQL", "Logfire (Observability)"]
quality_score: 9
rag_relevance: 8
tags: ["conversational memory", "MCP server", "Slack integration", "real-time data ingestion", "AI assistant"]
source: "https://github.com/timescale/tiger-slack"
discovered_at: "2026-06-26T20:34:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tiger Slack enables AI Slack bots to understand and engage with team conversations by providing real-time access to Slack message history and context through an MCP server. It powers contextual AI assistants like Eon to reference past discussions, ongoing projects, and team dynamics.

## Key Features
- Real-time Slack message and event ingestion via WebSocket and historical exports
- TimescaleDB backend optimized for time-series data with compression and efficient querying
- MCP server providing AI-accessible APIs for structured Slack data retrieval and analysis
- Full conversational context awareness including threading, user references, and channel dynamics
- Observability stack with distributed tracing, metrics, and error tracking via Logfire

## Why It Matters for RAG Builders
It enables AI agents to maintain contextual awareness of Slack conversations, making them more effective at understanding team dynamics and past decisions for RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TimescaleDB
Automated review identified **TimescaleDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Logfire (Observability)
Automated review identified **Logfire (Observability)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
