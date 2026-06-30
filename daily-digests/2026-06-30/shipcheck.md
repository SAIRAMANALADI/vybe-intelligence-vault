---
title: "cognis-digital/shipcheck"
category: "Tooling"
tech_stack: ["Python", "Docker", "OSV (Open Source Vulnerabilities)", "CLI", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["Docker security", "offline vulnerability scanning", "CI/CD tooling", "container hygiene", "CVE matching"]
source: "https://github.com/cognis-digital/shipcheck"
discovered_at: "2026-06-30T03:51:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Shipcheck is an offline Dockerfile linter and vulnerability scanner that enforces image-size hygiene and matches installed packages against a bundled 262k-record OSV CVE database without requiring network access.

## Key Features
- Offline Dockerfile linting with best-practice and size hygiene rules
- Bundled 262k-record OSV vulnerability database for real CVE matching
- Polyglot ports (Python, Go, Rust, Node) for cross-platform compatibility
- Machine-readable JSON output and CI-friendly exit codes
- MCP server support for AI agent integration

## Why It Matters for RAG Builders
It ensures secure, efficient Docker images by detecting vulnerabilities and best-practice violations offline, critical for AI stack builders who prioritize reproducibility and security.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV (Open Source Vulnerabilities)
Automated review identified **OSV (Open Source Vulnerabilities)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
