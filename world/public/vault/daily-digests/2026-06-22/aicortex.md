---
title: IkarusMK/AIcortex
category: world/public/vault/daily-digests/2026-06-22
tech_stack:
- Python
- FastMCP
- MCP (Model Context Protocol)
- Docker
- MQTT
- FTP/FTPS
- OAuth
- SSRF Egress Guard
- Cron Scheduling
quality_score: 9
rag_relevance: 8
tags:
- self-hosted
- memory persistence
- MCP server
- multi-agent coordination
- NAS integration
source: https://github.com/IkarusMK/AIcortex
discovered_at: '2026-06-22T18:52:17Z'
evaluated_by: mistral-small-latest
---

## Summary
AICortex is a self-hosted MCP server that transforms a NAS into a persistent 'brain' for Claude, enabling durable memory, skill routing, device integration, and scheduling. It acts as a custom connector, allowing Claude to retain context and tools across sessions while keeping all data local to the user's network.

## Key Features
- Persistent memory and context across all Claude sessions via NAS storage
- Dynamic skill and tool registration without redeployment (skills as data)
- Multi-agent coordination with shared memory, inbox, and task board
- Secure secret vault with encrypted storage and fail-closed authentication
- Cross-LLM session handoff with auto-expiring session logs for continuity

## Why It Matters for RAG Builders
AICortex enables AI assistants like Claude to maintain persistent, personalized context and tools across sessions without relying on cloud storage, making it essential for privacy-focused, self-hosted AI workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MQTT
Automated review identified **MQTT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTP/FTPS
Automated review identified **FTP/FTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSRF Egress Guard
Automated review identified **SSRF Egress Guard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron Scheduling
Automated review identified **Cron Scheduling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
