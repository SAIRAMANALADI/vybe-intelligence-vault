---
title: "Focus-GTS/eds-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "Zod", "Fetch API", "Adobe Edge Delivery Services (EDS) APIs"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "Adobe Edge Delivery", "AI agent integration", "content management", "publishing automation"]
source: "https://github.com/Focus-GTS/eds-mcp-server"
discovered_at: "2026-06-30T13:13:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server designed to enable AI agents to interact with Adobe Edge Delivery Services (EDS) sites. It provides 20 tools for previewing, publishing, analyzing, and managing EDS content and infrastructure without requiring local AEM setups or additional dependencies.

## Key Features
- 20 built-in tools for EDS site management (preview, publish, unpublish, bulk operations, and more)
- Seamless integration with AI agents (Claude Code, Cursor, Copilot) via MCP
- Two authentication methods: browser-based OAuth and admin API keys
- Read-only tools for analytics (Core Web Vitals, 404s, experiments) and content queries
- Zero local AEM dependencies; operates entirely via EDS APIs

## Why It Matters for RAG Builders
It enables AI agents to directly manage and interact with Adobe Edge Delivery sites, streamlining content operations and automation without requiring manual intervention or complex setups.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fetch API
Automated review identified **Fetch API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Adobe Edge Delivery Services (EDS) APIs
Automated review identified **Adobe Edge Delivery Services (EDS) APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
