---
title: "millsymills-com/gandi-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Gandi v5 API", "uv (package manager)", "ruff (linting)", "ty (type checking)", "pytest (testing)", "bandit (security scanning)", "pre-commit (hooks)"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "Gandi API", "domain management", "DNS automation", "safety model"]
source: "https://github.com/millsymills-com/gandi-mcp"
discovered_at: "2026-06-23T23:08:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-grade Python MCP server for the Gandi v5 API, providing 71 tools for domain management, DNS, email, billing, and certificates with a robust three-tier safety model to control write and purchase operations.

## Key Features
- 71 MCP tools covering domains, DNS, email, billing, and certificates with granular read/write/purchase permissions
- Three-tier safety model (readonly, readwrite, readwrite+purchases) with defense-in-depth checks
- Bearer authentication with optional `sharing_id` scoping for multi-org accounts
- Strict typing, linting, and testing (ruff, ty, pytest, bandit)
- Global install option for seamless integration with tools like Claude Code

## Why It Matters for RAG Builders
It provides a secure, controlled interface to Gandi's API for AI agents, enabling safe automation of domain and infrastructure tasks within RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gandi v5 API
Automated review identified **Gandi v5 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff (linting)
Automated review identified **ruff (linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ty (type checking)
Automated review identified **ty (type checking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest (testing)
Automated review identified **pytest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bandit (security scanning)
Automated review identified **bandit (security scanning)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pre-commit (hooks)
Automated review identified **pre-commit (hooks)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
