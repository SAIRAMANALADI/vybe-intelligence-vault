---
title: subhansh-dev/pr-guardian
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Python
- Git
- Regular Expressions
- Claude Code
quality_score: 8
rag_relevance: 7
tags:
- security-scanner
- pull-request-review
- secrets-detection
- authentication-checks
- code-review-automation
source: https://github.com/subhansh-dev/pr-guardian
discovered_at: '2026-07-06T19:48:50Z'
evaluated_by: mistral-small-latest
---

## Summary
pr-guardian is a lightweight security scanner designed to catch common vulnerabilities and misconfigurations in pull requests before they are merged. It operates as a standalone CLI or a Claude Code skill, scanning for secrets, auth gaps, config leaks, and dangerous code patterns.

## Key Features
- Detects hardcoded secrets (API keys, tokens, passwords) in PRs or local repos
- Identifies auth gaps (commented-out checks, missing middleware)
- Scans for config leaks (e.g., `.env` files in commits)
- Checks for dangerous code patterns (e.g., `eval()`, SQL injection)
- Provides CI-friendly exit codes for automation

## Why It Matters for RAG Builders
It proactively prevents security vulnerabilities from entering production by catching common mistakes in pull requests before they are merged.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regular Expressions
Automated review identified **Regular Expressions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
