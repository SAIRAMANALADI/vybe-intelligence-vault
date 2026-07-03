---
title: "tarakanof/Unraid-MCP"
category: "Agent Framework"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Docker", "GraphQL", "FastAPI", "Unraid API", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Unraid integration", "system monitoring", "agent framework", "GraphQL API"]
source: "https://github.com/tarakanof/Unraid-MCP"
discovered_at: "2026-07-03T22:12:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that integrates Unraid systems with MCP-aware agents via Unraid's GraphQL API, providing read-only monitoring tools by default with opt-in mutation capabilities for system management.

## Key Features
- Read-only monitoring tools for system metrics (CPU, memory, temperature), array health, Docker/VMs, and notifications
- Opt-in mutation tools for system management (start/stop array, control Docker/VMs, run parity checks) with confirmation requirements
- Secure authentication via bearer tokens and API keys, with no logging of sensitive data
- Multi-transport support (stdio, HTTP/streamable) with TLS and host restrictions for security
- Pre-configured Docker image and Unraid template for easy deployment

## Why It Matters for RAG Builders
It enables AI agents to securely monitor and manage Unraid systems through a standardized MCP interface, bridging the gap between AI workflows and home server infrastructure.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unraid API
Automated review identified **Unraid API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
