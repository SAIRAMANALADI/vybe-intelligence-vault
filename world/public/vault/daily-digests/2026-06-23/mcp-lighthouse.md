---
title: MakiDevelop/mcp-lighthouse
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- MCP (Model Context Protocol)
- JSON-RPC 2.0
- CLI
quality_score: 9
rag_relevance: 8
tags:
- MCP
- audit
- compliance
- server validation
- JSON-RPC
source: https://github.com/MakiDevelop/mcp-lighthouse
discovered_at: '2026-06-23T06:50:33Z'
evaluated_by: mistral-small-latest
---

## Summary
MCP Lighthouse is an audit tool for Model Context Protocol (MCP) servers that runs 21 automated checks across five dimensions—protocol compliance, schema quality, robustness, best practices, and performance—to generate a compliance score and identify issues in MCP server implementations.

## Key Features
- 21 automated checks covering protocol compliance, schema quality, robustness, best practices, and performance
- Weighted scoring system with per-category breakdowns (e.g., protocol 40%, schema 25%)
- CLI for scanning MCP servers via stdio with customizable options (category, timeout, report export)
- Identifies critical failures (e.g., protocol version mismatches) that can drop category scores to 0
- Generates detailed markdown reports for easy analysis and debugging

## Why It Matters for RAG Builders
MCP Lighthouse ensures MCP servers adhere to standards and best practices, reducing integration failures and improving reliability for RAG and AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
