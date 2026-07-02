---
title: "YuriyEnshin/ConfluenceImportExport"
category: "Tooling"
tech_stack: ["C#", ".NET", "Confluence REST API", "MCP (Model Context Protocol)", "JSON Configuration", "CLI"]
quality_score: 9
rag_relevance: 7
tags: ["confluence", "sync", "mcp-server", "ai-integration", "document-management"]
source: "https://github.com/YuriyEnshin/ConfluenceImportExport"
discovered_at: "2026-07-02T19:21:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI and MCP server tool for bidirectional synchronization between Confluence pages and a local filesystem mirror, supporting two-way sync, conflict detection, and AI-agent integration via MCP protocol.

## Key Features
- Bidirectional sync between Confluence and local filesystem with `update` (force) and `merge` (smart) modes
- Conflict detection and resolution reporting for manual intervention
- MCP server integration enabling AI agents (Claude, Cursor, etc.) to perform sync operations directly
- Local mirror format optimized for AI assistant integration with structured page hierarchy and storage format
- Multi-platform support (Windows, Linux, macOS) with self-contained single-file releases

## Why It Matters for RAG Builders
Enables seamless integration of Confluence content into AI workflows by providing a structured local mirror and MCP server for direct agent interaction.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET
Automated review identified **.NET** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Confluence REST API
Automated review identified **Confluence REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Configuration
Automated review identified **JSON Configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
