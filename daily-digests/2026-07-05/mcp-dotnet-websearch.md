---
title: "wlanboy/mcp-dotnet-websearch"
category: "Tooling"
tech_stack: ["C#", "ASP.NET Core", "Model Context Protocol (MCP)", "DuckDuckGo API", "NuGet"]
quality_score: 8
rag_relevance: 7
tags: ["MCP Server", "Web Search", "Random Number Generation", "Domain Whitelisting", "ASP.NET Core"]
source: "https://github.com/wlanboy/mcp-dotnet-websearch"
discovered_at: "2026-07-05T17:06:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server built on ASP.NET Core with HTTP transport, providing AI clients with tools for generating random numbers and performing web searches via DuckDuckGo. The server includes domain whitelisting for secure web search results.

## Key Features
- Provides MCP-compliant tools for AI clients to generate random numbers and perform web searches
- Secure web search with configurable domain whitelisting to filter results
- HTTP transport for easy integration with AI clients like VS Code, Claude, and LM Studio
- Self-contained deployment via `dotnet publish` for portable execution
- Supports dynamic configuration of allowed domains via `appsettings.json`

## Why It Matters for RAG Builders
It enables AI clients to securely and dynamically fetch web search results and generate random numbers, enhancing context-aware applications with real-time data.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASP.NET Core
Automated review identified **ASP.NET Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo API
Automated review identified **DuckDuckGo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NuGet
Automated review identified **NuGet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
