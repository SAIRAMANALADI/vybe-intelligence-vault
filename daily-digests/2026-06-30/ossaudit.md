---
title: "cognis-digital/ossaudit"
category: "Tooling"
tech_stack: ["Python", "OSV.dev", "SPDX", "JSON", "SARIF", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["license compliance", "vulnerability scanning", "AGPL contamination", "NOTICE generation", "CI/CD integration"]
source: "https://github.com/cognis-digital/ossaudit"
discovered_at: "2026-06-30T03:52:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OSSAUDIT is a self-hostable, MCP-native tool for auditing open-source software dependencies for license compliance, AGPL contamination, and vulnerability scanning. It generates NOTICE attribution files and supports offline/air-gap operations for edge deployments.

## Key Features
- Audits dependency manifests for license policy violations (AGPL, copyleft, etc.)
- Generates structured NOTICE attribution files for compliance
- Cross-references dependencies against OSV.dev for vulnerability detection
- Supports offline/air-gap operations with bundled vulnerability databases
- Outputs results in table, JSON, or SARIF formats for CI/CD pipelines

## Why It Matters for RAG Builders
It ensures AI stack builders avoid legal risks from non-compliant open-source dependencies and vulnerabilities in their supply chain.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev
Automated review identified **OSV.dev** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPDX
Automated review identified **SPDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
