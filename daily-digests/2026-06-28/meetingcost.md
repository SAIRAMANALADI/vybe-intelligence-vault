---
title: "cognis-digital/meetingcost"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "MCP (Model Context Protocol)", "SARIF", "JSON", "CI/CD"]
quality_score: 9
rag_relevance: 7
tags: ["meeting cost analysis", "calendar parsing", "self-hosted", "CI integration", "AI agent tooling"]
source: "https://github.com/cognis-digital/meetingcost"
discovered_at: "2026-06-28T16:13:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI tool that computes the dollar cost of meetings by parsing .ics calendar files, supporting self-hosting, CI integration, and multi-language ports (Python, JavaScript, Go, Rust). It provides machine-readable outputs (JSON/SARIF) for automation and AI agent interoperability via MCP.

## Key Features
- Parses .ics calendar files to compute meeting costs with customizable salary and overhead rates
- Supports multiple output formats (table, JSON, SARIF) for integration with dashboards and CI pipelines
- MCP-native for direct use with AI agents (Claude Desktop, Cursor, etc.)
- Polyglot ports available in Python, JavaScript, Go, and Rust
- Self-hostable with Docker, CI-ready, and supports exit codes for automation

## Why It Matters for RAG Builders
It provides a lightweight, self-hostable way to quantify meeting costs for budgeting and efficiency analysis, with outputs compatible with AI agent workflows and CI pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
