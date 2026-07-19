---
title: blackwell-systems/gcf-proxy
category: daily-digests/2026-06-23
tech_stack:
- Go
- MCP (Model Context Protocol)
- JSON
- GCF (Graph Context Format)
- HTTP
- STDIO
quality_score: 9
rag_relevance: 9
tags:
- MCP proxy
- token optimization
- GCF format
- JSON compression
- AI workflow
source: https://github.com/blackwell-systems/gcf-proxy
discovered_at: '2026-06-23T19:15:52Z'
evaluated_by: mistral-small-latest
---

## Summary
A bidirectional MCP proxy that converts JSON to GCF (Graph Context Format) and vice versa, enabling zero-code adoption of GCF for token efficiency in AI workflows. It wraps any MCP server to reduce token usage by 46-71% without modifying server or client code.

## Key Features
- Bidirectional JSON-GCF conversion with zero code changes required on server or client
- 46-71% token reduction compared to JSON, validated across 16 datasets and 11 models
- Supports session deduplication, delta encoding, and caching for further efficiency
- Deployable as a local STDIO proxy or remote HTTP service with health checks
- Opt-out for nested object flattening to support open-weight models

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to achieve significant token savings without modifying existing MCP servers, making GCF adoption seamless and cost-effective.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GCF (Graph Context Format)
Automated review identified **GCF (Graph Context Format)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STDIO
Automated review identified **STDIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
