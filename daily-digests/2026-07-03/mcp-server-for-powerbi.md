---
title: "Mitsubishi-Fuso/mcp-server-for-powerbi"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Microsoft Power BI API", "Entra ID (Azure AD) OAuth2", "JWT Validation", "Docker", "Ruff (linting)", "ty (type checking)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Power BI Integration", "DAX Query Execution", "OAuth Authentication", "Semantic Models"]
source: "https://github.com/Mitsubishi-Fuso/mcp-server-for-powerbi"
discovered_at: "2026-07-03T07:04:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables integration with Microsoft Power BI and Fabric workspaces, allowing users to list workspaces, datasets, and execute DAX queries via the Model Context Protocol (MCP). Supports OAuth/Entra ID authentication for secure access and seamless client integration like LibreChat.

## Key Features
- OAuth/Entra ID authentication with JWT validation and On-Behalf-Of flow for secure access to Power BI/Fabric APIs
- STDIO and HTTP transport modes for flexible deployment and client integration
- Tools for listing workspaces, datasets, and executing ad-hoc DAX queries against semantic models
- Structured error handling with detailed troubleshooting suggestions for API and DAX query issues
- Docker support for containerized deployment to Azure or other cloud platforms

## Why It Matters for RAG Builders
It bridges AI agents with Power BI's semantic models, enabling secure, programmatic access to business data for RAG pipelines and analytics-driven AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Power BI API
Automated review identified **Microsoft Power BI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Entra ID (Azure AD) OAuth2
Automated review identified **Entra ID (Azure AD) OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT Validation
Automated review identified **JWT Validation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff (linting)
Automated review identified **Ruff (linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ty (type checking)
Automated review identified **ty (type checking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
