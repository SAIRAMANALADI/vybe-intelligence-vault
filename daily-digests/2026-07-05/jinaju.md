---
title: "xdqi/jinaju"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "cloakbrowser", "CapSolver", "JSON-RPC", "MCP (Model Context Protocol)", "Streamable HTTP", "SSE (Server-Sent Events)"]
quality_score: 8
rag_relevance: 9
tags: ["MCP server", "web scraping", "captcha solving", "headless browser", "fallback proxy"]
source: "https://github.com/xdqi/jinaju"
discovered_at: "2026-07-05T06:42:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
jinaju is a drop-in MCP server compatible with the Jina AI MCP server, featuring a stealth Chromium backend (via cloakbrowser) and CapSolver integration for handling captchas, with ordered fallback to Jina's MCP proxy. It exposes identical tools and JSON-RPC schemas for seamless client integration.

## Key Features
- Drop-in replacement for Jina AI MCP server with identical toolset and schemas
- Stealth Chromium backend with CapSolver for captcha bypass and reliable web scraping
- Ordered fallback mechanism to Jina MCP proxy on failure
- Supports both HTTP (Streamable HTTP + SSE) and stdio transports
- Configurable backend selection per tool with dynamic fallback semantics

## Why It Matters for RAG Builders
It enables reliable web scraping and content extraction for RAG pipelines by bypassing captchas and handling dynamic content, while ensuring seamless integration with existing MCP clients.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cloakbrowser
Automated review identified **cloakbrowser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CapSolver
Automated review identified **CapSolver** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
