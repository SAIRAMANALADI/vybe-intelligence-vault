---
title: "KochC/opencode-llm-proxy"
category: "Tooling"
tech_stack: ["Node.js", "JavaScript", "HTTP Server", "OpenCode SDK", "MCP (Model Context Protocol)", "REST API"]
quality_score: 9
rag_relevance: 9
tags: ["LLM proxy", "API gateway", "tool calling", "model switching", "OpenCode integration"]
source: "https://github.com/KochC/opencode-llm-proxy"
discovered_at: "2026-07-05T13:21:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
opencode-llm-proxy is a local HTTP proxy that bridges between standard LLM API formats (OpenAI, Anthropic, Gemini) and the OpenCode SDK, enabling seamless model switching without reconfiguring tools or SDKs. It supports tool/function calling across all formats, making it ideal for coding agents and AI workflows.

## Key Features
- Unified API endpoint for multiple LLM providers (OpenAI, Anthropic, Gemini, Ollama, etc.)
- Supports tool/function calling across all API formats (OpenAI, Anthropic, Gemini)
- Seamless model switching without SDK or tool reconfiguration
- Configurable via environment variables (host, port, auth, CORS)
- Compatible with coding agents (Claude Code, Cursor, Continue, etc.) and workflow tools (n8n)

## Why It Matters for RAG Builders
It simplifies integrating multiple LLM providers into AI workflows by providing a single, consistent API endpoint with tool/function calling support.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode SDK
Automated review identified **OpenCode SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
