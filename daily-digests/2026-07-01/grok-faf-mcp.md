---
title: "Wolfe-Jam/grok-faf-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Cloudflare Workers", "WASM (Zig)", "Node.js", "Bun", "YAML", "REST API"]
quality_score: 10
rag_relevance: 9
tags: ["MCP server", "persistent context", "xAI Grok", "project scoring", "drift detection"]
source: "https://github.com/Wolfe-Jam/grok-faf-mcp"
discovered_at: "2026-07-01T00:07:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A TypeScript-based MCP server that provides persistent project context for xAI Grok using URL-based deployment and the IANA-registered .faf format. It enables zero-config MCP integration with Grok, offering tools for project scoring, drift detection, and context refresh.

## Key Features
- URL-based MCP server deployment with sub-ms cold starts on Cloudflare Workers
- IANA-registered .faf format for machine-readable project context (application/vnd.faf+yaml)
- 12+ MCP tools including scoring, drift detection, refresh, and orchestration
- Zig WASM engine (Mk4) for high-performance scoring (3,800% faster than v1.1)
- Auto-detection and enhancement of project context via `faf_auto` and `faf_init`

## Why It Matters for RAG Builders
It provides a zero-config, URL-based MCP server that enables persistent project context for xAI Grok, eliminating the need to re-explain project details across sessions and significantly improving AI-readiness and productivity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (Zig)
Automated review identified **WASM (Zig)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
