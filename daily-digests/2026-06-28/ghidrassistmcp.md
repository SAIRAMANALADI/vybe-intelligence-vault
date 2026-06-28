---
title: "symgraph/GhidrAssistMCP"
category: "Tooling"
tech_stack: ["Java", "Ghidra", "Model Context Protocol (MCP)", "Gradle", "HTTP/SSE Transports", "Async Task Management"]
quality_score: 9
rag_relevance: 8
tags: ["reverse engineering", "MCP server", "Ghidra extension", "AI integration", "binary analysis"]
source: "https://github.com/symgraph/GhidrAssistMCP"
discovered_at: "2026-06-28T18:10:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GhidrAssistMCP is a Ghidra extension that implements a Model Context Protocol (MCP) server, enabling AI assistants and tools to interact with Ghidra's reverse engineering capabilities through a standardized API. It bridges AI-powered analysis with Ghidra's comprehensive reverse engineering platform.

## Key Features
- Full MCP server implementation with SSE and Streamable HTTP transports for client compatibility
- 48 built-in tools and 6 MCP resources for comprehensive binary analysis and program management
- Real-time logging, result caching, and async task support for improved performance
- Multi-program and multi-window support with active context awareness
- Configurable UI and dynamic tool management for customizable analysis workflows

## Why It Matters for RAG Builders
It enables AI assistants and automated tools to programmatically interact with Ghidra's reverse engineering capabilities, unlocking advanced analysis workflows for security researchers and developers.

## Tech Stack Deep Dive
### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ghidra
Automated review identified **Ghidra** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradle
Automated review identified **Gradle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE Transports
Automated review identified **HTTP/SSE Transports** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Async Task Management
Automated review identified **Async Task Management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
