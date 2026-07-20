---
title: volsch/md24de-mcp
category: daily-digests/2026-07-06
tech_stack:
- Python
- Model Context Protocol (MCP)
- FastAPI
- python-md24de
- reportlab
- Pillow
- pytest
- ruff
- pyright
quality_score: 8
rag_relevance: 7
tags:
- MCP server
- energy consumption
- heating data
- hot-water data
- utility portal integration
source: https://github.com/volsch/md24de-mcp
discovered_at: '2026-07-06T21:26:18Z'
evaluated_by: mistral-small-latest
---

## Summary
An unofficial Model Context Protocol (MCP) server that exposes heating and hot-water consumption data from messdienst24.de as AI-callable tools for MCP-compatible clients. It wraps the python-md24de library to provide structured consumption reports, PDF generation, and historical comparisons via a standardized interface.

## Key Features
- Exposes messdienst24.de consumption data as MCP tools for AI clients
- Provides structured JSON reports with heating and hot-water metrics
- Generates and saves monthly consumption PDFs locally
- In-memory caching with configurable TTL to reduce portal requests
- Supports direct PDF resource access via MCP resource URI

## Why It Matters for RAG Builders
It enables AI agents to directly fetch and analyze real-world utility consumption data, bridging the gap between AI systems and personal energy monitoring portals.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-md24de
Automated review identified **python-md24de** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### reportlab
Automated review identified **reportlab** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow
Automated review identified **Pillow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyright
Automated review identified **pyright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
