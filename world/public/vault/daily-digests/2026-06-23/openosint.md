---
title: "OpenOSINT/OpenOSINT"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Anthropic Claude API", "Ollama", "OpenAI-compatible endpoints", "Asyncio", "FastAPI", "ReportLab (PDF generation)", "Pydantic", "Typer (CLI)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
tags: ["OSINT", "AI agent", "MCP server", "security research", "data collection"]
source: "https://github.com/OpenOSINT/OpenOSINT"
discovered_at: "2026-06-23T19:10:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenOSINT is an AI-powered OSINT (Open Source Intelligence) agent that provides interactive REPL, CLI, MCP server, and web UI interfaces. It integrates 18 modular tools for investigating emails, usernames, IPs, domains, and more, while supporting multiple AI backends like Anthropic Claude, local Ollama, or OpenAI-compatible endpoints.

## Key Features
- 18 modular OSINT tools (email, IP, domain, WHOIS, breach, Shodan, VirusTotal, etc.)
- MCP server integration for seamless use with Claude Code, Claude Desktop, and other MCP-compatible clients
- Support for multiple AI backends (Anthropic, Ollama, OpenAI-compatible endpoints) with real subprocess execution to avoid hallucinations
- Parallel tool execution via asyncio for faster investigations
- Interactive REPL, CLI, web UI, and PDF/Markdown report generation

## Why It Matters for RAG Builders
OpenOSINT provides a robust, modular framework for AI-driven OSINT investigations, enabling RAG builders to integrate real-time data collection and analysis into their pipelines while ensuring accuracy and compliance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude API
Automated review identified **Anthropic Claude API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible endpoints
Automated review identified **OpenAI-compatible endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ReportLab (PDF generation)
Automated review identified **ReportLab (PDF generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer (CLI)
Automated review identified **Typer (CLI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
