---
title: "carlosplanchon/firmauy-mcp-inspect"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FirmaUY", "PKCS#11", "PC/SC", "Subprocess", "Environment Variables"]
quality_score: 8
rag_relevance: 7
tags: ["MCP server", "digital signatures", "Uruguayan c\u00e9dula", "offline verification", "redaction"]
source: "https://github.com/carlosplanchon/firmauy-mcp-inspect"
discovered_at: "2026-07-01T00:06:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only MCP server that enables AI assistants to inspect Uruguayan digital signatures (PDF/PAdES, XAdES XML, or detached CMS) using the FirmaUY toolkit. It verifies signatures, validates cédula check digits, and provides redacted summaries without exposing personal data or enabling signing operations.

## Key Features
- Read-only inspection of signed documents (PDF/PAdES, XAdES XML, detached CMS)
- Offline verification with certificate chain validation up to Uruguayan national root
- Redacts signer identity by default to protect privacy
- Batch verification with summary grouping by issuing CA and trust status
- Sandboxing via allowlisted file paths and extensions for security

## Why It Matters for RAG Builders
It enables AI assistants to safely and privately verify Uruguayan digital signatures without exposing sensitive data or enabling unauthorized signing operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FirmaUY
Automated review identified **FirmaUY** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PKCS#11
Automated review identified **PKCS#11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PC/SC
Automated review identified **PC/SC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subprocess
Automated review identified **Subprocess** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Environment Variables
Automated review identified **Environment Variables** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
