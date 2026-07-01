---
title: "KnockOutEZ/wigolo"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "SQLite", "BM25 (keyword search)", "sqlite-vec (vector embeddings)", "BGE-small (embeddings model)", "MiniLM (cross-encoder reranker)", "Puppeteer (headless browser)", "TLS impersonation", "Mermaid.js (architecture diagrams)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "local-first", "web retrieval", "agent integration", "privacy-focused"]
source: "https://github.com/KnockOutEZ/wigolo"
discovered_at: "2026-07-01T17:51:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
wigolo is a local-first MCP server that provides AI coding agents with a unified interface for web-related tasks like search, fetch, crawl, extract, cache, and research. It operates entirely on-device with no API keys or cloud dependencies, ensuring privacy and cost efficiency.

## Key Features
- 8 built-in tools for web intelligence (search, fetch, crawl, extract, cache, find_similar, research, agent) with transparent scoring and budget-aware output
- No API keys or cloud dependencies by default; optional LLM integration for synthesis (Gemini, Anthropic, OpenAI, Ollama, etc.)
- Local caching with hybrid keyword and vector search (BM25 + sqlite-vec) for instant re-querying at zero cost
- Per-domain adaptive fetch routing (HTTP → TLS impersonation → headless browser) with anti-bot challenge handling
- Honest, explainable results with per-result scoring breakdowns and degraded state visibility

## Why It Matters for RAG Builders
wigolo provides a critical local-first, privacy-preserving layer for RAG pipelines, enabling agents to perform web retrieval, caching, and synthesis without cloud dependencies or metered costs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (keyword search)
Automated review identified **BM25 (keyword search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec (vector embeddings)
Automated review identified **sqlite-vec (vector embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-small (embeddings model)
Automated review identified **BGE-small (embeddings model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniLM (cross-encoder reranker)
Automated review identified **MiniLM (cross-encoder reranker)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Puppeteer (headless browser)
Automated review identified **Puppeteer (headless browser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS impersonation
Automated review identified **TLS impersonation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (architecture diagrams)
Automated review identified **Mermaid.js (architecture diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
