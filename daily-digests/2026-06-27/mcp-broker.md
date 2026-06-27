---
title: "doricstack/mcp-broker"
category: "Orchestrator"
tech_stack: ["Python", "YAML", "Unix Sockets", "JSON-RPC", "Makefile", "Docker", "macOS LaunchAgent", "Linux systemd", "Windows PowerShell", "Tiktoken"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "process broker", "tool routing", "lifecycle management", "context reduction"]
source: "https://github.com/doricstack/mcp-broker"
discovered_at: "2026-06-27T20:59:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-broker is a local Model Context Protocol (MCP) process broker that acts as a lightweight facade between MCP clients and multiple upstream MCP servers, reducing tool definition overhead and managing lifecycle, routing, and security policies for local AI development workflows.

## Key Features
- Acts as a PgBouncer-like broker for MCP servers, reducing tool definition overhead by up to 99%
- Manages upstream MCP server lifecycle, reuse, and cleanup across sessions
- Enforces profile-scoped tool exposure with mutating-tool gates and budgets
- Provides a compact broker facade with search, describe, call, and status tools
- Supports multi-platform deployment with LaunchAgent, systemd, and PowerShell Scheduled Tasks

## Why It Matters for RAG Builders
It streamlines MCP client workflows by centralizing tool exposure and lifecycle management, drastically reducing context bloat and improving efficiency for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix Sockets
Automated review identified **Unix Sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Makefile
Automated review identified **Makefile** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS LaunchAgent
Automated review identified **macOS LaunchAgent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux systemd
Automated review identified **Linux systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows PowerShell
Automated review identified **Windows PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tiktoken
Automated review identified **Tiktoken** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
