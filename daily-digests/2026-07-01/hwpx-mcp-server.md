---
title: "airmang/hwpx-mcp-server"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HWPX (Hangul Word Processor XML)", "FastMCP", "uv (package manager)", "pytest (testing)"]
quality_score: 9
rag_relevance: 8
tags: ["HWPX document processing", "MCP server", "AI agent integration", "Hangul document automation", "Cross-platform"]
source: "https://github.com/airmang/hwpx-mcp-server"
discovered_at: "2026-07-01T00:03:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server enabling AI agents to directly read, search, edit, and validate HWPX (Hangul Word Processor XML) documents without requiring Hangul Word Processor. It provides a standardized interface for document manipulation via the Model Context Protocol (MCP).

## Key Features
- Enables AI agents to read, search, and edit HWPX documents via MCP clients (Claude Desktop, VS Code, etc.) without Hangul Word Processor
- Provides 85+ MCP tools for document inspection, editing, validation, and recovery, with advanced mode unlocking 95+ tools
- Supports atomic edits with rollback, visual preview, and structured quality gates (e.g., PII masking, redline tracking)
- Cross-platform compatibility (Windows, macOS, Linux) with pure Python implementation
- Includes document repair, metadata extraction, and declarative document generation from plans

## Why It Matters for RAG Builders
It bridges the gap between AI agents and HWPX document workflows, enabling automated, cross-platform document processing without proprietary software dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HWPX (Hangul Word Processor XML)
Automated review identified **HWPX (Hangul Word Processor XML)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest (testing)
Automated review identified **pytest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
