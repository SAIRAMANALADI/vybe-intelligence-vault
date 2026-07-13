---
title: "sethbang/mcp-screenshot-server"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Puppeteer", "Model Context Protocol (MCP)", "Docker", "Vitest"]
quality_score: 9
rag_relevance: 7
tags: ["screenshot", "MCP server", "AI assistant", "cross-platform", "Puppeteer"]
source: "https://github.com/sethbang/mcp-screenshot-server"
discovered_at: "2026-07-09T04:46:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP (Model Context Protocol) server that enables AI assistants to capture screenshots, supporting both web page screenshots via Puppeteer and cross-platform system screenshots using native OS tools like macOS screencapture, Linux maim/scrot, and Windows PowerShell.

## Key Features
- Web page screenshot capture via headless Puppeteer with configurable viewport and element targeting
- Cross-platform system screenshot support (macOS, Linux, Windows) with native OS tools
- Security-hardened design with SSRF prevention, command injection protection, and path traversal safeguards
- MCP-native integration for seamless use with Claude Desktop, Cursor, and other MCP-compatible clients
- Diagnostic tool (`--doctor`) for verifying and installing required dependencies

## Why It Matters for RAG Builders
This tool enables AI assistants to capture visual context from web pages and system screenshots, enhancing RAG pipelines with multimodal input capabilities.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Puppeteer
Automated review identified **Puppeteer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
