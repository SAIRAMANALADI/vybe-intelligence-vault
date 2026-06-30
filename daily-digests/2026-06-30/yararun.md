---
title: "cognis-digital/yararun"
category: "Tooling"
tech_stack: ["Python", "YARA", "Regex", "SARIF", "CI/CD", "CLI"]
quality_score: 9
rag_relevance: 7
tags: ["malware detection", "IOC triage", "YARA engine", "CI integration", "offline threat intelligence"]
source: "https://github.com/cognis-digital/yararun"
discovered_at: "2026-06-30T03:54:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
YARARUN is a lightweight, self-hostable YARA-subset rule engine designed for malware and IOC triage. It scans directories or files against predefined or custom rules, providing prioritized findings in multiple formats (table, JSON, SARIF) for integration into workflows, CI pipelines, or AI-driven analysis.

## Key Features
- YARA-subset rule engine with text/hex/regex support and advanced modifiers (xor, nocase, wide, etc.)
- File intelligence module for entropy, file type, and hash calculations
- Multi-format output (table, JSON, SARIF 2.1.0) with severity-based CI gating
- Bundled triage rule pack covering malware, droppers, ransomware, and network IOCs
- Edge/air-gap threat-intel feeds for offline IOC catalogs

## Why It Matters for RAG Builders
It provides a lightweight, scriptable way to pre-filter and triage files for malware or suspicious patterns before deeper AI analysis, reducing noise and improving RAG pipeline efficiency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YARA
Automated review identified **YARA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
