---
title: yatuk/mcpradar
category: daily-digests/2026-06-25
tech_stack:
- Python
- SQLite
- SARIF
- CycloneDX
- NVD CVE API
- Mermaid.js
- GitHub Actions
quality_score: 9
rag_relevance: 8
tags:
- MCP security
- prompt injection
- tool poisoning
- supply chain risk
- static analysis
source: https://github.com/yatuk/mcpradar
discovered_at: '2026-06-25T17:13:57Z'
evaluated_by: mistral-small-latest
---

## Summary
MCPRadar is a security scanner designed to detect vulnerabilities in Model Context Protocol (MCP) servers, including tool poisoning, prompt injection, secrets exposure, and supply-chain risks. It uses static and runtime analysis to identify 19+ detection rules and provides SARIF output, AIVSS scoring, and diff-based change detection.

## Key Features
- 19+ detection rules covering static, cross-server, and runtime vulnerabilities
- SARIF v2.1.0 output for GitHub Security tab integration
- AIVSS 0-10 scoring with CWE mapping for severity assessment
- SQLite-backed snapshot diff engine for rug pull detection
- CycloneDX SBOM export and NVD CVE feed sync for supply chain analysis

## Why It Matters for RAG Builders
MCPRadar is essential for securing MCP servers against critical attack vectors like tool poisoning and prompt injection, ensuring safe deployment in AI agent ecosystems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVD CVE API
Automated review identified **NVD CVE API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
