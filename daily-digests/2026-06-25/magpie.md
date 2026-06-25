---
title: "randileeharper/magpie"
category: "Agent Framework"
tech_stack: ["Python", "A2A (Agent-to-Agent) Protocol", "OpenAI-compatible LLM endpoints", "Crawl4AI", "SQLite", "Exa MCP (Search Provider)", "Neon Hail (Weather API)", "AniList (Anime Data API)", "RSS/Atom Feeds (News)", "FastAPI (A2A Server)"]
quality_score: 9
rag_relevance: 10
tags: ["information retrieval", "agent delegation", "bounded web research", "grounded answers", "A2A protocol"]
source: "https://github.com/randileeharper/magpie"
discovered_at: "2026-06-25T19:51:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Magpie is a natural-language information retrieval agent designed for agent-to-agent delegation, providing bounded web research, specialized API routing, and grounded answers with structured references. It exposes an A2A interface and a local CLI for direct queries, optimizing workflows for smaller local models.

## Key Features
- Delegates information retrieval tasks from upstream agents via A2A interface
- Routes queries to specialized APIs (weather, anime, news) or general web search
- Returns compact, structured answers with grounded references and citations
- Implements bounded incremental lookup with strict budget limits (queries, sources, evidence)
- Caches sources and answers in SQLite for reuse, with conservative cache policies

## Why It Matters for RAG Builders
Magpie streamlines RAG pipelines by offloading information retrieval to a dedicated agent, reducing context overload for smaller models while ensuring grounded, structured answers with citations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A (Agent-to-Agent) Protocol
Automated review identified **A2A (Agent-to-Agent) Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible LLM endpoints
Automated review identified **OpenAI-compatible LLM endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crawl4AI
Automated review identified **Crawl4AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Exa MCP (Search Provider)
Automated review identified **Exa MCP (Search Provider)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neon Hail (Weather API)
Automated review identified **Neon Hail (Weather API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AniList (Anime Data API)
Automated review identified **AniList (Anime Data API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RSS/Atom Feeds (News)
Automated review identified **RSS/Atom Feeds (News)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (A2A Server)
Automated review identified **FastAPI (A2A Server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
