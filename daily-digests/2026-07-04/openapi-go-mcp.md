---
title: "dipjyotimetia/openapi-go-mcp"
category: "Tooling"
tech_stack: ["Go", "OpenAPI 3.x", "Swagger 2.0", "Model Context Protocol (MCP)", "oapi-codegen", "kin-openapi"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "OpenAPI", "Go", "API integration", "tool generation"]
source: "https://github.com/dipjyotimetia/openapi-go-mcp"
discovered_at: "2026-07-04T03:45:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Go-based tool that generates a Model Context Protocol (MCP) server from OpenAPI 3.x or Swagger 2.0 specifications, converting each API operation into an MCP tool. It integrates with `oapi-codegen` for HTTP client delegation and supports both proxy and companion modes for flexible deployment.

## Key Features
- Generates MCP servers from OpenAPI/Swagger specs with zero glue code
- Supports both proxy (runnable server) and companion (embedded) modes
- Library-agnostic MCP runtime with adapters for multiple SDKs
- Batch generation for multiple specs with auto-derived package names
- OpenAI compatibility mode for flattened tool-call schemas

## Why It Matters for RAG Builders
It simplifies the integration of OpenAPI-defined APIs into MCP-based AI systems by automating the generation of MCP-compatible tools, reducing manual effort and ensuring consistency.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.x
Automated review identified **OpenAPI 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swagger 2.0
Automated review identified **Swagger 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### oapi-codegen
Automated review identified **oapi-codegen** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### kin-openapi
Automated review identified **kin-openapi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
