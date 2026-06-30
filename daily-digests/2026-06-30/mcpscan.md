---
title: "cognis-digital/mcpscan"
category: "Tooling"
tech_stack: ["Python", "AST (Abstract Syntax Tree)", "OWASP Top 10", "CWE", "SARIF", "GitHub Actions", "OSV.dev"]
quality_score: 9
rag_relevance: 9
tags: ["MCP security", "vulnerability scanning", "agent security", "supply chain analysis", "RAG tooling"]
source: "https://github.com/cognis-digital/mcpscan"
discovered_at: "2026-06-30T03:56:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcpscan is a vulnerability scanner for Model Context Protocol (MCP) servers and agents, designed to detect RCE, SSRF, no-auth, tool poisoning, and supply-chain risks. It maps findings to OWASP Top 10 for Agentic Applications (2026), OWASP LLM Top-10, CWE, and Microsoft agent-threat taxonomy.

## Key Features
- Static source analysis with AST taint dataflow for Python and JavaScript
- Live endpoint probing (authorized-use only) with rate limiting and scope enforcement
- Dependency supply-chain auditing (ASI04) for known vulnerabilities and rug-pull risks
- Mapping findings to OWASP Agentic Top-10 (2026), OWASP LLM Top-10, CWE, and Microsoft taxonomy
- Offline-first design with opt-in AI review layer for triage

## Why It Matters for RAG Builders
It provides critical security auditing for MCP servers and agents, ensuring safe deployment in RAG and AI stacks by detecting vulnerabilities and supply-chain risks before production.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree)
Automated review identified **AST (Abstract Syntax Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OWASP Top 10
Automated review identified **OWASP Top 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CWE
Automated review identified **CWE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev
Automated review identified **OSV.dev** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
