---
title: "n24q02m/wet-mcp"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SearXNG", "Qwen3 (Embedding/Reranking)", "Litellm", "Docker", "Cloudflare Workers", "OAuth", "Semantic Release"]
quality_score: 9
rag_relevance: 10
tags: ["web scraping", "content extraction", "AI agents", "MCP server", "documentation search"]
source: "https://github.com/n24q02m/wet-mcp"
discovered_at: "2026-07-05T13:26:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WET-MCP is an open-source Model Context Protocol (MCP) server that provides AI agents with web search, content extraction, and library documentation capabilities. It supports zero-config local operations or cloud-backed enhancements, enabling agents to perform research, extract structured data, and interact with web content without API keys.

## Key Features
- Multi-strategy web scraping with anti-bot evasion and 5-tier escalation (basic HTTP to headless browsers)
- Library documentation search with version-aware, hybrid retrieval and token-capped queries
- Structured content extraction (Markdown, JSON-LD, code blocks) with smart chunking and batch processing
- Zero-config local operation with optional cloud model chains for embeddings, reranking, and LLM synthesis
- Cross-machine synchronization of indexed docs via Google Drive OAuth

## Why It Matters for RAG Builders
WET-MCP is essential for AI agents requiring reliable, scalable, and configurable web research and content extraction capabilities, reducing dependency on external APIs while maintaining high performance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3 (Embedding/Reranking)
Automated review identified **Qwen3 (Embedding/Reranking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Litellm
Automated review identified **Litellm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Release
Automated review identified **Semantic Release** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
