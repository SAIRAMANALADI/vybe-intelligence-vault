---
title: "knewstimek/agent-tool"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "DAWG (Debug Adapter Protocol)", "tree-sitter (WASM)", "SSH", "TLS", "DNS over HTTPS", "ECH (Encrypted Client Hello)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "file operations", "reverse engineering", "AI agent tools", "encoding preservation"]
source: "https://github.com/knewstimek/agent-tool"
discovered_at: "2026-06-30T21:04:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-tool is an MCP (Model Context Protocol) server providing 50+ drop-in replacement tools for AI coding agents, addressing critical limitations like encoding corruption, indentation mismatches, and lack of reverse engineering support. It bundles file operations, network tools, binary analysis, and debugging capabilities into a single binary.

## Key Features
- 50+ bundled tools including file editing, encoding-aware operations, and binary analysis
- Smart indentation and encoding preservation to respect project conventions
- Reverse engineering capabilities (disassembly, xref, function detection, DAP debugger)
- Network tools with ECH and DoH for censorship circumvention
- Cross-platform support (Windows, Linux, macOS) with session pooling and atomic operations

## Why It Matters for RAG Builders
It provides essential drop-in replacements for AI coding agents that preserve file encoding, indentation, and project conventions, while adding critical reverse engineering and network circumvention capabilities.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DAWG (Debug Adapter Protocol)
Automated review identified **DAWG (Debug Adapter Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter (WASM)
Automated review identified **tree-sitter (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS
Automated review identified **TLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DNS over HTTPS
Automated review identified **DNS over HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ECH (Encrypted Client Hello)
Automated review identified **ECH (Encrypted Client Hello)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
