---
title: "klodr/faxdrop-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "FaxDrop HTTP API", "Vitest", "ESLint", "Sigstore", "SLSA", "fast-check"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "fax automation", "AI agent integration", "security safeguards", "audit logging"]
source: "https://github.com/klodr/faxdrop-mcp"
discovered_at: "2026-07-04T06:48:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI assistants to send real faxes via the FaxDrop API, providing robust input validation, security safeguards, and audit logging for agent workflows.

## Key Features
- Secure fax sending with input validation (file path, size, E.164 numbers, extensions)
- Policy-based controls (number pairing, allowed types/countries, rate limits)
- Dry-run mode and audit logging for compliance and debugging
- Structured error handling with retry hints and error catalog
- Drop-in integration for MCP-enabled AI assistants (Claude, Cursor, etc.)

## Why It Matters for RAG Builders
It provides a secure, validated interface for AI agents to interact with fax services, reducing security risks and simplifying integration for RAG and agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FaxDrop HTTP API
Automated review identified **FaxDrop HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESLint
Automated review identified **ESLint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore
Automated review identified **Sigstore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA
Automated review identified **SLSA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fast-check
Automated review identified **fast-check** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
