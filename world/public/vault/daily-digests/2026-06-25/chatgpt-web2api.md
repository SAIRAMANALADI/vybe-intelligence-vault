---
title: "Octo-Lex/ChatGPT-Web2API"
category: "Tooling"
tech_stack: ["Python", "Selenium", "Chrome DevTools Protocol (CDP)", "FastAPI", "Model Context Protocol (MCP)", "Docker", "Pydantic", "OpenAI SDK"]
quality_score: 9
rag_relevance: 8
tags: ["ChatGPT automation", "OpenAI-compatible API", "MCP server", "browser automation", "AI agent integration"]
source: "https://github.com/Octo-Lex/ChatGPT-Web2API"
discovered_at: "2026-06-25T05:01:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ChatGPT-Web2API transforms a ChatGPT Plus subscription into a programmable API and MCP server by automating a Chrome browser to interact with chatgpt.com, eliminating the need for API keys, token extraction, or manual anti-bot solutions. It exposes an OpenAI-compatible REST API and a full-featured MCP server for AI agents.

## Key Features
- Automates Chrome to handle anti-bot challenges (Turnstile, PoW) transparently via CDP
- Exposes an OpenAI-compatible REST API for drop-in SDK usage (e.g., OpenAI Python SDK)
- Provides a full-featured MCP server with 16 tools for AI agents (Claude Desktop, Cursor, etc.)
- Supports persistent memory, projects, and custom GPTs with full CRUD operations
- Includes rate limit handling with automatic retries and transparent 429 responses

## Why It Matters for RAG Builders
It enables AI engineers to programmatically interact with ChatGPT’s full feature set (including projects, memories, and custom GPTs) without relying on unstable reverse-engineered APIs or manual token extraction, making it essential for building robust RAG and agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Selenium
Automated review identified **Selenium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI SDK
Automated review identified **OpenAI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
