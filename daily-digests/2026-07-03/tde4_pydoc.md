---
title: "uwe-at-sdv/tde4_pydoc"
category: "Tooling"
tech_stack: ["JavaScript", "VS Code Extension API", "MCP (Model Context Protocol)", "TOML", "Python (via `wtrl_mcp` backend)"]
quality_score: 7
rag_relevance: 5
tags: ["MCP server", "3DE4 Python API", "VS Code extension", "documentation backend", "Waterloo"]
source: "https://github.com/uwe-at-sdv/tde4_pydoc"
discovered_at: "2026-07-03T07:03:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides a VS Code extension that exposes the Waterloo documentation backend for the 3DE4 Python API as a VS Code MCP server definition. It enables MCP-capable clients like Copilot Chat to access 3DE4 Python API documentation via a local `wtrl_mcp` server.

## Key Features
- Registers a local `wtrl_mcp` server definition for 3DE4 Python API documentation
- Compatible with MCP-capable clients (e.g., Copilot Chat)
- Bundles Waterloo roots for documentation access
- Configurable via VS Code settings (e.g., server label, config path)
- Provides troubleshooting support via VS Code Output panel

## Why It Matters for RAG Builders
It enables seamless integration of 3DE4 Python API documentation into MCP-aware AI tools, enhancing context-aware development workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension API
Automated review identified **VS Code Extension API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (via `wtrl_mcp` backend)
Automated review identified **Python (via `wtrl_mcp` backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
