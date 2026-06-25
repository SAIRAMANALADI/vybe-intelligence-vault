---
title: "mrazza/goose-mm-bridge"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "asyncio", "Model Context Protocol (MCP)", "Mattermost API", "Goose ACP", "Linux OS Isolation", "JSON-RPC"]
quality_score: 8
rag_relevance: 7
tags: ["AI agent integration", "Mattermost bot", "session management", "MCP tools", "multi-user isolation"]
source: "https://github.com/mrazza/goose-mm-bridge"
discovered_at: "2026-06-25T23:14:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A bridge that integrates the Goose AI agent with Mattermost, enabling users to interact with Goose directly from Mattermost channels or direct messages. It facilitates seamless conversation management, session isolation, and tool access via the Model Context Protocol (MCP).

## Key Features
- Seamless Mattermost-to-Goose interaction with thread-based session management
- OS-native user isolation for security and tool isolation via dedicated Linux accounts
- Exposes Mattermost tools to Goose via MCP (e.g., send messages, search history, find users)
- Supports per-user configuration overrides for custom AI providers/models
- Asynchronous polling and streaming responses with interactive commands like `!stop`

## Why It Matters for RAG Builders
It bridges Mattermost collaboration with AI agents, enabling secure, multi-user interactions with Goose while leveraging MCP for tool access and OS isolation for safety.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mattermost API
Automated review identified **Mattermost API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Goose ACP
Automated review identified **Goose ACP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux OS Isolation
Automated review identified **Linux OS Isolation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
