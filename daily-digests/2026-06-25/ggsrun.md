---
title: "tanaikech/ggsrun"
category: "Tooling"
tech_stack: ["Go", "Google Drive API", "Google Apps Script API", "Model Context Protocol (MCP)", "OAuth2", "Concurrent I/O", "TUI (Terminal User Interface)", "Antigravity CLI", "JSON-RPC"]
quality_score: 9
rag_relevance: 8
tags: ["Google Drive automation", "MCP server", "Google Apps Script execution", "parallel I/O", "LLM integration"]
source: "https://github.com/tanaikech/ggsrun"
discovered_at: "2026-06-25T07:29:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ggsrun is an enterprise-grade CLI tool and MCP (Model Context Protocol) server that enables high-performance Google Drive I/O operations and native execution of Google Apps Script (GAS) from a local terminal. It supports massively parallel file transfers, shared drive management, fault-tolerant operations, and secure LLM agent integration via MCP.

## Key Features
- Massively parallel file downloads/uploads with progress visualization
- Native execution of Google Apps Script (GAS) via CLI or MCP server
- Full support for Shared Drives (Omni-Drive) and advanced MIME resolution
- Robust fault tolerance with exponential backoff for API rate limits
- Security sandboxing via Antigravity CLI plugin for safe script execution

## Why It Matters for RAG Builders
It enables AI engineers to automate and orchestrate Google Workspace operations programmatically, integrate with LLM agents via MCP, and securely execute Google Apps Scripts for RAG and AI workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Drive API
Automated review identified **Google Drive API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Apps Script API
Automated review identified **Google Apps Script API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Concurrent I/O
Automated review identified **Concurrent I/O** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface)
Automated review identified **TUI (Terminal User Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Antigravity CLI
Automated review identified **Antigravity CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
