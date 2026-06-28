---
title: "saagpatel/portfolio-mcp"
category: "Agent Framework"
tech_stack: ["TypeScript", "Cloudflare Workers", "Model Context Protocol (MCP)", "BM25", "Node.js", "Vitest"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "static corpus", "BM25 retrieval", "agent-native", "stateless"]
source: "https://github.com/saagpatel/portfolio-mcp"
discovered_at: "2026-06-28T07:04:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only, stateless Model Context Protocol (MCP) server that enables AI agents to query Saagar Patel's writing, projects, and benchmark results directly from a static corpus without scraping HTML or requiring runtime egress.

## Key Features
- Read-only, stateless MCP server with zero runtime fetches or egress
- BM25-based search over a baked static corpus (no embeddings in v1)
- Six tools for querying essays, projects, profile, and OPERANT results
- Supports both HTTP (Cloudflare Worker) and stdio transports
- Built-in audit posture with MCPAudit compatibility and Ed25519-signed manifests

## Why It Matters for RAG Builders
It provides a secure, stateless, and agent-native way to integrate a static corpus into RAG pipelines without scraping or runtime overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
