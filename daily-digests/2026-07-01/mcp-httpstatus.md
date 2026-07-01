---
title: "pipeworx-io/mcp-httpstatus"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "HTTP"]
quality_score: 7
rag_relevance: 6
tags: ["HTTP status codes", "MCP server", "offline reference", "AI tooling", "data lookup"]
source: "https://github.com/pipeworx-io/mcp-httpstatus"
discovered_at: "2026-07-01T05:24:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-httpstatus is an MCP (Model Context Protocol) server providing HTTP status code references, including reason phrases, categories, and meanings for codes 100-599. It operates offline and keyless, enabling AI agents to query HTTP status information programmatically.

## Key Features
- Provides offline HTTP status code lookups (100-599) with reason phrases and categories
- Includes a tool to list all HTTP status codes, optionally filtered by class (1xx-5xx)
- Integrates seamlessly with MCP clients like Claude Desktop, Cursor, and Windsurf
- Supports plain English queries via ask_pipeworx for simplified interaction
- Part of the Pipeworx gateway ecosystem for broader AI agent connectivity

## Why It Matters for RAG Builders
It enables AI agents to programmatically query and understand HTTP status codes, improving reliability in web-based RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
