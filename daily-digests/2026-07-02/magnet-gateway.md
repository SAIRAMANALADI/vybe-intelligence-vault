---
title: "helinakdogan/magnet-gateway"
category: "Tooling"
tech_stack: ["Python", "Redis", "Qdrant", "Neo4j", "FastAPI", "MCP (Model Context Protocol)", "OpenAI API", "Anthropic API", "Google Gemini API"]
quality_score: 9
rag_relevance: 10
tags: ["AI memory", "persistent context", "behavioral learning", "cross-session LLM", "MCP server"]
source: "https://github.com/helinakdogan/magnet-gateway"
discovered_at: "2026-07-02T22:12:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Magnet Gateway is a memory layer for AI agents that enables persistent, cross-session learning without requiring code changes. It captures user behavior, preferences, and corrections to improve future interactions while supporting self-hosted deployment and integration with major LLM providers.

## Key Features
- Zero-code integration via proxy mode for OpenAI, Anthropic, and Google Gemini clients
- Multi-layered memory system (behavioral, episodic, knowledge) with configurable decay rates
- Cross-user learning through anonymous pattern consolidation for improved cold starts
- Self-hosted MCP server and SDK for deep customization and data control
- Supports real-time corrections, rejections, and implicit behavioral signals for dynamic memory updates

## Why It Matters for RAG Builders
Magnet Gateway eliminates the need for manual RAG setup or retraining by providing an out-of-the-box memory layer that learns from user interactions, enabling AI systems to retain context and improve responses across sessions without additional infrastructure complexity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j
Automated review identified **Neo4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Gemini API
Automated review identified **Google Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
