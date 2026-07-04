---
title: "j2h4u/enji-guard-cli"
category: "Tooling"
tech_stack: ["Python 3.14", "Typer", "FastMCP", "Docker", "GitHub API", "OpenAPI"]
quality_score: 8
rag_relevance: 7
tags: ["security auditing", "GitHub monitoring", "MCP server", "CLI tool", "repository management"]
source: "https://github.com/j2h4u/enji-guard-cli"
discovered_at: "2026-07-04T18:07:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
enji-guard-cli is a Python-based CLI and MCP bridge for Enji Guard, enabling GitHub repository monitoring, project management, and security auditing. It provides a Dockerized runtime with a Typer CLI and FastMCP server for agent integration.

## Key Features
- Dockerized CLI and MCP bridge for Enji Guard with minimal host dependencies
- Project and repository management (add, remove, move, list) with explicit scoping
- Security auditing workflows (recon, report generation, status tracking) with retry-safe mutating commands
- FastMCP server for agent-friendly access to project metadata, scores, and reports
- Telemetry logging for operational visibility and future OpenTelemetry integration

## Why It Matters for RAG Builders
It provides a standardized CLI and MCP interface for Enji Guard, enabling AI agents to automate security audits, repository management, and compliance workflows across GitHub repositories.

## Tech Stack Deep Dive
### Python 3.14
Automated review identified **Python 3.14** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer
Automated review identified **Typer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
