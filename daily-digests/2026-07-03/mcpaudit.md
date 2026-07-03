---
title: "saagpatel/MCPAudit"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "PyPI", "GitHub Actions", "SARIF", "JSON", "HTML", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["MCP security", "prompt injection detection", "SSRF detection", "risk assessment", "schema drift"]
source: "https://github.com/saagpatel/MCPAudit"
discovered_at: "2026-07-03T12:18:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-audit is a security-focused tool that audits locally configured MCP (Model Context Protocol) servers for permission risks, prompt injection threats, and schema drift. It provides risk scoring, SSRF detection, and config health diagnostics without modifying configurations or exposing sensitive data.

## Key Features
- Capability inventory of MCP server tools, prompts, and resources with permission categorization
- Config-only inference mode for zero-touch audits without spawning servers or contacting endpoints
- Risk scoring (0-10) per server with weighted permission dimensions and non-tool risk signals
- Prompt injection and SSRF detection using pattern-based analysis without LLM dependency
- SARIF, JSON, and HTML report generation with redaction for safe sharing and CI integration

## Why It Matters for RAG Builders
It provides critical security auditing for MCP servers, enabling AI stack builders to proactively identify and mitigate risks like prompt injection, SSRF, and unauthorized access before deployment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML
Automated review identified **HTML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
