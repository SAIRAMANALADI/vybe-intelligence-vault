---
title: "cognis-digital/sanctscan"
category: "Tooling"
tech_stack: ["Python", "CLI", "MCP (Model Context Protocol)", "Docker", "SARIF", "JSON", "CSV/JSON watchlists"]
quality_score: 8
rag_relevance: 7
tags: ["sanctions screening", "fuzzy matching", "AML compliance", "self-hosted", "MCP-native"]
source: "https://github.com/cognis-digital/sanctscan"
discovered_at: "2026-06-28T16:12:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SANCTSCAN is a self-hostable CLI tool designed to screen counterparties and transactions against OFAC, EU, and UN sanctions lists using fuzzy name matching and explainable hit scoring. It provides deterministic, auditable results with support for JSON, SARIF, and MCP-native integrations.

## Key Features
- Screens names against OFAC/EU/UN sanctions lists with explainable fuzzy matching
- Deterministic and auditable hit scoring with configurable thresholds
- Supports JSON, SARIF, and MCP-native outputs for AI/agent integration
- Self-hostable, CI-ready, and polyglot (Python, JavaScript, Go, Rust ports)
- Non-zero exit codes for pipeline gating and CI/CD integration

## Why It Matters for RAG Builders
It provides a critical compliance layer for AI systems handling financial transactions by screening against global sanctions lists with explainable, auditable results.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV/JSON watchlists
Automated review identified **CSV/JSON watchlists** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
