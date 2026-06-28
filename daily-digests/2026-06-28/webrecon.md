---
title: "cognis-digital/webrecon"
category: "Tooling"
tech_stack: ["Python", "CLI", "MCP", "Docker", "JSON/SARIF", "HTTP Response Analysis"]
quality_score: 9
rag_relevance: 7
tags: ["web fingerprinting", "HTTP analysis", "CI integration", "MCP-native", "security tooling"]
source: "https://github.com/cognis-digital/webrecon"
discovered_at: "2026-06-28T14:49:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Webrecon is a self-hostable tool for fingerprinting web technologies, CMS, and frameworks by analyzing HTTP response headers and body content. It provides prioritized findings in JSON, SARIF, or table formats, and integrates with AI stacks via MCP or CLI piping.

## Key Features
- Fingerprints web technologies from HTTP responses without network access
- Supports multiple output formats (JSON, SARIF, table) for integration with CI/CD pipelines
- MCP-native for AI agent interoperability (Claude Desktop, Cursor, etc.)
- Polyglot ports available in Python, JavaScript, Go, and Rust
- CI-ready with exit codes for gating and automation

## Why It Matters for RAG Builders
It enables AI stacks to accurately identify web technologies from HTTP responses, improving context and relevance for RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/SARIF
Automated review identified **JSON/SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Response Analysis
Automated review identified **HTTP Response Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
