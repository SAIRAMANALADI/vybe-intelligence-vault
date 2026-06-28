---
title: "cognis-digital/asnmap"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "MCP (Model Context Protocol)", "SARIF", "JSON"]
quality_score: 8
rag_relevance: 6
tags: ["network analysis", "ASN mapping", "security triage", "CI/CD integration", "self-hosted"]
source: "https://github.com/cognis-digital/asnmap"
discovered_at: "2026-06-28T14:48:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ASNMAP is a lightweight, self-hostable CLI tool that maps ASN/CIDR ownership and neighbor relationships from WHOIS/RIR exports, enabling defensive triage and prioritized findings for security and network analysis.

## Key Features
- Parses WHOIS/RIR exports to map ASN/CIDR ownership and neighbor relationships
- Supports multiple output formats (table, JSON, HTML, SARIF) for integration with existing workflows
- MCP-native for AI agent interoperability and automation
- CI-ready with exit codes for pipeline gating and risk scoring
- Polyglot ports available (Python, JavaScript, Go, Rust) for cross-platform compatibility

## Why It Matters for RAG Builders
ASNMAP provides critical network context for RAG builders by mapping ASN/CIDR ownership, enabling more accurate and secure data retrieval and analysis in AI pipelines.

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



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
