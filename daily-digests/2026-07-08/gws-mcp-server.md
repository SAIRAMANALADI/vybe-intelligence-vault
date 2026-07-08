---
title: "conorbronsdon/gws-mcp-server"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Google Workspace CLI (gws)", "Vitest"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Google Workspace", "AI agents", "curated tools", "context window optimization"]
source: "https://github.com/conorbronsdon/gws-mcp-server"
discovered_at: "2026-07-08T08:18:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A curated Model Context Protocol (MCP) server that exposes 39 narrowly scoped tools for Google Workspace services (Gmail, Calendar, Drive, Sheets, Docs, Tasks) via the official Google Workspace CLI (`gws`). It replaces a bloated MCP server by providing focused, high-value operations to avoid context window overload in AI agents.

## Key Features
- 39 narrowly scoped tools across 6 Google Workspace services (Gmail, Calendar, Drive, Sheets, Docs, Tasks)
- Explicit `readOnlyHint`/`destructiveHint` annotations for tool side effects and consent prompts
- Typed error hierarchy (AuthenticationError, RateLimitError, ValidationError, NotFoundError, ServerError) for robust error handling
- Configuration via `--services` flag to expose only selected services/tools
- Thin wrapper architecture: translates MCP tool calls to `gws` CLI invocations without storing credentials

## Why It Matters for RAG Builders
It enables AI agents to safely and efficiently interact with Google Workspace services without overwhelming context windows or exposing unnecessary API surfaces.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Workspace CLI (gws)
Automated review identified **Google Workspace CLI (gws)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
