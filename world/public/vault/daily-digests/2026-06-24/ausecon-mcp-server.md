---
title: "AnthonyPuggs/ausecon-mcp-server"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "Pydantic", "GitHub Actions", "Docker", "PyPI"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Australian economic data", "ABS", "RBA", "APRA"]
source: "https://github.com/AnthonyPuggs/ausecon-mcp-server"
discovered_at: "2026-06-24T20:52:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ausecon-mcp-server is an open-source Model Context Protocol (MCP) server that provides structured, source-traceable access to Australian economic and financial data from ABS, RBA, and APRA. It enables AI assistants to retrieve fresh, research-grade data without API keys or complex setup.

## Key Features
- Provides real-time access to authoritative Australian economic data from ABS, RBA, and APRA in a unified format
- Ensures source-traceability with timestamps, provenance, and fallback caching for reliability
- Supports 14 read-only tools, 81 economic concepts, and 16 derived indicators for comprehensive analysis
- Offers both local (stdio) and remote (HTTP) deployment options with zero API key requirements
- Includes live validation against golden values to detect upstream data drift or fetch errors

## Why It Matters for RAG Builders
It simplifies integration of high-quality, traceable Australian economic data into RAG pipelines, enabling AI systems to provide accurate, up-to-date insights without manual data wrangling.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
