---
title: "Paul-Orlando/web-research-hub-mcp-server"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "FastMCP", "Exa AI", "Streamable HTTP", "Pydantic", "httpx", "BeautifulSoup4", "ast (stdlib)", "fpdf2", "python-docx"]
quality_score: 9
rag_relevance: 9
tags: ["MCP Server", "Streamable HTTP", "Web Research", "Tooling", "Agent Integration"]
source: "https://github.com/Paul-Orlando/web-research-hub-mcp-server"
discovered_at: "2026-06-27T20:59:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A standalone MCP server that exposes the Web Research Hub's core research capabilities as standardized tools over Streamable HTTP, enabling MCP-compatible agents like Claude Desktop to perform web research, URL fetching, calculations, and report exports without requiring LLM calls within the server itself.

## Key Features
- Exposes 4 standardized tools over Streamable HTTP: web_search, fetch_url, calculate, and export_report
- Pure tool execution layer—no LLM calls, ensuring deterministic outputs and MCP compliance
- Supports live web research via Exa AI, URL content extraction, safe arithmetic calculations, and multi-format report generation
- Designed for integration with MCP-compatible clients like Claude Desktop or custom agents
- Includes robust error handling, rate limiting, and authentication for production use

## Why It Matters for RAG Builders
This MCP server provides a critical tooling layer for RAG builders by enabling standardized, non-LLM tool execution for web research, calculations, and report generation, seamlessly integrating with agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Exa AI
Automated review identified **Exa AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BeautifulSoup4
Automated review identified **BeautifulSoup4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ast (stdlib)
Automated review identified **ast (stdlib)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fpdf2
Automated review identified **fpdf2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-docx
Automated review identified **python-docx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
