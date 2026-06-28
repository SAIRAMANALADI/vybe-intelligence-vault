---
title: "sirkirby/unifi-mcp"
category: "Agent Framework"
tech_stack: ["Python", "TypeScript", "Model Context Protocol (MCP)", "REST API", "GraphQL", "Cloudflare Workers", "Docker", "FastAPI", "uvicorn"]
quality_score: 9
rag_relevance: 8
tags: ["UniFi", "MCP", "AI Agents", "Network Management", "Home Automation"]
source: "https://github.com/sirkirby/unifi-mcp"
discovered_at: "2026-06-28T02:53:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
UniFi MCP provides Model Context Protocol (MCP) servers and tools for managing Ubiquiti UniFi infrastructure (Network, Protect, Access) via AI agents. It enables natural language interaction with UniFi controllers for automation, monitoring, and configuration tasks.

## Key Features
- MCP-compliant servers for UniFi Network, Protect, and Access controllers with 177, 58, and 34 tools respectively
- Cloud relay via Cloudflare Worker for secure remote access without exposing local ports
- Standalone REST + GraphQL API for non-MCP clients (e.g., dashboards, desktop apps)
- Preview-then-confirm workflow for all mutations to ensure safety and transparency
- Secret redaction for sensitive fields (Wi-Fi passphrases, VPN keys, etc.) by default

## Why It Matters for RAG Builders
UniFi MCP enables AI agents to securely and intuitively manage Ubiquiti UniFi infrastructure, bridging the gap between natural language automation and complex network hardware.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvicorn
Automated review identified **uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
