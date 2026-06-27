---
title: "davidmosiah/whoop-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "OAuth 2.0", "SQLite", "npm"]
quality_score: 9
rag_relevance: 8
tags: ["WHOOP", "fitness data", "MCP server", "local-first", "AI agent integration"]
source: "https://github.com/davidmosiah/whoop-mcp"
discovered_at: "2026-06-27T11:46:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Local-first MCP server that enables AI agents to access WHOOP fitness data (recovery, sleep, strain, HRV) without exposing tokens or requiring manual copy-pasting. Designed for seamless integration with MCP-compatible agents like Claude, Cursor, or Hermes.

## Key Features
- Local-first architecture ensuring tokens never leave the user's machine
- OAuth 2.0 integration with WHOOP API for secure data access
- Pre-built tools for recovery, sleep, strain, and HRV data retrieval
- Support for synthetic demo data for testing without OAuth setup
- Privacy modes (summary, structured, raw) for data granularity control

## Why It Matters for RAG Builders
It bridges the gap between AI agents and personal wellness data by providing secure, local-first access to WHOOP metrics, enabling agents to deliver personalized health and training insights without manual data entry.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
