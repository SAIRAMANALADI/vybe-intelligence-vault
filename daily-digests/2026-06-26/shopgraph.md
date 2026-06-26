---
title: "laundromatic/shopgraph"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Schema.org/JSON-LD", "LLM (Gemini API)", "Playwright (headless browser)", "Stripe API", "Redis (Upstash)", "REST API", "MCP Server"]
quality_score: 9
rag_relevance: 8
tags: ["e-commerce extraction", "per-field confidence scoring", "data structuring", "MCP server", "Universal Commerce Protocol"]
source: "https://github.com/laundromatic/shopgraph"
discovered_at: "2026-06-26T22:10:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ShopGraph is an extraction API that converts unstructured e-commerce data (URLs or HTML) into structured JSON with per-field confidence scoring and extraction provenance. It supports Schema.org parsing, LLM inference, and headless browser rendering, with a free tier of 50 calls/month.

## Key Features
- Per-field confidence scoring and extraction provenance for every extracted field
- Multi-tier extraction pipeline (Schema.org → LLM → headless browser)
- Free tier with 50 calls/month and pay-per-call options
- Supports both REST API and MCP server for agent integration
- Validates output with UCP schema (Universal Commerce Protocol)

## Why It Matters for RAG Builders
ShopGraph provides critical data structuring and confidence scoring for e-commerce RAG pipelines, ensuring high-quality, provenance-tracked product data extraction.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Schema.org/JSON-LD
Automated review identified **Schema.org/JSON-LD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Gemini API)
Automated review identified **LLM (Gemini API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright (headless browser)
Automated review identified **Playwright (headless browser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe API
Automated review identified **Stripe API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis (Upstash)
Automated review identified **Redis (Upstash)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
