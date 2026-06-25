---
title: "yoloshii/gigaxity-deep-research"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "OpenRouter", "Qwen3-30B-A3B-Thinking", "SearXNG", "Tavily", "LinkUp", "RRF (Reciprocal Rank Fusion)", "CRAG (Citation-aware RAG)", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["deep research", "multi-source synthesis", "MCP server", "citation binding", "reasoning models"]
source: "https://github.com/yoloshii/gigaxity-deep-research"
discovered_at: "2026-06-25T17:11:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Gigaxity Deep Research is an open-source deep research MCP server designed for integration with Claude Code, Hermes, Cursor, and other MCP-capable agents. It provides a multi-source synthesis pipeline with six MCP tools for search, research, discovery, synthesis, reasoning, and quick answers, powered by reasoning-tuned models like Qwen3-30B-A3B-Thinking via OpenRouter.

## Key Features
- Six MCP tools (search, research, ask, discover, synthesize, reason) for granular control over research workflows
- Multi-source search with RRF fusion across SearXNG, Tavily, LinkUp, and others
- Citation-aware synthesis with contradiction detection and quality gating
- Compatibility with reasoning-tuned models (Qwen3, DeepSeek-R1, etc.) via OpenAI-compatible endpoints
- REST API and MCP stdio server support for distributed or local deployments

## Why It Matters for RAG Builders
It provides a robust, citation-backed deep research pipeline that enables AI agents to perform accurate, multi-source synthesis with minimal hallucination, making it essential for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-30B-A3B-Thinking
Automated review identified **Qwen3-30B-A3B-Thinking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily
Automated review identified **Tavily** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LinkUp
Automated review identified **LinkUp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CRAG (Citation-aware RAG)
Automated review identified **CRAG (Citation-aware RAG)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
