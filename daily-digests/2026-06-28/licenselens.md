---
title: "cognis-digital/licenselens"
category: "Tooling"
tech_stack: ["Python", "SPDX", "CycloneDX", "SARIF", "OSV", "JSON", "CLI"]
quality_score: 9
rag_relevance: 7
tags: ["license compliance", "SBOM generation", "vulnerability scanning", "CI/CD integration", "offline operation"]
source: "https://github.com/cognis-digital/licenselens"
discovered_at: "2026-06-28T07:03:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LICENSELENS is a developer-first CLI tool that audits dependency licenses, generates SBOMs, and checks for vulnerabilities in Python projects. It operates offline, supports CI/CD integration, and provides policy-based gating for license compliance.

## Key Features
- Normalizes licenses to canonical SPDX IDs for accurate classification
- Gates CI/CD pipelines based on allow/warn/forbid policies with exit codes
- Generates CycloneDX 1.5 SBOM and SARIF 2.1.0 reports for code scanning
- Performs offline vulnerability enrichment using a bundled ~262k-record OSV database
- Supports air-gapped environments with offline database refresh capability

## Why It Matters for RAG Builders
It ensures AI and software projects comply with license policies and mitigate supply-chain risks by providing automated, offline license and vulnerability auditing essential for secure deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPDX
Automated review identified **SPDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV
Automated review identified **OSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
