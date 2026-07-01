---
title: "maxylev/searchfetch"
category: "Tooling"
tech_stack: ["Python", "Node.js", "C++", "Model Context Protocol (MCP)", "Puppeteer", "Playwright", "DuckDuckGo API", "Google Search API", "Markdown", "JSON"]
quality_score: 9
rag_relevance: 9
tags: ["web scraping", "MCP server", "stealth browsing", "content extraction", "AI agent integration"]
source: "https://github.com/maxylev/searchfetch"
discovered_at: "2026-07-01T00:06:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A fault-tolerant MCP server for stealth web searching and content fetching, designed for AI agents. It uses a stealth browser engine to fetch pages, handle SPAs, and convert content into token-optimized Markdown while minimizing bot detection risks.

## Key Features
- Stealth engine with CloakBrowser C++ patches and human-like interaction patterns to avoid bot detection
- Fault-tolerant browser sessions with auto-healing and network-level blocking of tracking scripts
- Token-optimized Markdown output by stripping bloat (images, scripts, styles) before conversion
- Dual runtime support via zero-install Python (`uvx`) and Node.js (`npx`) execution
- Template-driven extraction for structured data from common platforms (GitHub, npm, PyPI, etc.)

## Why It Matters for RAG Builders
It enables AI agents to reliably fetch and extract clean, structured content from the web without triggering bot detection, making it essential for RAG pipelines that require up-to-date or dynamic data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C++
Automated review identified **C++** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Puppeteer
Automated review identified **Puppeteer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo API
Automated review identified **DuckDuckGo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Search API
Automated review identified **Google Search API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
