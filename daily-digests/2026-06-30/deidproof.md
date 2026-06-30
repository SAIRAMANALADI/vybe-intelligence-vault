---
title: "cognis-digital/deidproof"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "SARIF", "JSON", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["de-identification", "HIPAA compliance", "k-anonymity", "l-diversity", "healthcare data"]
source: "https://github.com/cognis-digital/deidproof"
discovered_at: "2026-06-30T13:11:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DEIDPROOF is a re-identification risk assessment tool that evaluates datasets for k-anonymity, l-diversity, and HIPAA Safe Harbor compliance. It provides CLI, JSON, and SARIF outputs to validate de-identified healthcare data before sharing or publishing.

## Key Features
- Computes k-anonymity and l-diversity metrics for dataset privacy validation
- Performs HIPAA Safe Harbor compliance checks (18 categories)
- Supports multiple output formats: table, JSON, and SARIF 2.1.0 for CI/CD integration
- MCP-native for AI agent interoperability and self-hostable deployment
- Polyglot ports available (Python, JavaScript, Go, Rust)

## Why It Matters for RAG Builders
It ensures AI and healthcare datasets are properly de-identified before use, preventing privacy breaches and compliance violations in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
