---
title: "cognis-digital/sbomb"
category: "Tooling"
tech_stack: ["Python", "CycloneDX", "OSV", "CISA KEV", "MCP", "SARIF", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["SBOM", "firmware security", "vulnerability scanning", "offline analysis", "CI/CD integration"]
source: "https://github.com/cognis-digital/sbomb"
discovered_at: "2026-06-28T07:05:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SBOMB is a tool for generating CycloneDX Software Bill of Materials (SBOM) from unpacked firmware root filesystems, identifying components with known CVEs and EOL kernels. It supports offline vulnerability matching with a bundled 262k-record OSV database and integrates with CI pipelines and AI agents via MCP.

## Key Features
- Generates CycloneDX 1.5 SBOM from unpacked firmware root filesystems
- Flags components with known CVEs and EOL kernels using bundled 262k-record OSV database
- Supports offline vulnerability matching and CI/CD pipeline integration
- Exposes functionality via MCP for AI agent integration
- Outputs results in multiple formats (table, JSON, SARIF) for compatibility with existing workflows

## Why It Matters for RAG Builders
It provides a critical security layer for AI stack builders by enabling automated, offline vulnerability detection in firmware components, ensuring compliance and reducing exposure to known threats.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV
Automated review identified **OSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CISA KEV
Automated review identified **CISA KEV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
