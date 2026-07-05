---
title: "MicrotronX/mxLore"
category: "Orchestrator"
tech_stack: ["Delphi (RAD Studio)", "MariaDB", "TMS Sparkle", "FireDAC", "Model Context Protocol (MCP)", "Go (for mxMCPProxy)", "JSON-RPC 2.0", "PBKDF2-HMAC-SHA256"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "AI memory", "institutional knowledge", "self-hosted", "architectural decisions"]
source: "https://github.com/MicrotronX/mxLore"
discovered_at: "2026-07-05T09:45:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Self-hosted MCP server designed to provide AI coding assistants with persistent memory and institutional knowledge management. It enables AI tools like Claude Code and Cursor to store, retrieve, and act upon architectural decisions, specifications, and lessons learned via 45 MCP tools.

## Key Features
- 45 MCP tools for knowledge management, search, and recall across projects
- Private-by-design architecture with local proxy for coding assistants (no third-party cloud in path)
- Multi-project support with cross-project search and institutional memory
- Admin UI and team collaboration features with invite-based onboarding
- Semantic search via MariaDB VECTOR support and hybrid full-text search

## Why It Matters for RAG Builders
It provides AI coding assistants with persistent, private, and structured memory for institutional knowledge, enabling better decision-making and continuity across sessions.

## Tech Stack Deep Dive
### Delphi (RAD Studio)
Automated review identified **Delphi (RAD Studio)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MariaDB
Automated review identified **MariaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TMS Sparkle
Automated review identified **TMS Sparkle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FireDAC
Automated review identified **FireDAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go (for mxMCPProxy)
Automated review identified **Go (for mxMCPProxy)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PBKDF2-HMAC-SHA256
Automated review identified **PBKDF2-HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
