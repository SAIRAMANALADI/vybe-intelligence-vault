---
title: "SpekoAI/mcp"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "OAuth", "REST API", "Hosted Server"]
quality_score: 7
rag_relevance: 8
tags: ["MCP Server", "Voice AI", "OAuth Integration", "Agent Management", "Hosted API"]
source: "https://github.com/SpekoAI/mcp"
discovered_at: "2026-06-29T19:07:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A hosted Model Context Protocol (MCP) server for SpekoAI that exposes authenticated endpoints to manage voice AI agents, sessions, calls, and documentation via OAuth or API keys. It acts as a bridge between MCP clients and the SpekoAI platform's backend services.

## Key Features
- Exposes authenticated MCP endpoints for managing SpekoAI agents, sessions, and calls
- Supports OAuth for interactive MCP clients and API keys for custom headers
- Provides full-text search over bundled Speko docs via `docs.search` tool
- Offers tools for agent deployment, rollback, and version management
- Includes migration helpers and phone number management for voice AI workflows

## Why It Matters for RAG Builders
It enables MCP clients like Claude Code or Cursor to seamlessly integrate with SpekoAI's voice AI capabilities, simplifying agent and session management for RAG builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hosted Server
Automated review identified **Hosted Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
