---
title: "Scrapeer/scrapeer-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Node.js", "REST API", "Visual Web Scraping"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "web scraping", "AI agent integration", "visual workflows", "browser automation"]
source: "https://github.com/Scrapeer/scrapeer-mcp-server"
discovered_at: "2026-06-28T18:09:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Scrapeer MCP Server enables AI agents (Claude Code, Codex, Cursor, VS Code Copilot) to interact with Scrapeer's visual web-scraping platform. It allows agents to run, monitor, and debug pre-built scraping workflows, manage flow definitions, and access structured scraping results via MCP tools.

## Key Features
- Run pre-built scraping flows from AI agents with structured output retrieval
- Inspect, validate, and modify flow definitions dynamically via MCP tools
- Optimistic concurrency control for safe concurrent edits between humans and AI agents
- Account management (credits, subscription, cloud run control) via MCP
- Dry-run validation for flow modifications before committing changes

## Why It Matters for RAG Builders
It bridges AI agents with reliable, pre-built web scraping workflows, enabling agents to leverage deterministic scraping without writing browser automation code.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Visual Web Scraping
Automated review identified **Visual Web Scraping** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
