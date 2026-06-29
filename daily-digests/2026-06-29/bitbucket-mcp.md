---
title: "bobmaertz/bitbucket-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Bitbucket Cloud REST API", "Jest", "ESLint", "Prettier"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "Bitbucket integration", "AI tooling", "REST API client", "read-only access"]
source: "https://github.com/bobmaertz/bitbucket-mcp"
discovered_at: "2026-06-29T03:00:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI applications to read Bitbucket Cloud repositories through a standardized interface, providing read-only access to repositories, pull requests, comments, tasks, and branches via Bitbucket's REST API 2.0.

## Key Features
- Read-only access to Bitbucket Cloud repositories, pull requests, comments, tasks, and branches
- Standardized MCP interface for seamless AI application integration
- Monorepo architecture with isolated API client, shared core, and MCP server packages
- Environment-based configuration with secure API token authentication
- Comprehensive testing including unit, integration, contract, and live e2e tests

## Why It Matters for RAG Builders
It provides AI assistants with standardized, read-only access to Bitbucket repositories, enabling better context integration for code-related tasks without exposing write operations.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bitbucket Cloud REST API
Automated review identified **Bitbucket Cloud REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESLint
Automated review identified **ESLint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prettier
Automated review identified **Prettier** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
