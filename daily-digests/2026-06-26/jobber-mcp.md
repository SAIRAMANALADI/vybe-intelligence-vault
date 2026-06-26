---
title: "sanjibani/jobber-mcp"
category: "Tooling"
tech_stack: ["Python", "GraphQL", "OAuth2", "MCP (Model Context Protocol)", "REST API"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Jobber integration", "GraphQL API", "OAuth2", "home services automation"]
source: "https://github.com/sanjibani/jobber-mcp"
discovered_at: "2026-06-26T10:24:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for Jobber, a home service business management platform (HVAC, plumbing, landscaping, etc.). It enables AI agents like Claude to interact with Jobber's GraphQL API via OAuth2, allowing read/write operations on clients, jobs, quotes, invoices, and notes.

## Key Features
- Enables AI agents to interact with Jobber's GraphQL API via MCP for read/write operations
- Supports OAuth2 authentication for secure access to Jobber's API
- Provides 7 tools for managing clients, jobs, quotes, invoices, and notes
- Minimal field selection in GraphQL queries to optimize data retrieval
- Designed for multi-tenant use with per-instance token management

## Why It Matters for RAG Builders
It bridges AI agents with Jobber's home service business management platform, enabling automated workflows for HVAC, plumbing, and landscaping businesses.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
