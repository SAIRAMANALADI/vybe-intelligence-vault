---
title: "cognis-digital/keyhunt"
category: "Tooling"
tech_stack: ["Python", "PEM", "RSA", "ECC", "SARIF", "JSON", "Docker", "CI/CD"]
quality_score: 9
rag_relevance: 7
tags: ["security-scanner", "hardcoded-secrets", "firmware-analysis", "CI-gating", "offline-tool"]
source: "https://github.com/cognis-digital/keyhunt"
discovered_at: "2026-06-30T03:52:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
KeyHunt is a security scanner designed to detect hardcoded private keys, API tokens, default credentials, and weak cryptographic material in firmware blobs and filesystem dumps. It supports multiple output formats and integrates seamlessly with CI/CD pipelines.

## Key Features
- Detects 12+ types of secrets including PEM keys, API tokens, and default credentials
- Supports multiple output formats (table, JSON, SARIF) for integration with CI/CD
- Redacts secrets by default for safe logging and CI use
- Includes a bundled offline vulnerability database with 262k+ records
- Self-hostable, offline-capable, and supports MCP for agent-driven workflows

## Why It Matters for RAG Builders
It helps RAG builders secure their AI stacks by detecting hardcoded secrets and vulnerabilities in firmware or filesystem dumps, ensuring no sensitive data leaks into production.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PEM
Automated review identified **PEM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RSA
Automated review identified **RSA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ECC
Automated review identified **ECC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
