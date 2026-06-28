---
title: "cognis-digital/depgraph"
category: "Tooling"
tech_stack: ["Python", "OSV (Open Source Vulnerabilities)", "Scorecard", "Levenshtein distance", "JSON/JSONL", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["dependency auditing", "supply chain security", "offline vulnerability scanning", "typosquat detection", "CI/CD integration"]
source: "https://github.com/cognis-digital/depgraph"
discovered_at: "2026-06-28T07:03:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DEPGRAPH is an offline dependency-risk auditor that grades software dependencies (A-F) using Scorecard heuristics, OSV vulnerability matching, and typosquat detection. It operates entirely offline with a bundled 262k-record vulnerability corpus, ensuring no data exfiltration.

## Key Features
- Offline vulnerability matching against 262k OSV advisories without network access
- Grades dependencies A-F using maintainer health, age, and typosquat heuristics
- Supports multiple manifest formats (requirements.txt, package.json, Pipfile)
- Provides CI-native exit codes and severity thresholds for automated gates
- Includes 35 edge/air-gap intelligence feeds (CISA KEV, EPSS, NVD, etc.)

## Why It Matters for RAG Builders
It enables secure, offline dependency auditing critical for AI/ML pipelines where data exfiltration risks or air-gapped environments make SaaS tools unusable.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV (Open Source Vulnerabilities)
Automated review identified **OSV (Open Source Vulnerabilities)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Scorecard
Automated review identified **Scorecard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Levenshtein distance
Automated review identified **Levenshtein distance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
