---
title: "shayaShav/flatten-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "Claude Code", "Jest (for testing)"]
quality_score: 9
rag_relevance: 8
tags: ["Claude Code", "Session Optimization", "Token Reduction", "MCP Server", "Local Backup"]
source: "https://github.com/shayaShav/flatten-mcp"
discovered_at: "2026-07-02T22:15:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
flatten-mcp is an MCP server that optimizes Claude Code sessions by offloading bulky tool results (file reads, logs, screenshots) into local backups, reducing token counts without losing any data. It enables reversible session compaction, allowing users to resume sessions with significantly lower context while preserving full history integrity.

## Key Features
- Reversible session compaction with zero data loss; original content can be restored byte-for-byte at any time.
- Crash-safe atomic operations ensure session integrity even if interrupted during flattening.
- Supports dry-run mode to preview token savings before applying changes.
- Zero outbound network calls by default, with optional exact token counting via Anthropic API.
- Multiple interfaces: MCP server, CLI, HTTP server, and library for flexible integration.

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to maintain high-performance sessions with reduced token costs while preserving full historical data integrity, critical for long-running or high-volume interactions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (for testing)
Automated review identified **Jest (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
