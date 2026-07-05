---
title: "mtnvencenzo/cezzis-com-cocktails-mcp"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Auth0", "PostgreSQL", "OpenTelemetry", "OpenAPI", "Kubernetes", "Terraform", "Azure", "HTTP/Streamable MCP"]
quality_score: 8
rag_relevance: 7
tags: ["MCP server", "cocktail data", "Auth0 authentication", "PostgreSQL session storage", "OpenTelemetry observability"]
source: "https://github.com/mtnvencenzo/cezzis-com-cocktails-mcp"
discovered_at: "2026-07-05T13:23:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Go-based Model Context Protocol (MCP) server that acts as an integration layer for the Cezzis.com cocktail platform, enabling MCP clients to search cocktails, retrieve details, authenticate via Auth0, and submit ratings through upstream APIs.

## Key Features
- Streamable HTTP MCP interface for real-time tool execution
- Integration with Auth0 device-flow authentication for secure user access
- Search and retrieval of cocktail data via upstream APIs
- PostgreSQL-backed session token storage for MCP sessions
- Health, readiness, and liveness endpoints for robust deployment

## Why It Matters for RAG Builders
It provides a standardized MCP interface for accessing cocktail data and user authentication, simplifying integration for AI agents and tools in the RAG ecosystem.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Auth0
Automated review identified **Auth0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terraform
Automated review identified **Terraform** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure
Automated review identified **Azure** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable MCP
Automated review identified **HTTP/Streamable MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
