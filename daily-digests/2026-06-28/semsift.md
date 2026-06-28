---
title: "cognis-digital/semsift"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Git", "Docker", "SARIF", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["SAST", "differential analysis", "security scanning", "CI/CD integration", "taint analysis"]
source: "https://github.com/cognis-digital/semsift"
discovered_at: "2026-06-28T16:11:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SEMSIFT is a lightweight, semantic-aware Static Application Security Testing (SAST) tool that performs differential analysis by scanning only the added lines in code diffs, enabling fast incremental security checks for pull requests without the overhead of full-repo scans.

## Key Features
- Scans only added lines in unified diffs for incremental SAST
- Supports multiple output formats (JSON, SARIF, table)
- Self-hostable, MCP-native, and CI-ready with configurable exit codes
- Polyglot ports available (Python, JavaScript, Go, Rust)
- Integrates seamlessly with AI stacks via MCP servers or CLI piping

## Why It Matters for RAG Builders
It enables AI engineering teams to integrate fast, incremental security checks into their workflows, reducing scan fatigue and improving CI/CD pipeline efficiency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
