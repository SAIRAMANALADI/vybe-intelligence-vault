---
title: "cognis-digital/sbomgate"
category: "Tooling"
tech_stack: ["Python", "CycloneDX", "SPDX", "OSV", "CISA-KEV", "EPSS", "SARIF", "JSON", "Docker"]
quality_score: 9
rag_relevance: 7
tags: ["SBOM", "vulnerability scanning", "supply chain security", "CI/CD gating", "offline threat intelligence"]
source: "https://github.com/cognis-digital/sbomgate"
discovered_at: "2026-06-30T03:53:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SBOMGATE is a lightweight, self-hostable tool for continuous Software Bill of Materials (SBOM) diffing, vulnerability matching, and maintainer-change tracking. It enables security teams to monitor supply chain risks, prioritize vulnerabilities, and gate CI/CD pipelines based on configurable severity thresholds.

## Key Features
- Parses CycloneDX, SPDX, and native JSON SBOMs with auto-detection
- Diffs two SBOMs to identify added/removed components, version changes, and maintainer changes (high-severity signal)
- Matches SBOMs against bundled offline OSV vulnerability database (262K+ records) without network dependency
- Supports CI/CD gating with configurable severity thresholds and exit codes
- Outputs results in human-readable, JSON, or SARIF 2.1.0 formats for integration with SIEMs and code-scanning tools

## Why It Matters for RAG Builders
It provides critical supply chain security monitoring for RAG builders by enabling automated, offline vulnerability detection and prioritization in AI pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPDX
Automated review identified **SPDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV
Automated review identified **OSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CISA-KEV
Automated review identified **CISA-KEV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EPSS
Automated review identified **EPSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
