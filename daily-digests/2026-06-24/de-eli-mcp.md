---
title: matematicsolutions/de-eli-mcp
category: daily-digests/2026-06-24
tech_stack:
- Python
- MCP (Model Context Protocol)
- HTTP/REST API
- JSON
- pytest
quality_score: 8
rag_relevance: 7
tags:
- legal-data
- MCP-server
- German-legislation
- ELI-identifiers
- public-domain
source: https://github.com/matematicsolutions/de-eli-mcp
discovered_at: '2026-06-24T18:52:55Z'
evaluated_by: mistral-small-latest
---

## Summary
An MCP server for NeuRIS, Germany's official federal legal information portal, enabling search and retrieval of legislation with verifiable ELI identifiers and German citations. It serves as a read-only connector to the NeuRIS API, providing structured access to public-domain legal data.

## Key Features
- Search legislation by term, ELI, or date via `de_search` tool
- Fetch act metadata and full text (HTML/XML) with verifiable citations
- Audit logging for every tool call to ensure traceability
- No API keys required; operates on public-domain data
- Vendor-neutral and telemetry-free design

## Why It Matters for RAG Builders
It provides structured, verifiable access to German federal legislation, enabling RAG systems to incorporate up-to-date legal citations and full-text references with minimal setup.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST API
Automated review identified **HTTP/REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
