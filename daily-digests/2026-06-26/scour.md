---
title: "alikhaleghi/scour"
category: "Tooling"
tech_stack: ["Rust", "Axum", "reqwest", "Tokio", "MCP (Model Context Protocol)"]
quality_score: 8
rag_relevance: 7
tags: ["search API", "web scraping", "Rust", "MCP server", "concurrent scraping"]
source: "https://github.com/alikhaleghi/scour"
discovered_at: "2026-06-26T20:33:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Scour is a high-performance Rust-based search API that concurrently scrapes results from Brave and Yahoo (Bing) search engines, returning normalized JSON responses. It supports both HTTP and MCP server modes for integration with AI agents.

## Key Features
- Concurrent scraping from Brave and Yahoo (Bing) with 5-second per-engine timeouts
- Dual-mode operation: HTTP server (port 10080) and MCP server for AI agents
- No API keys required for search engines
- Normalized JSON response format for easy integration
- Docker support and static builds for cross-platform deployment

## Why It Matters for RAG Builders
Scour provides a lightweight, no-dependency search API that enables AI agents to fetch real-time web results without relying on proprietary search APIs.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### reqwest
Automated review identified **reqwest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
