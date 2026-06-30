---
title: "cognis-digital/sbomx"
category: "Tooling"
tech_stack: ["Python", "CycloneDX", "OSV (Open Source Vulnerability)", "CISA Known Exploited Vulnerabilities (KEV)", "CLI", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["SBOM", "mobile security", "vulnerability scanning", "privacy tracking", "CI/CD integration"]
source: "https://github.com/cognis-digital/sbomx"
discovered_at: "2026-06-30T03:51:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SBOMX generates CycloneDX Software Bill of Materials (SBOM) for mobile apps by unpacking native libraries and bundled SDKs, then matches components against vulnerability and privacy-tracker databases to identify security risks.

## Key Features
- Generates CycloneDX 1.5 SBOM for APK/IPA/zip files or directories
- Matches components against offline vulnerability (OSV) and privacy-tracker databases
- Supports live threat-feed enrichment via CISA's Known-Exploited Vulnerabilities (KEV) list
- Provides four output formats: table, JSON, SARIF, and CSV for integration with CI/CD pipelines
- Self-hostable, MCP-native, and CI-ready with configurable severity-based exit codes

## Why It Matters for RAG Builders
SBOMX enables RAG builders to integrate mobile app security scanning into their pipelines, ensuring compliance and reducing supply chain risks by identifying vulnerable or privacy-invasive components before deployment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV (Open Source Vulnerability)
Automated review identified **OSV (Open Source Vulnerability)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CISA Known Exploited Vulnerabilities (KEV)
Automated review identified **CISA Known Exploited Vulnerabilities (KEV)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
