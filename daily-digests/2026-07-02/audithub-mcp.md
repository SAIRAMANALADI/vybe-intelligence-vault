---
title: "Veridise/audithub-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "AuditHub SDK", "YAML", "uv (package manager)", "OIDC (for authentication)"]
quality_score: 8
rag_relevance: 7
tags: ["MCP server", "blockchain security", "audit tools", "LLM integration", "read-only API"]
source: "https://github.com/Veridise/audithub-mcp"
discovered_at: "2026-07-02T17:47:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
audithub-mcp is an MCP (Model Context Protocol) server that enables LLM-based agents to interact with AuditHub, a blockchain security platform. It provides read-only access to organizations, projects, tasks, findings, and other resources, with optional opt-in features for task execution and version creation.

## Key Features
- Read-only access to AuditHub resources (organizations, projects, tasks, findings)
- Opt-in task execution (OrCa, DeFi Vanguard) and version creation
- Secure credential isolation and ID allowlisting for access control
- Local findings parsing and log file processing
- Configurable via YAML for agent integration (Codex CLI, Claude Code)

## Why It Matters for RAG Builders
It bridges LLM-based agents with AuditHub's blockchain security tools, enabling automated audits, task monitoring, and findings analysis for AI-driven security workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AuditHub SDK
Automated review identified **AuditHub SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC (for authentication)
Automated review identified **OIDC (for authentication)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
