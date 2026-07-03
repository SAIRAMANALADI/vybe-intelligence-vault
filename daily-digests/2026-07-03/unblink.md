---
title: "ChristopherDavenport/unblink"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "HTML5 Parsing", "JavaScript Engine (pure Go)", "Docker", "Makefile"]
quality_score: 9
rag_relevance: 10
tags: ["web scraping", "AI content extraction", "MCP server", "headless browser", "token optimization"]
source: "https://github.com/ChristopherDavenport/unblink"
discovered_at: "2026-07-03T04:03:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
unblink is a pure-Go web browser designed to expose structured web information to AI models without visual rendering. It fetches, parses, and reduces web pages to clean, token-budgeted Markdown over the Model Context Protocol (MCP), enabling AI agents to consume web content efficiently.

## Key Features
- Pure-Go implementation (no cgo, no Chromium) with lightweight static binary (~36 MB)
- Optional JavaScript rendering for SPAs (React, Vue, Svelte, etc.) via pure-Go engine
- MCP-compliant tooling for structured web interaction (read, browse, forms, links, etc.)
- Session management with cookie persistence and live runtime for stateful interactions
- SSRF protection, request budgeting, and error handling tailored for AI workflows

## Why It Matters for RAG Builders
It provides a lightweight, AI-optimized way to extract and structure web content for RAG pipelines without the overhead of headless browsers.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML5 Parsing
Automated review identified **HTML5 Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript Engine (pure Go)
Automated review identified **JavaScript Engine (pure Go)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Makefile
Automated review identified **Makefile** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
