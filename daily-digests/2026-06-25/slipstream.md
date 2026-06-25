---
title: "tathagat22/slipstream"
category: "Orchestrator"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Node.js", "Redis (Upstash)", "Firecrawl (for SPA rendering)", "Vercel (for deployment)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "token optimization", "shared cache", "web distillation", "AI agent collaboration"]
source: "https://github.com/tathagat22/slipstream"
discovered_at: "2026-06-25T21:29:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Slipstream is a hosted MCP server that distills web content into token-optimal markdown, caches it content-addressed, and shares the cache across AI agents to reduce token usage by 73-89% per fetch. It enables cross-agent collaboration via collective notes, heading-level diffs, and adaptive TTL caching.

## Key Features
- Content-addressed caching with per-section hashing for efficient delta updates
- Cross-agent shared cache reducing token usage by 73-89% per fetch
- Collective memory via version-pinned notes and trust-ranking system
- Adaptive TTL caching based on actual content change frequency
- Don't-bother index for avoiding dead-ends like paywalls and SPA traps

## Why It Matters for RAG Builders
Slipstream drastically reduces token costs for RAG systems by sharing distilled web content across agents, enabling collective memory and efficient updates for live web content.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis (Upstash)
Automated review identified **Redis (Upstash)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firecrawl (for SPA rendering)
Automated review identified **Firecrawl (for SPA rendering)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel (for deployment)
Automated review identified **Vercel (for deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
