---
title: "wyre-technology/salesbuildr-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "GitHub Packages", "Docker", "Cloudflare Workers", "DigitalOcean App Platform"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Sales automation", "API integration", "LLM tooling", "SalesBuildr"]
source: "https://github.com/wyre-technology/salesbuildr-mcp"
discovered_at: "2026-07-03T03:59:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for integrating with the SalesBuildr quoting and sales platform, exposing domain-specific tools via a decision-tree architecture to avoid overwhelming LLMs with unnecessary tools.

## Key Features
- Decision-tree architecture for tool exposure to LLMs, reducing noise and improving relevance
- Domain-specific tools for companies, contacts, products, opportunities, and quotes
- One-click deployment to Cloudflare Workers and DigitalOcean App Platform
- Supports both stdio and HTTP transport modes for MCP clients
- Dockerized deployment with environment variable configuration

## Why It Matters for RAG Builders
This MCP server enables AI assistants to interact with SalesBuildr's quoting and sales platform, providing structured access to domain-specific tools for real-time sales operations.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Packages
Automated review identified **GitHub Packages** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DigitalOcean App Platform
Automated review identified **DigitalOcean App Platform** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
