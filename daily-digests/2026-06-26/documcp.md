---
title: "c-premus/documcp"
category: "Orchestrator"
tech_stack: ["Go", "PostgreSQL", "Redis", "Vue 3", "TypeScript", "Docker", "Traefik", "OpenTelemetry", "Prometheus", "Sentry", "Kiwix", "Git", "River (Postgres-native job queue)", "OAuth 2.1", "OIDC"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "document management", "AI agent integration", "full-text search", "OAuth 2.1"]
source: "https://github.com/c-premus/documcp"
discovered_at: "2026-06-26T10:24:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DocuMCP is a documentation server that exposes knowledge bases through the Model Context Protocol (MCP), enabling AI agents to search, read, and manage documentation. It provides structured access to documents via MCP tools, supports OAuth 2.1 authorization, and includes a document ingestion pipeline with full-text search capabilities.

## Key Features
- MCP server with 16 tools and 6 prompts for structured AI agent access to documentation
- OAuth 2.1 authorization server with PKCE, device flow, and dynamic client registration
- Document ingestion pipeline supporting PDF, DOCX, XLSX, HTML, EPUB, and Markdown
- Federated search across documents, ZIM archives, and Git templates
- Admin UI with Vue 3 and TypeScript for managing documents, users, and OAuth clients

## Why It Matters for RAG Builders
DocuMCP is essential for RAG builders as it provides a standardized MCP interface to manage and query documentation, enabling seamless integration with AI agents for real-time knowledge retrieval and updates.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vue 3
Automated review identified **Vue 3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Traefik
Automated review identified **Traefik** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentry
Automated review identified **Sentry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kiwix
Automated review identified **Kiwix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### River (Postgres-native job queue)
Automated review identified **River (Postgres-native job queue)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC
Automated review identified **OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
