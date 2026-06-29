---
title: "pedrosakuma/dotnet-diagnostics"
category: "Tooling"
tech_stack: ["C#", ".NET 10", "MCP (Model Context Protocol)", "ClrMD (CLR Managed Debugging)", "Docker", "Kubernetes"]
quality_score: 9
rag_relevance: 9
tags: ["diagnostics", "performance", "MCP server", "CLI tool", "real-time analysis"]
source: "https://github.com/pedrosakuma/dotnet-diagnostics"
discovered_at: "2026-06-29T19:08:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A diagnostics MCP server and CLI tool for .NET 10 applications that enables LLM-driven performance analysis without code instrumentation. It provides 15 unified tools for real-time diagnostics, including threadpool, GC, memory, and CPU analysis, with both HTTP and stdio transport options.

## Key Features
- Zero instrumentation required for diagnostics via diagnostic IPC
- 15 unified tools for comprehensive .NET application analysis (CPU, GC, memory, threadpool, etc.)
- Dual distribution: MCP server for LLM-driven analysis and standalone CLI for human/script/CI use
- Cross-platform support (Linux, Windows) with containerized deployment options
- Auto-hints and IoT-style triage for proactive optimization and reactive troubleshooting

## Why It Matters for RAG Builders
It enables AI-driven performance diagnostics for .NET applications without requiring code changes, making it essential for automated monitoring and optimization in RAG/AI stacks.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClrMD (CLR Managed Debugging)
Automated review identified **ClrMD (CLR Managed Debugging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
