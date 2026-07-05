---
title: "beycom/onetool-mcp"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastAPI", "SQLite", "Playwright", "Brave Search", "Excalidraw", "Docker", "uv (package manager)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "token optimization", "tool consolidation", "AI agent integration", "context management"]
source: "https://github.com/beycom/onetool-mcp"
discovered_at: "2026-07-05T00:03:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OneTool-MCP is a single MCP server that consolidates 240+ tools into a unified Python API, drastically reducing token usage and eliminating context rot for AI agents. It acts as a proxy for existing MCP servers and supports direct CLI and programmatic tool execution.

## Key Features
- Consolidates 240+ tools into a single MCP server, reducing token usage by 96% and eliminating context rot
- Supports direct Python API calls (e.g., `__onetool brave.search(query='AI')`) for explicit tool execution
- Acts as an MCP server proxy, wrapping existing MCP servers without the tool tax
- Includes smart context storage (SQLite+FTS5) for managing large outputs and reducing context window usage
- Provides image vision, file operations, database queries, and web search capabilities out of the box

## Why It Matters for RAG Builders
It drastically reduces token costs and context bloat for RAG/AI stacks by consolidating hundreds of tools into a single, efficient MCP server.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Brave Search
Automated review identified **Brave Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Excalidraw
Automated review identified **Excalidraw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
