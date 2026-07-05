---
title: "FeanorsCodeSL/thorondor"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Docker", "SearXNG", "Crawl4AI", "BGE-M3", "BGE-reranker-v2-m3", "llama.cpp", "PostgreSQL", "PowerShell", "Bash"]
quality_score: 9
rag_relevance: 10
tags: ["semantic search", "self-hosted", "RAG pipeline", "agent tools", "data sovereignty"]
source: "https://github.com/FeanorsCodeSL/thorondor"
discovered_at: "2026-07-05T11:31:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Thorondor is a self-hosted, data-sovereign semantic web-search service designed for agents, replacing hosted search APIs with an on-premises pipeline. It integrates SearXNG for URL discovery, Crawl4AI for crawling, and a custom semantic chunker with BGE-M3 embeddings, exposing results via REST and MCP with cited evidence.

## Key Features
- Multi-engine URL discovery via SearXNG with domain filtering and safety checks
- Concurrent JavaScript-capable crawling with Crawl4AI and content deduplication
- First-party semantic chunker (ClusterSemanticChunker) with BGE-M3 embeddings for optimal boundaries
- Batched reranking with BGE-reranker-v2-m3 for relevance scoring and token-budget assembly
- Dual REST and MCP interfaces for seamless agent integration with cited evidence

## Why It Matters for RAG Builders
Thorondor provides a critical self-hosted alternative to proprietary web search APIs, enabling RAG builders to maintain data sovereignty while integrating high-quality, cited evidence into their pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crawl4AI
Automated review identified **Crawl4AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3
Automated review identified **BGE-M3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-reranker-v2-m3
Automated review identified **BGE-reranker-v2-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
