---
title: "Czarnak/tia-portal-mcp"
category: "Tooling"
tech_stack: ["C#", ".NET 8", ".NET Framework 4.8", "Model Context Protocol (MCP)", "Siemens Openness API", "JSON", "STDIO"]
quality_score: 9
rag_relevance: 8
tags: ["Siemens TIA Portal", "MCP server", "Industrial automation", "PLC programming", "AI agent integration"]
source: "https://github.com/Czarnak/tia-portal-mcp"
discovered_at: "2026-06-28T12:20:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that bridges AI agents and LLMs to Siemens SIMATIC TIA Portal V21 via the Siemens Openness API. It enables inspection, modification, and lifecycle management of TIA Portal projects, including PLC blocks, tag tables, hardware configurations, and network devices.

## Key Features
- 16 MCP tools for project discovery, lifecycle operations, and data manipulation
- Batch read/write operations with safety tokens for write validation
- Supports PLC block export/import, tag table management, and hardware/network discovery
- Two-process architecture (MCP host + .NET Framework worker) to handle Siemens Openness API limitations
- Audit logging for all write operations with safety checks to prevent unintended changes

## Why It Matters for RAG Builders
It enables AI agents to directly interact with and modify Siemens TIA Portal projects, bridging the gap between AI-driven automation and industrial control systems.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 8
Automated review identified **.NET 8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET Framework 4.8
Automated review identified **.NET Framework 4.8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Siemens Openness API
Automated review identified **Siemens Openness API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STDIO
Automated review identified **STDIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
