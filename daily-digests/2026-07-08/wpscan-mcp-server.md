---
title: "sjinks/wpscan-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Bun", "MCP (Model Context Protocol)", "WPScan API"]
quality_score: 7
rag_relevance: 6
tags: ["WordPress security", "MCP server", "vulnerability scanning", "API integration", "TypeScript"]
source: "https://github.com/sjinks/wpscan-mcp-server"
discovered_at: "2026-07-08T21:02:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server written in TypeScript that provides tools to interact with the WPScan API v3, enabling security vulnerability lookups for WordPress plugins, themes, core versions, and known vulnerabilities.

## Key Features
- Exposes WPScan API v3 tools via MCP for plugin, theme, and core version lookups
- Supports vulnerability lookups using WPVDB IDs
- Compatible with Node.js and Bun for runtime flexibility
- Generates TypeScript types from WPScan's OpenAPI spec
- Configurable via environment variables for API token management

## Why It Matters for RAG Builders
It provides a standardized way to integrate WordPress security scanning into AI workflows via MCP, enabling automated vulnerability detection for RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WPScan API
Automated review identified **WPScan API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
