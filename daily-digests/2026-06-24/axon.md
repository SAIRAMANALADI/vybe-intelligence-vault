---
title: "jmagar/axon"
category: "Orchestrator"
tech_stack: ["Rust", "Docker", "Docker Compose", "Qdrant", "Hugging Face TEI", "Qwen/Qwen3-Embedding-0.6B", "Gemini CLI", "SearXNG", "Tavily", "Chrome", "NVIDIA Container Toolkit"]
quality_score: 9
rag_relevance: 10
tags: ["RAG", "self-hosted", "vector database", "embedding", "MCP"]
source: "https://github.com/jmagar/axon"
discovered_at: "2026-06-24T18:54:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Axon is a self-hosted RAG stack designed for crawling, scraping, ingesting, embedding, searching, and querying indexed content. It provides a production-ready Docker Compose setup with Qdrant for vector storage, Hugging Face TEI for embeddings, and Chrome for JavaScript-heavy page rendering.

## Key Features
- End-to-end self-hosted RAG pipeline with Docker Compose deployment
- Hybrid search with dense and sparse vectors using Reciprocal Rank Fusion (RRF)
- Vertical extractors for structured data from sites like GitHub, PyPI, Reddit, and YouTube
- Normalized source planning for consistent chunking and metadata enrichment
- Web panel and MCP tooling for interactive and programmatic access

## Why It Matters for RAG Builders
Axon provides a turnkey, production-ready RAG stack that simplifies the deployment and management of end-to-end AI pipelines, making it essential for teams building scalable, self-hosted retrieval systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face TEI
Automated review identified **Hugging Face TEI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen/Qwen3-Embedding-0.6B
Automated review identified **Qwen/Qwen3-Embedding-0.6B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily
Automated review identified **Tavily** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome
Automated review identified **Chrome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVIDIA Container Toolkit
Automated review identified **NVIDIA Container Toolkit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
