---
title: "cognis-digital/sbirscout"
category: "Tooling"
tech_stack: ["Python", "CLI", "MCP (Model Context Protocol)", "Docker", "SARIF", "JSON"]
quality_score: 8
rag_relevance: 7
tags: ["SBIR/STTR", "topic discovery", "bid scoring", "self-hostable", "MCP-native"]
source: "https://github.com/cognis-digital/sbirscout"
discovered_at: "2026-06-28T16:13:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SBIRSCOUT is a self-hostable tool for SBIR/STTR topic discovery and bid scoring, aggregating data from DSIP, SBIR.gov, and NIH sources. It prioritizes topics against capability profiles and outputs results in JSON, table, or SARIF formats for integration into AI stacks or CI pipelines.

## Key Features
- Normalizes and scores SBIR/STTR topics from multiple federal sources (DSIP, SBIR.gov, NIH)
- Supports JSON, table, and SARIF output formats for CI/CD and AI tooling integration
- MCP-native server for AI agent interoperability (Claude, Cursor, etc.)
- Polyglot ports available (Python, JavaScript, Go, Rust)
- Zero-config CLI with exit codes for CI gate automation

## Why It Matters for RAG Builders
It streamlines federal funding opportunity discovery and prioritization for AI engineering teams, enabling automated, reproducible workflows in RAG and agent-based systems.

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



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
