---
title: "davidmosiah/delx-mcp-server"
category: "Tooling"
tech_stack: ["Node.js", "MCP (Model Context Protocol)", "JavaScript", "npm", "stdio transport"]
quality_score: 9
rag_relevance: 7
tags: ["MCP bridge", "Delx Protocol", "stdio transport", "AI client integration", "remote MCP server"]
source: "https://github.com/davidmosiah/delx-mcp-server"
discovered_at: "2026-06-27T11:44:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight MCP (Model Context Protocol) stdio bridge for the Delx Protocol, enabling local MCP clients like Claude Desktop, Cursor, and VS Code to connect to Delx's hosted MCP endpoint without manual JSON-RPC transport setup.

## Key Features
- Bridges local stdio to Delx's hosted MCP endpoint (https://api.delx.ai/v1/mcp)
- Supports one-command installation for popular MCP clients (Claude, Cursor, VS Code, Gemini CLI)
- Provides live tool discovery and health checks via `--doctor` and `--list-tools` flags
- Includes dry-run and JSON output options for automation and configuration preview
- Lightweight package with no backend code, keys, or infrastructure included

## Why It Matters for RAG Builders
It simplifies integrating Delx's 143+ agent tools into local MCP clients by eliminating the need for manual JSON-RPC transport setup.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### stdio transport
Automated review identified **stdio transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
