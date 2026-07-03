---
title: "auzroz/ynab-mcp"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "YNAB API", "Docker", "Zod", "npm"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Financial AI", "Budget Analysis", "YNAB Integration", "Natural Language Finance"]
source: "https://github.com/auzroz/ynab-mcp"
discovered_at: "2026-07-03T21:03:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for YNAB (You Need A Budget) that enables AI assistants like Claude Desktop to interact with financial data through natural language. It provides 66 tools for budget analysis, spending insights, and financial tracking via the YNAB API.

## Key Features
- 66 MCP tools covering full YNAB API and advanced analytics (spending trends, subscription detection, budget health scores)
- Read-only mode by default with optional write operations for safety
- Smart rate limiting (180 req/hour) and intelligent caching to optimize API usage
- Supports both local (stdio) and remote (HTTP) deployment modes with OAuth multi-user support
- Type-safe implementation with Zod schema validation and comprehensive documentation

## Why It Matters for RAG Builders
This MCP server bridges AI assistants with financial data, enabling secure, conversational budget analysis and insights for RAG/AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YNAB API
Automated review identified **YNAB API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
