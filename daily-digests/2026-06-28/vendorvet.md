---
title: "cognis-digital/vendorvet"
category: "Tooling"
tech_stack: ["Python", "JSON", "SARIF", "OSV", "CISA-KEV", "Docker", "CI/CD"]
quality_score: 9
rag_relevance: 8
tags: ["third-party risk management", "SBOM", "compliance automation", "vendor assessment", "GRC"]
source: "https://github.com/cognis-digital/vendorvet"
discovered_at: "2026-06-28T07:02:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VendorVet is a third-party vendor risk assessment tool that evaluates security questionnaires and SBOMs (Software Bill of Materials) to generate residual risk scores and compliance reports. It supports offline vulnerability matching against a bundled 262k-record database and live enrichment from OSV and CISA-KEV feeds.

## Key Features
- Scores security questionnaires with weighted controls and inherent-risk multipliers
- Cross-references SBOMs against vulnerability databases for exact-version matching
- Offline vulnerability matching against a bundled 262k-record OSV/GHSA database
- Live enrichment from OSV and CISA-KEV feeds with cache support for offline use
- Outputs results in table, JSON, or SARIF 2.1.0 formats for CI/CD integration

## Why It Matters for RAG Builders
It provides automated, audit-ready third-party risk assessments that integrate seamlessly into CI/CD pipelines, enabling RAG builders to enforce compliance and security gates for vendor integrations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV
Automated review identified **OSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CISA-KEV
Automated review identified **CISA-KEV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
