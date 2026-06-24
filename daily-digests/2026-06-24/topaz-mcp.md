---
title: "runapi-ai/topaz-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "RunAPI API"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Image Generation", "Video Upscaling", "RunAPI", "AI Agents"]
source: "https://github.com/runapi-ai/topaz-mcp"
discovered_at: "2026-06-24T10:25:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing focused access to RunAPI's Topaz model for AI agents, enabling image and video upscaling tasks, result polling, and pricing checks without loading the full RunAPI catalog.

## Key Features
- Provides MCP-compatible tools for Topaz image and video upscaling tasks
- Supports polling task status and retrieving output URLs
- Includes pricing checks for Topaz models without requiring an API key
- Integrates seamlessly with Claude Code, Codex, Cursor, VS Code, and other MCP hosts
- Lightweight alternative to the full RunAPI MCP server for scoped Topaz access

## Why It Matters for RAG Builders
It enables AI agents to directly interact with Topaz's image and video upscaling capabilities through a standardized MCP interface, simplifying integration and reducing overhead for RAG builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RunAPI API
Automated review identified **RunAPI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
