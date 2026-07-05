---
title: "eason4kim-rocket/purify-feeds-mcp"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "HTTP/REST API", "JSON"]
quality_score: 8
rag_relevance: 9
tags: ["security intelligence", "vulnerability feeds", "provenance tracking", "MCP server", "threat intelligence"]
source: "https://github.com/eason4kim-rocket/purify-feeds-mcp"
discovered_at: "2026-07-05T15:16:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server providing live security-intelligence feeds (CISA KEV, EPSS, and enriched vulnerability data) with full provenance tracking. Enables AI agents like Claude Desktop to query and analyze threat intelligence with auditable data lineage.

## Key Features
- Real-time access to CISA KEV, EPSS, and enriched vulnerability feeds
- Per-record provenance tracking with `_purify` data passport (source, timestamp, extractor, hash)
- Incremental feed change detection via `check_feed_changed`
- AND/OR filtering, sorting, and pagination for feed queries
- Self-healing and quality-gated feed ingestion pipeline

## Why It Matters for RAG Builders
Provides auditable, high-quality security feeds essential for RAG systems building threat intelligence applications with verifiable data lineage.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST API
Automated review identified **HTTP/REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
