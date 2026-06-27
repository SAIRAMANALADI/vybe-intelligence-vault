---
title: "dazzle-blip/code-protonbound"
category: "Tooling"
tech_stack: ["Python", "IMAP", "SMTP", "Proton Bridge", "MCP (Model Context Protocol)", "YAML", "OS Keyring"]
quality_score: 9
rag_relevance: 8
tags: ["Proton Mail", "MCP Server", "Security-First", "Draft-First", "Scoped Access"]
source: "https://github.com/dazzle-blip/code-protonbound"
discovered_at: "2026-06-27T21:00:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ProtonBound is a secure, deny-by-default MCP server that provides AI agents with scoped, draft-first access to Proton Mail via Proton Bridge. It enforces strict security boundaries by default, including no outbound SMTP capability unless explicitly enabled, and isolates mail access to user-configured scopes.

## Key Features
- Deny-by-default scoped mail access with deny-by-default folder/address filtering
- Draft-first workflow with optional SMTP send (disabled by default)
- Thread-centric API with quote de-duplication and HTML-to-Markdown conversion
- TLS certificate pinning for secure Bridge connections
- Per-workspace isolation and opaque message IDs to prevent prompt injection

## Why It Matters for RAG Builders
ProtonBound provides a critical security layer for AI agents accessing Proton Mail by enforcing strict, deny-by-default access controls and draft-first workflows, mitigating risks of prompt injection and unauthorized mail operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP
Automated review identified **IMAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMTP
Automated review identified **SMTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proton Bridge
Automated review identified **Proton Bridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keyring
Automated review identified **OS Keyring** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
