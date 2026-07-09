---
title: "jaypetez/glean"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Docker", "SQLite", "Ollama", "Anthropic", "OpenAI", "Svelte", "TypeScript", "YAML", "GitHub Actions", "CodeQL"]
quality_score: 9
rag_relevance: 8
tags: ["personal agent", "LLM pipeline", "multi-sink delivery", "self-hosted", "RAG workflow"]
source: "https://github.com/jaypetez/glean"
discovered_at: "2026-07-09T17:17:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
glean is a self-hosted, pluggable personal agent that aggregates and processes content from RSS, web scraping, search APIs, and other sources using LLMs. It deduplicates, ranks, summarizes, and delivers scheduled digests to multiple sinks like email, Telegram, Discord, Slack, and more.

## Key Features
- Pluggable architecture with support for custom sources, sinks, LLMs, and search backends via a four-layer plugin system
- Per-feed LLM dispatch and structured skills for JSON output extraction, enabling cost-optimized and task-specific processing
- Built-in web UI with live dashboard, visual editors, and API-first design for seamless integration and management
- Smart deduplication, ranking, and summarization pipeline with configurable schedules and failure-aware operations
- Cross-platform deployment with hardened releases, multi-arch containers, and GPU acceleration support

## Why It Matters for RAG Builders
glean streamlines the orchestration of RAG workflows by automating content aggregation, LLM-based processing, and multi-channel delivery, reducing the need for custom scripts and enabling scalable, self-hosted AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic
Automated review identified **Anthropic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Svelte
Automated review identified **Svelte** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CodeQL
Automated review identified **CodeQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
