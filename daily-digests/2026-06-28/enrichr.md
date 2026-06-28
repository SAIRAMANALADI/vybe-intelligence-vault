---
title: "cognis-digital/enrichr"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "MCP", "JSON/SARIF output", "SQLite (for caching)"]
quality_score: 9
rag_relevance: 7
tags: ["lead enrichment", "firmographics", "contact validation", "self-hosted", "caching"]
source: "https://github.com/cognis-digital/enrichr"
discovered_at: "2026-06-28T12:18:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ENRICHR is a CLI tool for enriching leads CSV files with firmographics, tech stack data, and contact validation using pluggable providers. It caches results to avoid duplicate API calls and supports self-hosting, MCP-native integration, and polyglot ports.

## Key Features
- Pluggable provider interface for firmographics and contact validation
- Local caching to avoid redundant API calls and reduce costs
- Supports multiple output formats (table, JSON, SARIF) for CI/CD pipelines
- MCP-native integration for AI agent workflows
- Polyglot ports available (Python, JavaScript, Go, Rust)

## Why It Matters for RAG Builders
ENRICHR streamlines lead enrichment for RAG pipelines by normalizing and enriching data upfront, reducing noise and improving the quality of downstream AI processing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/SARIF output
Automated review identified **JSON/SARIF output** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (for caching)
Automated review identified **SQLite (for caching)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
