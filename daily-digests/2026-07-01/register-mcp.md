---
title: "malkreide/register-mcp"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "Pydantic", "httpx", "uv", "Docker", "GitHub Actions", "OpenTelemetry"]
quality_score: 9
rag_relevance: 8
tags: ["Swiss Commercial Register", "MCP Server", "Company Verification", "Public Data API", "Due Diligence"]
source: "https://github.com/malkreide/register-mcp"
discovered_at: "2026-07-01T15:42:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
register-mcp is an MCP server providing AI-native access to the Swiss Federal Commercial Register (Zefix/Handelsregister) and related public data sources. It enables natural language queries for company verification, UID lookups, and due diligence without requiring authentication for Phase 1 APIs.

## Key Features
- Provides 6 tools for company search, verification, and reference data retrieval via MCP
- Supports both stdio (local) and SSE (cloud) transport mechanisms
- No authentication required for Phase 1 Zefix API access
- Includes rate limiting, egress allow-listing, and structured logging for cloud deployments
- Bilingual output (Markdown/JSON) and reference data caching for performance

## Why It Matters for RAG Builders
It enables AI systems to perform real-time Swiss company verification and due diligence via natural language queries, reducing manual research overhead for procurement and compliance workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
