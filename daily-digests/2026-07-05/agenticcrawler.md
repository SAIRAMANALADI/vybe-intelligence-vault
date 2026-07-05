---
title: "Mingye-Lu/AgenticCrawler"
category: "Agent Framework"
tech_stack: ["Rust", "Chromium", "DevTools Protocol", "LLM APIs (25 providers)", "Model Context Protocol (MCP)", "CloakBrowser (stealth browser)", "Node.js (for browser features)"]
quality_score: 9
rag_relevance: 8
tags: ["browser automation", "web scraping", "LLM agent", "DevTools integration", "MCP server"]
source: "https://github.com/Mingye-Lu/AgenticCrawler"
discovered_at: "2026-07-05T06:37:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgenticCrawler is a Rust-based browser automation agent that navigates, interacts with, and observes web pages with full DevTools capabilities. It combines deterministic scripting with LLM-powered navigation to extract structured data, audit accessibility, and profile performance from web applications.

## Key Features
- Single Rust binary with no runtime dependencies (except Chromium)
- Full DevTools observability: network requests, console errors, performance profiling, accessibility audits
- 25 LLM provider integrations for goal-driven navigation and interaction
- Deterministic scripting layer for zero-LLM-call automation
- Sub-agent parallelism with independent browser tabs and state management

## Why It Matters for RAG Builders
It provides a unified, open-source framework for building autonomous web agents with deep observability and multi-provider LLM integration, reducing vendor lock-in and infrastructure complexity for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DevTools Protocol
Automated review identified **DevTools Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (25 providers)
Automated review identified **LLM APIs (25 providers)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CloakBrowser (stealth browser)
Automated review identified **CloakBrowser (stealth browser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (for browser features)
Automated review identified **Node.js (for browser features)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
