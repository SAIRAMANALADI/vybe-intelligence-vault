---
title: "cognis-digital/s3sniff"
category: "Tooling"
tech_stack: ["Python", "CLI", "Docker", "JSON", "SARIF"]
quality_score: 8
rag_relevance: 7
tags: ["security", "cloud", "S3", "ACL", "policy analysis"]
source: "https://github.com/cognis-digital/s3sniff"
discovered_at: "2026-06-28T14:49:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
S3Sniff is a security-focused tool designed to flag risky cloud-bucket ACLs, policies, and listings from JSON input or direct scans. It operates in detection-only mode, performing no network access or mutations, and provides prioritized findings for security triage.

## Key Features
- Analyzes S3 bucket ACLs, policies, and listings for security risks
- Self-hostable and scriptable with zero network mutations
- Supports multiple output formats (JSON, SARIF, table)
- Integrates with CI/CD pipelines via exit codes and severity gating
- MCP-native for AI agent interoperability

## Why It Matters for RAG Builders
It provides essential security triage for S3 bucket configurations, enabling AI stacks to detect and mitigate cloud storage risks before they escalate.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
