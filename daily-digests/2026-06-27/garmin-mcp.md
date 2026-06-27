---
title: "davidmosiah/garmin-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Garmin Connect API", "SQLite (optional cache)", "Hono (web framework)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Garmin integration", "local-first", "wellness data", "AI agent tools"]
source: "https://github.com/davidmosiah/garmin-mcp"
discovered_at: "2026-06-27T11:45:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP server that enables AI agents to access Garmin wellness data (sleep, HRV, Body Battery, stress, training readiness) without exposing credentials or tokens. It provides a secure bridge between Garmin Connect and MCP-compatible AI tools.

## Key Features
- Secure local authentication with Garmin Connect using personal tokens (no password storage)
- Exposes 34+ read-only tools for sleep, HRV, Body Battery, stress, training readiness, and activities
- Supports privacy modes (summary, structured, raw) for data exposure control
- Optional SQLite cache for performance optimization
- One-command setup and authentication with Hermes integration

## Why It Matters for RAG Builders
It provides AI agents with secure, local access to Garmin wellness data, enabling personalized health insights without compromising user privacy or requiring official Garmin API partnerships.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Garmin Connect API
Automated review identified **Garmin Connect API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (optional cache)
Automated review identified **SQLite (optional cache)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono (web framework)
Automated review identified **Hono (web framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
