---
title: "SBTopZZZ-LG/playquery"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SearXNG", "Patchright", "GitHub Copilot SDK", "OpenAI-compatible API", "FastMCP", "Docker", "Streamable HTTP", "YAML"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "web scraping", "search engine", "AI integration", "cited answers"]
source: "https://github.com/SBTopZZZ-LG/playquery"
discovered_at: "2026-06-26T10:23:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PlayQuery is an MCP server that enables web-aware research by combining a search engine, browser-backed scraper, and AI provider to answer questions requiring current web data with cited responses. It exposes a single MCP tool, `ask_internet`, which automates search, scraping, and synthesis workflows.

## Key Features
- Unified MCP tool (`ask_internet`) for end-to-end web research workflows
- Supports multiple AI providers (GitHub Copilot, OpenAI-compatible APIs)
- Configurable via YAML or environment variables for flexible deployment
- Streamable HTTP transport for browser-based tools and containerized deployments
- Modular architecture with pluggable search, scraping, and AI backends

## Why It Matters for RAG Builders
PlayQuery streamlines the integration of live web data into RAG pipelines by automating search, scraping, and synthesis, reducing the complexity of building real-time, cited AI systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Patchright
Automated review identified **Patchright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Copilot SDK
Automated review identified **GitHub Copilot SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
