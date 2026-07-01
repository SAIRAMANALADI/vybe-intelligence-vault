---
title: "pipeworx-io/mcp-csv"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "CSV/JSON Parsing"]
quality_score: 7
rag_relevance: 8
tags: ["CSV", "JSON", "MCP", "data conversion", "AI agents"]
source: "https://github.com/pipeworx-io/mcp-csv"
discovered_at: "2026-07-01T05:23:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables bidirectional conversion between CSV and JSON formats, facilitating seamless data exchange for AI agents and applications. It operates as part of the Pipeworx gateway, connecting AI systems to structured data sources.

## Key Features
- Bidirectional CSV <-> JSON conversion with RFC 4180 compliance
- Supports quoted fields, escaped quotes, and custom delimiters
- Integrates with Pipeworx gateway for access to 1148+ data sources
- Offline-capable parsing and serialization
- Compatible with major MCP clients (Claude Desktop, Cursor, Windsurf)

## Why It Matters for RAG Builders
It simplifies data preprocessing for RAG pipelines by enabling seamless CSV and JSON interoperability, reducing integration overhead for AI systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV/JSON Parsing
Automated review identified **CSV/JSON Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
