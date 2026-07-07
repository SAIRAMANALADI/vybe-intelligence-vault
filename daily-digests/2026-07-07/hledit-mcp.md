---
title: "dabito/hledit-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Go", "MCP (Model Context Protocol)", "@modelcontextprotocol/sdk", "esbuild"]
quality_score: 8
rag_relevance: 9
tags: ["MCP server", "hash-anchored edits", "stale-write prevention", "file editing", "AI agent tools"]
source: "https://github.com/dabito/hledit-mcp"
discovered_at: "2026-07-07T06:42:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
hledit-mcp is an MCP server that exposes hash-anchored file editing capabilities to MCP-compatible clients like Claude Code or Cursor. It enables precise, stale-write-safe file modifications by anchoring edits to line hashes, preventing silent corruption of incorrect lines.

## Key Features
- Hash-anchored line editing to prevent stale writes and silent corruption
- MCP-compatible tool interface for integration with AI agents like Claude Code
- Batch editing support for multiple operations in a single call
- Stale-write rejection with remap hints for safer file modifications
- Portable tool contract shared with pi-hledit for consistency

## Why It Matters for RAG Builders
It provides a critical safety mechanism for AI agents performing file edits by preventing stale writes, ensuring reliable and non-corrupting file modifications in RAG and agent workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @modelcontextprotocol/sdk
Automated review identified **@modelcontextprotocol/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### esbuild
Automated review identified **esbuild** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
