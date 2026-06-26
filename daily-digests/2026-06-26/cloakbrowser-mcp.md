---
title: "swimmwatch/cloakbrowser-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Playwright", "Model Context Protocol (MCP)", "Docker", "Chromium", "CloakBrowser"]
quality_score: 9
rag_relevance: 8
tags: ["browser automation", "MCP server", "Playwright", "CloakBrowser", "AI agent tools"]
source: "https://github.com/swimmwatch/cloakbrowser-mcp"
discovered_at: "2026-06-26T16:15:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cloakbrowser-mcp is a Model Context Protocol (MCP) server that bridges Playwright MCP with the CloakBrowser Chromium binary, enabling AI agents to perform browser automation via standardized MCP tools. It supports both stdio and Streamable HTTP transports, including GeoIP-aware proxy matching for regional testing.

## Key Features
- MCP-compatible browser automation server with Playwright MCP tool forwarding
- Supports stdio and Streamable HTTP transports with TLS and authentication
- GeoIP-aware proxy matching for regional quality assurance testing
- Cross-platform compatibility (Linux, macOS, Windows) and Docker support
- Built-in diagnostics via `doctor` command and health/readiness probes

## Why It Matters for RAG Builders
It provides AI agents with standardized, secure, and scalable browser automation capabilities essential for web-based RAG pipelines and agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CloakBrowser
Automated review identified **CloakBrowser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
