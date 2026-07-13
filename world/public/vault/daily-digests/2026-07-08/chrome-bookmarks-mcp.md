---
title: "JoshuaRamirez/chrome-bookmarks-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "WebSocket", "Chrome Extensions API", "esbuild"]
quality_score: 8
rag_relevance: 7
tags: ["bookmark management", "MCP server", "Chrome extension", "automation", "data synchronization"]
source: "https://github.com/JoshuaRamirez/chrome-bookmarks-mcp"
discovered_at: "2026-07-08T21:02:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server and Chrome extension that enables programmatic management of Chrome's synced bookmarks from tools like Claude Code. It allows listing, searching, adding, moving, deduplicating, and reorganizing bookmarks while ensuring changes sync across devices via Chrome's official API.

## Key Features
- 17 MCP tools for comprehensive bookmark manipulation (add, move, search, deduplicate, etc.)
- Direct integration with Chrome's synced bookmarks via official API
- Local WebSocket bridge for secure, low-latency communication
- Supports batch operations and dry-run modes for safety
- Portable JSON export/import for backup and restoration

## Why It Matters for RAG Builders
It enables AI agents to programmatically manage and synchronize Chrome bookmarks, which is critical for workflow automation and data organization in RAG pipelines.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extensions API
Automated review identified **Chrome Extensions API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### esbuild
Automated review identified **esbuild** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
