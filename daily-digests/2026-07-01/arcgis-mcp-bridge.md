---
title: "muend/arcgis-mcp-bridge"
category: "Tooling"
tech_stack: ["Python", "ArcPy", "FastMCP", "Pydantic", "asyncio", "Ruff", "Mypy", "uv", "JSON-RPC 2.0", "ArcGIS Pro"]
quality_score: 9
rag_relevance: 7
tags: ["GIS", "ArcGIS", "MCP Server", "Geoprocessing", "Automation"]
source: "https://github.com/muend/arcgis-mcp-bridge"
discovered_at: "2026-07-01T12:35:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
arcgis-mcp-bridge is a secure, local-first MCP server that exposes ArcGIS Pro's ArcPy engine to MCP hosts like Claude Desktop via JSON-RPC over stdio. It provides 100 declarative geoprocessing tools across 10 verticals for GIS workflows, with a two-process architecture for isolation and security.

## Key Features
- 100 declarative geoprocessing tools across 10 verticals (e.g., map layer management, raster operations, geometry analysis)
- Two-process architecture for ArcPy isolation and security (Layer A: MCP server, Layer B: ArcPy worker)
- Deterministic dependency management with `uv.lock` and offline CI verification
- PathGuard sandbox for filesystem security with containment checks and ArcGIS dataset naming validation
- Destructive mutation safety gates (e.g., `confirm: true` for state-changing operations)

## Why It Matters for RAG Builders
It enables secure, programmatic automation of ArcGIS workflows for AI agents, reducing manual GIS tasks and integrating geospatial analysis into AI pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ArcPy
Automated review identified **ArcPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ArcGIS Pro
Automated review identified **ArcGIS Pro** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
