---
title: "iyulab/ironhive-agent"
category: "Agent Framework"
tech_stack: ["C#", ".NET 10.0+", "Microsoft.Extensions.AI", "Model Context Protocol (MCP)", "Dependency Injection"]
quality_score: 9
rag_relevance: 7
tags: ["agent-engine", "cli-tools", "mcp-integration", "context-management", "permission-system"]
source: "https://github.com/iyulab/ironhive-agent"
discovered_at: "2026-07-02T22:10:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
IronHive.Agent is a reusable .NET-based agent engine designed for building AI-powered CLI tools. It provides core agent loops, context management, MCP plugin integration, permission systems, and built-in tools for secure and efficient agent operations.

## Key Features
- Single-threaded agent loop with streaming support for real-time interactions
- Smart context management with auto-compaction and prompt caching
- Mode system (Plan/Work/HITL) with tool filtering and sub-agent spawning
- MCP plugin integration supporting Stdio and HTTP/SSE transports with health checks
- Rule-based permission system with sensible defaults and customizable rules

## Why It Matters for RAG Builders
It provides a robust, reusable foundation for building secure and efficient AI-powered CLI agents with built-in safety, context management, and MCP integration.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10.0+
Automated review identified **.NET 10.0+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft.Extensions.AI
Automated review identified **Microsoft.Extensions.AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dependency Injection
Automated review identified **Dependency Injection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
