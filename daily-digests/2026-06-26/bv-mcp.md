---
title: "MadaBurns/bv-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Cloudflare Workers", "MCP (Model Context Protocol)", "Node.js", "Hono", "JSON-RPC 2.0", "Durable Objects", "WASM"]
quality_score: 9
rag_relevance: 8
tags: ["DNS security", "email authentication", "MCP server", "security scanning", "Cloudflare Workers"]
source: "https://github.com/MadaBurns/bv-mcp"
discovered_at: "2026-06-26T13:12:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A source-available DNS and email security scanner designed as an MCP server for AI clients like Claude, Cursor, and VS Code. It provides 79 security-focused tools for DNS, email authentication, and infrastructure analysis via streamable HTTP, stdio, or legacy HTTP+SSE transports.

## Key Features
- 79 security-focused MCP tools covering SPF, DMARC, DKIM, DNSSEC, SSL/TLS, and more
- Automated scoring and remediation guidance with provider-aware fix plans
- Real-time threat feed integration and attack path simulation
- Compliance mapping to NIST, PCI DSS, SOC 2, and CIS Controls
- Self-hostable or cloud-hosted with no API key required for public scans

## Why It Matters for RAG Builders
It provides critical DNS and email security analysis tools that enhance the reliability and safety of AI-driven systems by identifying vulnerabilities in third-party dependencies and infrastructure.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Durable Objects
Automated review identified **Durable Objects** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
