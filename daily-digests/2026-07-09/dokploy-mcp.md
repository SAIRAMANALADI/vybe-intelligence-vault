---
title: "vcode-sh/dokploy-mcp"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Dokploy API", "REST", "CLI"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "Dokploy integration", "AI agent tools", "deployment automation", "infrastructure management"]
source: "https://github.com/vcode-sh/dokploy-mcp"
discovered_at: "2026-07-09T14:45:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server for Dokploy that provides a compact interface for interacting with Dokploy's API, enabling AI agents like Codex, Cursor, and Claude to execute multi-step workflows with minimal schema overhead. It bridges AI tools and Dokploy's PaaS platform for deployments, logs, and infrastructure management.

## Key Features
- Compact default surface with only 3 public tools (`search`, `execute`, `list_profiles`) but exposes 544+ generated procedures under the hood
- Supports multi-step workflows via `execute` for real deployments, compose, logs, domains, and databases
- Offers multiple modes: default (compact), raw (one tool per procedure), hybrid (mix of both), and hosted HTTP with remote auth
- Profiles support for managing multiple Dokploy organizations with a single MCP server instance
- Built-in sandboxing with memory and concurrency limits for secure execution of user-provided code

## Why It Matters for RAG Builders
It enables AI agents to interact seamlessly with Dokploy's PaaS platform, reducing schema overhead by 98.2% while providing full API coverage for deployments and infrastructure management.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dokploy API
Automated review identified **Dokploy API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
