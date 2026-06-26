---
title: "ebullient/obsidian-vault-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Obsidian Plugin API", "Fastify", "Model Context Protocol (MCP)", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "Obsidian", "LLM Integration", "Vector Store Access", "Local AI"]
source: "https://github.com/ebullient/obsidian-vault-mcp"
discovered_at: "2026-06-26T16:16:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An Obsidian plugin that exposes a local MCP (Model Context Protocol) server, enabling external LLM tools like Open WebUI or Claude Desktop to interact with an Obsidian vault. Supports HTTP and stdio transport with optional authentication for secure access.

## Key Features
- HTTP-based MCP server with Fastify for low-latency communication
- Comprehensive set of 14+ MCP tools for vault operations (read, search, create, update, delete notes)
- Optional bearer token authentication for secure remote access
- Supports both HTTP and stdio transport (via bridge script for Claude Desktop)
- Configurable settings including port, auto-start, and log level

## Why It Matters for RAG Builders
Enables seamless integration between Obsidian vaults and external LLM tools, allowing AI agents to dynamically retrieve, search, and manipulate notes for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian Plugin API
Automated review identified **Obsidian Plugin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
