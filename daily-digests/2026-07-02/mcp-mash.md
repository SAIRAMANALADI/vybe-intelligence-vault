---
title: "AsaTyr2018/MCP-MASH"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "YAML", "Docker", "Mailbridge MCP"]
quality_score: 7
rag_relevance: 6
tags: ["mail automation", "MCP server", "script scheduling", "YAML configuration", "Mailbridge integration"]
source: "https://github.com/AsaTyr2018/MCP-MASH"
discovered_at: "2026-07-02T21:06:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP-MASH is a personal Mail Automation Script Host (MCP server) designed for scheduled mail automation tasks. It integrates with Mailbridge MCP to handle script execution, scheduling, and reporting while delegating mail account management and policy enforcement to Mailbridge.

## Key Features
- MCP-driven mail automation with YAML scripts for instructions
- Scheduled and manual script execution with dry-run validation gates
- Integration with Mailbridge for mail account management and policy enforcement
- SQLite metadata store and file-backed script storage
- Weekly report generation and automated forwarding with attachment handling

## Why It Matters for RAG Builders
MCP-MASH enables AI-driven mail automation workflows by providing a structured, MCP-compatible host for executing and scheduling mail-related scripts while ensuring security through Mailbridge's policy enforcement.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mailbridge MCP
Automated review identified **Mailbridge MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
