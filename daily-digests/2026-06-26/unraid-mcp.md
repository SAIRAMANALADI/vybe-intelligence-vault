---
title: "millsymills-com/unraid-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "GraphQL", "HTTPX", "Tenacity", "Ruff", "Typer", "Pytest", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Unraid Integration", "GraphQL Client", "System Monitoring", "Docker/VM Management"]
source: "https://github.com/millsymills-com/unraid-mcp"
discovered_at: "2026-06-26T22:13:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-grade Python MCP server that provides a standardized interface to interact with the Unraid GraphQL API, enabling read/write operations on system resources like Docker, VMs, disks, and shares.

## Key Features
- Provides MCP tools for comprehensive Unraid system interaction (system info, disks, Docker, VMs, shares, parity checks, etc.)
- Read/write mode separation with runtime defense-in-depth to prevent unauthorized mutations
- Single-endpoint GraphQL client with async `httpx`, retry logic via `tenacity`, and typed error mapping
- Schema drift detection via `--check-schema` to ensure compatibility with Unraid API changes
- Strict linting, typing, and testing with CI/CD pipelines for Python 3.13

## Why It Matters for RAG Builders
It enables AI agents and MCP clients to programmatically interact with Unraid systems for automation, monitoring, and management, bridging the gap between AI workflows and Unraid infrastructure.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tenacity
Automated review identified **Tenacity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer
Automated review identified **Typer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
