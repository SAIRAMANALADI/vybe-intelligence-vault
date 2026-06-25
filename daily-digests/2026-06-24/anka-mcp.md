---
title: "veertuinc/anka-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "HTTP Server", "SQLite", "REST API", "Anka macOS Virtualization"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "macOS virtualization", "Anka Build Cloud", "AI agent orchestration", "VM lifecycle management"]
source: "https://github.com/veertuinc/anka-mcp"
discovered_at: "2026-06-24T22:14:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Anka-MCP is a Model Context Protocol (MCP) server for Veertu's Anka macOS virtualization platform, enabling AI agents to dynamically request and manage macOS VMs via HTTP with bearer-token authentication. It supports both Anka Build Cloud Controller and local Anka CLI backends with purpose-built, secure tooling.

## Key Features
- Dual backend support: Controller (cloud fleet) and Local (developer machine) with auto-configuration
- Secure, purpose-built tooling (no generic CLI access) with running-VM limits for local backend
- Bearer-token authentication with admin API for multi-client token management
- Automated SSH key injection and connection details for agent access
- Comprehensive logging, rate limiting, and audit capabilities for production use

## Why It Matters for RAG Builders
It enables AI agents to dynamically provision and manage macOS VMs for testing, development, or cloud-based workflows, bridging the gap between AI orchestration and macOS virtualization infrastructure.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anka macOS Virtualization
Automated review identified **Anka macOS Virtualization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
