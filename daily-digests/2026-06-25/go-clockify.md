---
title: "apet97/go-clockify"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Clockify API", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "time tracking", "Clockify integration", "AI tooling", "workflow automation"]
source: "https://github.com/apet97/go-clockify"
discovered_at: "2026-06-25T23:15:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local, single-user Model Context Protocol (MCP) server for Clockify that exposes time-tracking, project management, and reporting tools as callable functions for AI clients. It runs as a subprocess over stdio, requiring only a Clockify API key and workspace ID to operate.

## Key Features
- Exposes 156 Clockify tools (workflow, domain, and raw API fallback) for AI clients to call
- Local, single-user deployment with no account creation or service setup required
- Supports stdio transport for seamless MCP client integration
- Configurable toolset (default, core, business, admin, all) for granular access control
- Includes rate limiting, audit logging, and permission checks for safe operation

## Why It Matters for RAG Builders
It enables AI agents to directly interact with Clockify's time-tracking and project management features, streamlining workflow automation and reducing manual data entry for RAG builders.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Clockify API
Automated review identified **Clockify API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
