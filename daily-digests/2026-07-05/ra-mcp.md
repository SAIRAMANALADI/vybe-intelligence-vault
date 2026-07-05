---
title: "AI-Riksarkivet/ra-mcp"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "Docker", "LanceDB", "Ruff", "uv", "Sigstore", "SLSA"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "historical archives", "document search", "RAG integration", "Swedish National Archives"]
source: "https://github.com/AI-Riksarkivet/ra-mcp"
discovered_at: "2026-07-05T20:58:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ra-mcp is a Model Context Protocol (MCP) server and CLI tool for accessing and searching transcribed historical documents from the Swedish National Archives (Riksarkivet). It enables full-text search, document browsing, handwritten text recognition, and interactive viewing of millions of archival pages via MCP-compatible LLM clients or standalone CLI tools.

## Key Features
- Full-text search across millions of AI-transcribed archival pages
- Handwritten text recognition (HTR) for historical documents
- Interactive document viewing with MCP UI resources (Claude-compatible)
- CLI and MCP server for programmatic access to archival data
- Supports multiple archival datasets including court records, biographical lexicons, and geographical records

## Why It Matters for RAG Builders
It provides structured, searchable access to vast historical archives, enabling RAG systems to ground responses in authentic, context-rich primary sources for research and analysis.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore
Automated review identified **Sigstore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA
Automated review identified **SLSA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
