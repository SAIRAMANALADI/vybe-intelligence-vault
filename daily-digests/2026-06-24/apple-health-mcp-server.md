---
title: "rinoshiyo/apple-health-mcp-server"
category: "Tooling"
tech_stack: ["Python", "DuckDB", "Model Context Protocol (MCP)", "FastMCP", "uv", "XML/CSV/GPX Parsing", "SQL"]
quality_score: 9
rag_relevance: 7
tags: ["Apple Health", "MCP Server", "Health Data", "Local AI", "DuckDB"]
source: "https://github.com/rinoshiyo/apple-health-mcp-server"
discovered_at: "2026-06-24T10:23:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes Apple Health export data (export.xml, ECG CSVs, and GPX routes) to AI clients like Claude Desktop via 17 read-only tools, powered by a local DuckDB database for efficient querying and analysis.

## Key Features
- Exposes 17 read-oriented MCP tools for querying Apple Health data (records, workouts, ECG, activity summaries, etc.)
- Local-first architecture with no external data transmission; all processing occurs on the user's machine
- DuckDB-backed storage for fast, idempotent imports and ad-hoc SQL queries
- Cross-platform support (macOS, Linux, Windows) with timezone-aware data handling
- One-click installation for Claude Desktop via MCPB bundles and CLI helpers

## Why It Matters for RAG Builders
It enables AI assistants like Claude to locally access and analyze sensitive health data from Apple Health, empowering personalized health insights without compromising privacy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XML/CSV/GPX Parsing
Automated review identified **XML/CSV/GPX Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
