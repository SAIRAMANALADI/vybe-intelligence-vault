---
title: "imatza-rh/mcp-zuul"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP/WebSocket", "Kerberos/SPNEGO", "LogJuicer (ML-based log analysis)", "JUnit XML parsing"]
quality_score: 9
rag_relevance: 9
tags: ["CI/CD debugging", "MCP server", "Zuul integration", "log analysis", "build failure diagnosis"]
source: "https://github.com/imatza-rh/mcp-zuul"
discovered_at: "2026-06-28T20:14:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-zuul is an MCP (Model Context Protocol) server that provides structured access to Zuul CI systems, enabling AI agents and LLMs to debug build failures, analyze logs, and monitor pipeline status without manual UI navigation.

## Key Features
- Structured failure analysis with task-level details from Zuul's job-output.json
- Live console streaming for running builds via WebSocket
- ML-based log anomaly detection with LogJuicer integration
- Kerberos/SPNEGO authentication support for secure Zuul instances
- Pre-built prompt templates for automated failure diagnosis and comparison

## Why It Matters for RAG Builders
It enables AI agents to programmatically debug CI/CD failures and analyze logs, reducing manual UI interactions and accelerating root cause analysis for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/WebSocket
Automated review identified **HTTP/WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kerberos/SPNEGO
Automated review identified **Kerberos/SPNEGO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LogJuicer (ML-based log analysis)
Automated review identified **LogJuicer (ML-based log analysis)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JUnit XML parsing
Automated review identified **JUnit XML parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
