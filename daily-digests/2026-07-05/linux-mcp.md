---
title: "Mohabdo21/linux-mcp"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Linux System APIs", "Docker API", "systemd", "cgroups"]
quality_score: 8
rag_relevance: 9
tags: ["system monitoring", "MCP server", "Linux diagnostics", "real-time metrics", "Docker integration"]
source: "https://github.com/Mohabdo21/linux-mcp"
discovered_at: "2026-07-05T15:16:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
linux-mcp is a Linux system monitoring server built on the Model Context Protocol (MCP) that provides real-time system information via MCP tools over STDIO transport, including CPU, memory, disk, network, processes, Docker, and hardware metrics.

## Key Features
- Comprehensive Linux system monitoring via MCP tools (CPU, memory, disk, network, processes)
- Docker container and image management with detailed stats and logs
- Hardware and GPU analytics including temperature and power metrics
- STDIO-based MCP server for seamless integration with MCP clients (e.g., Claude Desktop)
- Snapshot capabilities for aggregated system health overviews

## Why It Matters for RAG Builders
It provides critical real-time system metrics and diagnostics for AI agents and RAG systems operating on Linux, enabling better decision-making and troubleshooting.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux System APIs
Automated review identified **Linux System APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker API
Automated review identified **Docker API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cgroups
Automated review identified **cgroups** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
