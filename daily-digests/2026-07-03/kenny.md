---
title: "t11z/kenny"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "FastMCP", "Rust", "SQLite", "Docker", "Claude (MCP)", "PowerShell", "Windows Service", "MkDocs"]
quality_score: 9
rag_relevance: 6
tags: ["remote administration", "fleet monitoring", "Windows management", "MCP", "self-hosted"]
source: "https://github.com/t11z/kenny"
discovered_at: "2026-07-03T22:08:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
kenny is a self-hosted remote administration and fleet monitoring tool for Windows PCs, enabling operators to manage devices via a web dashboard or interact with an MCP endpoint driven by Claude. It provides real-time telemetry, remote tool execution, and health rule enforcement for small fleets or family setups.

## Key Features
- Real-time telemetry collection (~25 sections) including disk, memory, Defender, and Windows Update status
- Operator dashboard with fleet health overview, drill-down analytics, and remote action tools (e.g., Quick Assist, shell access)
- Agent-server communication via WSS with NAT/firewall-friendly outbound dialing and protocol versioning
- Claude-driven MCP endpoint for natural language remote administration with confirm-gate for destructive actions
- Automated agent lifecycle management including self-updates, installer generation, and service control

## Why It Matters for RAG Builders
It provides a secure, self-hosted orchestration layer for managing Windows fleets via AI-driven tools, reducing manual intervention and enabling scalable remote administration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude (MCP)
Automated review identified **Claude (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Service
Automated review identified **Windows Service** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MkDocs
Automated review identified **MkDocs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
