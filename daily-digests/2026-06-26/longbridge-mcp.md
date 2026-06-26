---
title: "longbridge/longbridge-mcp"
category: "Agent Framework"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Axum", "rmcp", "Prometheus", "OAuth 2.1", "Docker", "JSON", "HTTP/HTTPS", "WebSocket"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "brokerage integration", "real-time market data", "trading tools", "financial APIs"]
source: "https://github.com/longbridge/longbridge-mcp"
discovered_at: "2026-06-26T06:57:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Longbridge MCP Server is an official Model Context Protocol (MCP) server for the Longbridge brokerage, providing 145 tools across real-time quotes, trading, fundamentals, and portfolio analytics for US and HK markets. It enables seamless integration with MCP-compatible clients like Claude, Zed, and Cursor via a hosted endpoint or self-hosted deployment.

## Key Features
- 145 MCP tools covering quotes, trading, fundamentals, and portfolio analytics for US and HK markets
- Stateless architecture with Bearer token authentication and OAuth 2.1 compliance
- Hosted endpoint available at `https://mcp.longbridge.com` for immediate use
- Prometheus metrics for monitoring tool calls, latency, and errors
- Self-hosting support via Docker or source build with configurable TLS and base URL

## Why It Matters for RAG Builders
It provides a standardized, secure, and scalable way for AI agents to interact with real-time financial data and execute trades via the Longbridge brokerage, essential for building advanced RAG systems in financial applications.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rmcp
Automated review identified **rmcp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
