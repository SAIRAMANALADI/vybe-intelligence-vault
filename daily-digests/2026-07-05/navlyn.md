---
title: "furbon/navlyn"
category: "Tooling"
tech_stack: ["C#", ".NET", "Roslyn", "MSBuild", "MCP (Model Context Protocol)", "CLI"]
quality_score: 9
rag_relevance: 9
tags: ["semantic code navigation", "C#/.NET agent tools", "symbol resolution", "Roslyn integration", "MCP server"]
source: "https://github.com/furbon/navlyn"
discovered_at: "2026-07-05T09:44:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Navlyn is a C#-first .NET tool that provides semantic evidence for coding agents to accurately identify and resolve symbols before editing, using Roslyn and MSBuild for deterministic JSON outputs. It includes a CLI and an MCP server for agent integration, ensuring agents target the correct code in complex C#/VB.NET projects.

## Key Features
- Roslyn/MSBuild-backed deterministic JSON outputs for symbol resolution and code relationships
- CLI and MCP server for agent integration (navlyn and navlyn-mcp)
- Preflight checks for edit planning (edit-preflight, post-edit-guard)
- Workspace-aware analysis (projects, target frameworks, DI registrations, ASP.NET routes, EF Core models)
- Read-only, local-only execution with no network calls or file modifications

## Why It Matters for RAG Builders
Navlyn provides critical semantic grounding for AI agents working in C#/.NET codebases, preventing wrong-context edits by resolving symbols accurately before any code changes occur.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET
Automated review identified **.NET** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Roslyn
Automated review identified **Roslyn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MSBuild
Automated review identified **MSBuild** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
