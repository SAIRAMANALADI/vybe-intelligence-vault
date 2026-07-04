---
title: "jocarrd/aemet-client"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "pnpm", "OIDC Trusted Publishing"]
quality_score: 9
rag_relevance: 7
tags: ["weather data", "API client", "MCP server", "TypeScript SDK", "AEMET"]
source: "https://github.com/jocarrd/aemet-client"
discovered_at: "2026-07-04T09:25:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A monorepo providing TypeScript SDKs and CLI tools for interacting with AEMET OpenData, Spain's national weather service API. Includes a production-ready SDK and an MCP server for integrating weather data into LLM workflows.

## Key Features
- Typed TypeScript SDK for AEMET OpenData API with CLI support
- MCP server for integrating AEMET data into LLM workflows (Claude Desktop, Cursor, etc.)
- Production-ready with CI/CD and Trusted Publishing for npm releases
- Supports both direct API usage and LLM context via MCP
- Comprehensive testing including E2E against real AEMET API

## Why It Matters for RAG Builders
Provides essential weather data integration for AI systems needing real-time Spanish meteorological information, enabling accurate and localized responses in RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC Trusted Publishing
Automated review identified **OIDC Trusted Publishing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
