---
title: tikoci/rosetta
category: daily-digests/2026-07-07
tech_stack:
- MCP (Model Context Protocol)
- SQLite
- FTS5 (Full-Text Search)
- Bun
- RouterOS Container (/app)
- TypeScript
- Node.js
quality_score: 9
rag_relevance: 9
tags:
- MikroTik RouterOS
- MCP server
- SQL-as-RAG
- technical documentation
- hardware specs
source: https://github.com/tikoci/rosetta
discovered_at: '2026-07-07T18:59:41Z'
evaluated_by: mistral-small-latest
---

## Summary
Rosetta is an MCP server providing structured, searchable access to MikroTik RouterOS documentation, including 317 legacy Confluence pages, 4,860 properties, 40,000-entry command tree, hardware specs, and performance benchmarks. It enables AI assistants to query RouterOS technical data efficiently using SQLite FTS5 full-text search instead of vector embeddings.

## Key Features
- SQLite FTS5 full-text search for precise technical term retrieval (e.g., `/ip/firewall/filter`)
- Comprehensive RouterOS v7 documentation coverage including commands, properties, and changelogs
- Hardware specs and performance benchmarks for 144 MikroTik devices
- Terminal-based browser for direct database access without AI assistance
- Dual deployment options: MikroTik router container or local Bun-based setup

## Why It Matters for RAG Builders
Rosetta provides a structured, high-precision alternative to vector-based RAG for technical documentation, enabling AI assistants to retrieve exact RouterOS commands, properties, and hardware specs with millisecond latency using SQLite FTS5.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RouterOS Container (/app)
Automated review identified **RouterOS Container (/app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
