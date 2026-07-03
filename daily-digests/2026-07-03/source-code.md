---
title: "mcp2cli/source-code"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "JSON-RPC", "clap (CLI framework)", "YAML (config)", "HTTP/HTTPS", "Stdio"]
quality_score: 9
rag_relevance: 8
tags: ["MCP adapter", "CLI generator", "server integration", "automation", "protocol bridge"]
source: "https://github.com/mcp2cli/source-code"
discovered_at: "2026-07-03T04:03:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp2cli transforms any MCP (Model Context Protocol) server into a native command-line application, eliminating the need for JSON-RPC plumbing or protocol-level knowledge. It auto-discovers server capabilities and generates typed CLI commands with flags derived from JSON Schema, enabling seamless interaction with MCP tools, resources, and prompts directly from the terminal.

## Key Features
- Auto-discovers MCP server capabilities (tools, resources, prompts) and generates typed CLI commands with flags derived from JSON Schema
- Supports ad-hoc connections via `--url` or `--stdio` for zero-config usage, as well as named configurations and aliases for persistent setups
- Full MCP 2025-11-25 protocol coverage, including lifecycle, discovery, tool invocation, resources, prompts, elicitation, sampling, and tasks
- Structured JSON output for programmatic parsing, authentication management, and event system for real-time notifications
- Profile overlays allow renaming, hiding, grouping commands, and customizing resource verbs without modifying the MCP server

## Why It Matters for RAG Builders
mcp2cli bridges the gap between MCP servers and CLI tools, enabling AI engineers to interact with MCP-based systems directly from the terminal or scripts without writing custom client code.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### clap (CLI framework)
Automated review identified **clap (CLI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (config)
Automated review identified **YAML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stdio
Automated review identified **Stdio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
