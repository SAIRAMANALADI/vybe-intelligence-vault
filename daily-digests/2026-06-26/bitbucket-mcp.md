---
title: "lawp09/bitbucket-mcp"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastMCP", "Bitbucket Cloud API", "Docker"]
quality_score: 9
rag_relevance: 7
tags: ["MCP Server", "Bitbucket Integration", "AI Assistant Tooling", "Code Review Automation", "CI/CD Monitoring"]
source: "https://github.com/lawp09/bitbucket-mcp"
discovered_at: "2026-06-26T13:12:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI assistants like Claude Code, VS Code, and Cursor to interact with Bitbucket Cloud repositories. It provides 46+ tools for managing pull requests, pipelines, comments, and code reviews via natural language commands.

## Key Features
- 46+ MCP tools for Bitbucket Cloud operations (PRs, pipelines, comments, diffs)
- Slim API responses to reduce LLM token usage
- Configurable tool enablement via JSON or environment variables
- Secure credential management (environment variables, system keychain, or .env files)
- Supports Docker and multiple AI assistant integrations (Claude, VS Code, Cursor)

## Why It Matters for RAG Builders
It bridges AI assistants with Bitbucket Cloud, enabling automated code reviews, PR management, and CI/CD monitoring directly through natural language, reducing manual workflow overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bitbucket Cloud API
Automated review identified **Bitbucket Cloud API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
