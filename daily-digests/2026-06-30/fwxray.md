---
title: "cognis-digital/fwxray"
category: "Tooling"
tech_stack: ["Python", "Shannon Entropy Analysis", "Firmware Carving", "String Extraction", "Vulnerability Databases (OSV, CISA-KEV)", "CLI", "Docker"]
quality_score: 9
rag_relevance: 7
tags: ["firmware analysis", "OTA changelog", "security diffing", "embedded systems", "vulnerability scanning"]
source: "https://github.com/cognis-digital/fwxray"
discovered_at: "2026-06-30T03:55:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FWXRAY is a firmware diffing tool designed to analyze and highlight changes between two firmware images, including new binaries, config flag flips, added certificates, and entropy shifts. It supports passive inspection, vulnerability enrichment, and CI-ready reporting for IoT/OT/embedded security workflows.

## Key Features
- Diff two firmware images to surface changes (sections, flags, entropy, strings)
- Passive and active (authorized) firmware inspection modes
- Component vulnerability enrichment via OSV and CISA-KEV databases
- Self-hostable, CI-ready, and MCP-native for automation
- Supports multiple output formats (human-readable, JSON, SARIF)

## Why It Matters for RAG Builders
FWXRAY enables RAG builders to integrate firmware diffing and vulnerability enrichment into AI-driven security workflows, ensuring accurate and actionable insights for embedded system analysis.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shannon Entropy Analysis
Automated review identified **Shannon Entropy Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firmware Carving
Automated review identified **Firmware Carving** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### String Extraction
Automated review identified **String Extraction** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vulnerability Databases (OSV, CISA-KEV)
Automated review identified **Vulnerability Databases (OSV, CISA-KEV)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
