---
title: "davidmosiah/delx-agent-utilities"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "asyncio", "httpx", "RDAP", "DNS-over-HTTPS", "JWT", "Base64", "Regex", "Cron"]
quality_score: 9
rag_relevance: 9
tags: ["AI agent utilities", "stateless tools", "MCP server", "deterministic operations", "network probes"]
source: "https://github.com/davidmosiah/delx-agent-utilities"
discovered_at: "2026-07-03T12:16:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Python package providing 41 stateless utility tools for AI agents, including URL health checks, DNS/RDAP lookups, JWT inspection, encoding/parsing, and composite reports. Designed for local-first, deterministic, and API-key-free operations with MCP-native support.

## Key Features
- 41 stateless utility tools for AI agents, including URL health checks, DNS/RDAP lookups, and JWT inspection
- No API keys required; uses only public endpoints (rdap.org, dns.google, user-supplied URLs)
- MCP-native integration with manifest, connection status, and privacy audit tools
- Fast execution with most tools completing in <100ms and networked tools in <5s
- Local-first, deterministic, and privacy-focused with no telemetry or state

## Why It Matters for RAG Builders
It provides essential stateless utility tools for AI agents, enabling reliable, API-key-free operations critical for RAG and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDAP
Automated review identified **RDAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DNS-over-HTTPS
Automated review identified **DNS-over-HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base64
Automated review identified **Base64** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron
Automated review identified **Cron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
