---
title: "cognis-digital/pipewatch-pro"
category: "Tooling"
tech_stack: ["Python", "GitHub Actions", "GitLab CI", "OSV Database", "SARIF", "JSON", "YAML parsing (stdlib-only)"]
quality_score: 9
rag_relevance: 8
tags: ["CI/CD security", "supply-chain auditing", "offline vulnerability scanning", "OWASP Top 10", "air-gapped environments"]
source: "https://github.com/cognis-digital/pipewatch-pro"
discovered_at: "2026-06-28T07:04:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PIPEWATCH-PRO is a passive, offline CI/CD supply-chain auditor that analyzes GitHub Actions and GitLab CI pipelines for OWASP Top 10 vulnerabilities and enriches components with offline OSV vulnerability data. It operates without network dependencies, making it ideal for air-gapped environments.

## Key Features
- Passive and offline analysis of CI/CD pipelines (GitHub Actions/GitLab CI)
- Detection of OWASP CI/CD Top 10 vulnerabilities (e.g., unpinned actions, remote code execution, secret exposure)
- Offline OSV vulnerability enrichment with 262k+ records across multiple ecosystems
- Edge/air-gap support via offline data-feed management and sneakernet compatibility
- Multiple output formats (table, JSON, SARIF) for integration with CI/CD systems and dashboards

## Why It Matters for RAG Builders
It enables secure CI/CD pipeline auditing in air-gapped or restricted environments, reducing supply-chain attack surfaces before deployment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitLab CI
Automated review identified **GitLab CI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV Database
Automated review identified **OSV Database** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML parsing (stdlib-only)
Automated review identified **YAML parsing (stdlib-only)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
