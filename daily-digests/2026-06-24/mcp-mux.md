---
title: mcpmux/mcp-mux
category: daily-digests/2026-06-24
tech_stack:
- Rust
- Tauri 2
- React 19
- Axum
- SQLite
- OS Keychain (DPAPI, Keychain, libsecret)
- AES-256-GCM
- OAuth 2.1 + PKCE
- rmcp
- ring
- pnpm
quality_score: 9
rag_relevance: 8
tags:
- MCP gateway
- AI client integration
- cross-platform
- server management
- workspace isolation
source: https://github.com/mcpmux/mcp-mux
discovered_at: '2026-06-24T13:22:18Z'
evaluated_by: mistral-small-latest
---

## Summary
McpMux is a cross-platform desktop application that acts as a centralized MCP (Model Context Protocol) gateway, enabling AI clients like Cursor, Claude Desktop, VS Code, and Windsurf to share a single configuration for MCP servers. It simplifies server management, enhances security, and provides workspace isolation for different projects.

## Key Features
- Centralized MCP server configuration for multiple AI clients
- Cross-platform support (Windows, macOS, Linux)
- Secure credential storage using OS keychain and AES-256-GCM encryption
- Workspace isolation with per-folder toolset routing
- Built-in server registry with 100+ pre-configured servers

## Why It Matters for RAG Builders
McpMux eliminates the need for duplicative MCP server configurations across AI clients, streamlining setup and improving security for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri 2
Automated review identified **Tauri 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keychain (DPAPI, Keychain, libsecret)
Automated review identified **OS Keychain (DPAPI, Keychain, libsecret)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1 + PKCE
Automated review identified **OAuth 2.1 + PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rmcp
Automated review identified **rmcp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ring
Automated review identified **ring** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
