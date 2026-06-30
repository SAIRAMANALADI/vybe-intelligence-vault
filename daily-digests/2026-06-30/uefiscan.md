---
title: "cognis-digital/uefiscan"
category: "Tooling"
tech_stack: ["Python", "CHIPSEC", "UEFI", "Secure Boot", "CISA KEV", "SARIF", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["UEFI security", "firmware auditing", "Secure Boot validation", "threat detection", "offline analysis"]
source: "https://github.com/cognis-digital/uefiscan"
discovered_at: "2026-06-30T03:55:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
UEFISCAN is a security auditing tool designed to analyze UEFI firmware dumps for vulnerabilities such as missing Secure Boot keys, unsigned modules, S3 boot-script vulnerabilities, and known SMM threats. It provides a CLI-based, scriptable, and self-hostable solution for firmware security assessment.

## Key Features
- Passive and active mode analysis of UEFI firmware dumps
- Detection of missing Secure Boot keys, unsigned modules, and S3 boot-script vulnerabilities
- Integration with CISA KEV threat-intel feed for CVE cross-referencing
- Supports multiple output formats (JSON, SARIF, table) for CI/CD integration
- Self-hostable, offline-capable, and MCP-native for agent-driven workflows

## Why It Matters for RAG Builders
UEFISCAN provides critical firmware security validation that helps prevent supply-chain attacks and ensures compliance with secure boot standards, essential for RAG builders integrating hardware-level security checks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CHIPSEC
Automated review identified **CHIPSEC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UEFI
Automated review identified **UEFI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Secure Boot
Automated review identified **Secure Boot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CISA KEV
Automated review identified **CISA KEV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
