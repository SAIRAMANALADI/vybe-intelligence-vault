---
title: Czarnak/tia-portal-mcp
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- C#
- .NET 8
- .NET Framework 4.8
- Siemens Openness API
- Model Context Protocol (MCP)
- JSON
- Windows
- Siemens TIA Portal V21
quality_score: 9
rag_relevance: 8
tags:
- Siemens TIA Portal
- MCP server
- PLC automation
- Industrial IoT
- AI agent integration
source: https://github.com/Czarnak/tia-portal-mcp
discovered_at: '2026-07-07T18:59:39Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that bridges Siemens SIMATIC TIA Portal V21 with AI agents and LLMs via the Siemens Openness API. It enables inspection, modification, and lifecycle management of TIA Portal projects, including PLC blocks, tag tables, hardware configurations, and network devices.

## Key Features
- Enables AI agents to interact with Siemens TIA Portal projects via MCP for inspection and modification
- Supports batch operations for read/write operations (up to 50 items per batch) with safety tokens for write operations
- Provides project lifecycle management (open, save, archive, close) and hardware/network discovery
- Includes cross-reference diagnostics, hardware catalog search, and compile/check diagnostics
- Uses a dual-process architecture (.NET 8 host + .NET Framework 4.8 worker) to avoid .NET compatibility issues with Siemens Openness API

## Why It Matters for RAG Builders
It bridges Siemens industrial automation systems with AI agents, enabling real-time inspection and controlled modification of PLC projects for AI-driven industrial IoT and automation workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 8
Automated review identified **.NET 8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET Framework 4.8
Automated review identified **.NET Framework 4.8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Siemens Openness API
Automated review identified **Siemens Openness API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows
Automated review identified **Windows** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Siemens TIA Portal V21
Automated review identified **Siemens TIA Portal V21** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
