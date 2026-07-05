---
title: "n24q02m/better-email-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "IMAP", "SMTP", "OAuth 2.1", "Docker", "Cloudflare Workers", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["email automation", "MCP server", "IMAP/SMTP", "AI agent integration", "multi-account management"]
source: "https://github.com/n24q02m/better-email-mcp"
discovered_at: "2026-07-05T06:40:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Better Email MCP is an MCP server that enables AI agents to read, send, organize, and manage attachments across multiple email accounts via IMAP/SMTP with auto-discovery of provider settings. It supports both single-user and multi-user deployments with OAuth and app password authentication methods.

## Key Features
- Multi-account support for 6+ email providers with auto-discovery of IMAP/SMTP settings
- Composite tools with 21+ actions for search, read, send, reply, forward, and organize emails
- App Password and OAuth 2.1 authentication methods for seamless setup
- HTTP multi-user mode with per-JWT-sub credential storage and encryption
- Thread-aware operations and tiered token optimization for efficient AI agent interactions

## Why It Matters for RAG Builders
It provides AI agents with standardized, multi-provider email capabilities, enabling seamless integration for tasks like automated communication, data extraction, and workflow automation.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP
Automated review identified **IMAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMTP
Automated review identified **SMTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
