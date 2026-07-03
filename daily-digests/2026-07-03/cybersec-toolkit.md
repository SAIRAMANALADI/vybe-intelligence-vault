---
title: "26zl/cybersec-toolkit"
category: "Tooling"
tech_stack: ["Python", "Bash", "FastMCP", "Model Context Protocol (MCP)", "Docker", "GitHub Actions", "Shellcheck", "Bats", "Ruff", "Pytest"]
quality_score: 9
rag_relevance: 8
tags: ["cybersecurity", "AI-driven tooling", "MCP server", "autonomous solver", "tool registry"]
source: "https://github.com/26zl/cybersec-toolkit"
discovered_at: "2026-07-03T00:01:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A cybersecurity toolkit with embedded AI integration via an MCP server, enabling AI agents to discover, recommend, and execute 580+ security tools through a governed execution path. It includes a modular bash installer for Linux and Termux, supporting 18 modules, 14 profiles, and 12 install methods.

## Key Features
- Embedded MCP server for AI agent integration (Claude Code, Cursor, local LLMs)
- Modular bash installer supporting 580+ tools, 18 modules, 14 profiles, and 12 install methods
- Governed tool execution with policy engine (security.py) for safe AI-driven tool usage
- Dual-mode operation: companion by default, autonomous solver when explicitly authorized
- Cross-platform support (Linux, Termux, Docker) with CI validation for tool registry consistency

## Why It Matters for RAG Builders
It bridges the gap between AI agents and cybersecurity tooling by enabling safe, governed execution of 580+ tools through a standardized MCP interface, making it essential for AI-driven security operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shellcheck
Automated review identified **Shellcheck** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bats
Automated review identified **Bats** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
