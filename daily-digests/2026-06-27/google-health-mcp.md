---
title: "davidmosiah/google-health-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "OAuth 2.0", "Google Health API v4", "REST", "NPM"]
quality_score: 9
rag_relevance: 8
tags: ["Google Health API", "OAuth", "MCP Server", "Local-first", "Health Data"]
source: "https://github.com/davidmosiah/google-health-mcp"
discovered_at: "2026-06-27T11:45:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first Model Context Protocol (MCP) server that enables AI agents to securely access user-authorized Google Health API v4 data (Fitbit, Pixel Watch, etc.) via OAuth. Tokens are stored locally, ensuring privacy and compliance with Google's OAuth 2.0 flow.

## Key Features
- Secure local OAuth 2.0 flow with token storage (0600 permissions) to prevent token exposure
- Supports Fitbit, Pixel Watch, and third-party health data sources via Google Health API v4
- Provides MCP tools for connection status, data inventory, daily/weekly summaries, and diagnostics
- One-command setup and installation via `npx` for rapid deployment
- Privacy-focused with structured data modes and redacted support bundles for troubleshooting

## Why It Matters for RAG Builders
It enables AI agents to securely and locally access real-time health data from Google Health API, empowering RAG systems to incorporate personalized health insights while maintaining strict privacy controls.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Health API v4
Automated review identified **Google Health API v4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
