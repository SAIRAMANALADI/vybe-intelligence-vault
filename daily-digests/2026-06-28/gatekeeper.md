---
title: "skyblueso/gatekeeper"
category: "Tooling"
tech_stack: ["Python", "Semgrep", "CodeQL", "Snyk", "YARA", "pip-audit", "OSV.dev API", "Git", "SARIF"]
quality_score: 9
rag_relevance: 9
tags: ["security scanning", "AI tooling protection", "MCP server auditing", "prompt injection detection", "dependency vulnerability scanning"]
source: "https://github.com/skyblueso/gatekeeper"
discovered_at: "2026-06-28T21:59:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Gatekeeper is a security scanner designed to analyze GitHub repositories, MCP servers, and AI agent packages for potential vulnerabilities before installation. It provides a letter-grade security assessment, detailed findings, and context to determine if a codebase is safe to use.

## Key Features
- Comprehensive security analysis for GitHub repos, MCP servers, and AI agent packages
- Automated detection of execution risks (eval, exec, subprocess), filesystem operations, and network calls
- AI-specific attack surface coverage (CLAUDE.md poisoning, MCP schema poisoning, prompt injection)
- Dependency CVE scanning with pip-audit, npm-audit, and OSV.dev API fallback
- YARA signature scanning for known-bad payloads (webshells, cryptominers, reverse shells)

## Why It Matters for RAG Builders
Gatekeeper is essential for AI engineers to preemptively identify and mitigate security risks in third-party code before integrating it into their systems, reducing the attack surface of AI tooling.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CodeQL
Automated review identified **CodeQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Snyk
Automated review identified **Snyk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YARA
Automated review identified **YARA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pip-audit
Automated review identified **pip-audit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev API
Automated review identified **OSV.dev API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
