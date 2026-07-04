---
title: "LeviReisJs/mcp-openi-server"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastMCP", "httpx", "Claude Code", "uv"]
quality_score: 9
rag_relevance: 7
tags: ["medical imaging", "MCP server", "Claude Code plugin", "biomedical search", "Open-i API"]
source: "https://github.com/LeviReisJs/mcp-openi-server"
discovered_at: "2026-07-04T06:47:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-openi-server provides a Model Context Protocol (MCP) server, CLI tool, and Claude Code plugin to search medical, dental, radiological, and clinical images from the Open-i biomedical image search engine. It offers four integration methods (plugin, MCP server, CLI, and manual setup) with no API key or authentication required.

## Key Features
- Four integration methods (plugin, MCP server, CLI, manual setup) for flexible deployment
- No API key or authentication required for Open-i access
- Supports filtering by image type (X-ray, CT, MRI, histology, etc.) and specialty (dentistry, radiology)
- Returns structured JSON with image URLs, thumbnails, summaries, and article links
- Cross-platform compatibility (Windows, Linux, macOS) with detailed setup instructions

## Why It Matters for RAG Builders
It enables AI agents and developers to seamlessly integrate high-quality medical imaging data into RAG pipelines without authentication barriers, enhancing domain-specific applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
