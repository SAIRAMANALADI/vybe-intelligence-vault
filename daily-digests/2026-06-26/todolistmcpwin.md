---
title: "tridian-tn/TodoListMcpWin"
category: "Tooling"
tech_stack: ["C#", ".NET 10", "ASP.NET Core", "Streamable HTTP", "Windows System Tray", "Kestrel"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "task management", "Windows integration", "ToDoList integration", "AI tooling"]
source: "https://github.com/tridian-tn/TodoListMcpWin"
discovered_at: "2026-06-26T16:15:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Windows system-tray application that exposes AbstractSpoon ToDoList `.tdl` files to MCP clients (e.g., Claude Desktop, Claude Code) via a local Streamable HTTP endpoint. It acts as a persistent host for managing and synchronizing task data from ToDoList with AI tools.

## Key Features
- Exposes AbstractSpoon ToDoList `.tdl` files to MCP clients over Streamable HTTP
- Persistent system-tray application with live configuration updates
- Supports HTTPS with self-signed certificate management for local security
- Provides tools for task CRUD operations, dependencies, and search
- Integrates with AI tools like Claude Code, Claude Desktop, and Codex

## Why It Matters for RAG Builders
It bridges Windows-based task management with AI workflows, enabling AI agents to interact with local task data via MCP for enhanced productivity and automation.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASP.NET Core
Automated review identified **ASP.NET Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows System Tray
Automated review identified **Windows System Tray** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kestrel
Automated review identified **Kestrel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
