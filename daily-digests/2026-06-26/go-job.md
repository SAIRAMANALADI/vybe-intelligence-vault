---
title: "anatolykoptev/go-job"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "LLM APIs (Gemini/OpenAI-compatible)", "Redis", "PostgreSQL", "SearXNG", "HTML scraping", "GraphQL", "JSON-LD", "systemd"]
quality_score: 9
rag_relevance: 8
tags: ["job search", "MCP server", "remote work", "freelance", "LLM integration"]
source: "https://github.com/anatolykoptev/go-job"
discovered_at: "2026-06-26T10:22:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server written in Go that provides structured job, remote work, and freelance search capabilities across major platforms. It exposes four MCP tools for job discovery, matching, and analysis with advanced filtering and deduplication.

## Key Features
- Four dedicated MCP tools for job, remote work, freelance, and resume matching searches
- Advanced filtering (experience, salary, remote status, job type, and more)
- Deduplication and canonical job key normalization for clean results
- Jaccard keyword matching for resume-to-job scoring
- Spillover storage for large payloads with Postgres-backed oversize management

## Why It Matters for RAG Builders
It provides a structured, scalable way to integrate job search and matching capabilities into AI workflows, enabling RAG systems to fetch and analyze real-time job data efficiently.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Gemini/OpenAI-compatible)
Automated review identified **LLM APIs (Gemini/OpenAI-compatible)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML scraping
Automated review identified **HTML scraping** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-LD
Automated review identified **JSON-LD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
