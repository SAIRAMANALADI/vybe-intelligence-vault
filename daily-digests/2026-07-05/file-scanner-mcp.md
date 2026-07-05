---
title: "mariusei/file-scanner-mcp"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "tree-sitter", "uv (Python package manager)", "Claude Code", "Claude Desktop", "Cursor", "VS Code", "Cline"]
quality_score: 9
rag_relevance: 9
tags: ["code analysis", "MCP server", "multi-language support", "structured data extraction", "AI agent tooling"]
source: "https://github.com/mariusei/file-scanner-mcp"
discovered_at: "2026-07-05T02:53:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides AI agents with structured codebase analysis, including classes, functions, call graphs, and precise line numbers, across 20+ languages. It enables agents to query codebases efficiently without raw file dumps, improving fact coverage and reducing token usage compared to traditional tools like grep.

## Key Features
- Multi-language support (20+ languages) including code and documents (Markdown, HTML, SQL, etc.) via tree-sitter
- Precise code structure extraction with line numbers, function signatures, imports, and call graphs
- Efficient token usage with condensed skeletons and focused queries (e.g., 88% fact coverage vs. 73% for grep-only agents)
- Zero infrastructure: no indexing, APIs, or vector databases required; scans on-demand
- Integration with popular AI tools (Claude Code, Cursor, VS Code) and configurable for team use via .mcp.json

## Why It Matters for RAG Builders
It provides AI agents with structured, context-rich codebase insights, drastically reducing token waste and improving accuracy for RAG and AI-driven code analysis tasks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Desktop
Automated review identified **Claude Desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code
Automated review identified **VS Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cline
Automated review identified **Cline** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
