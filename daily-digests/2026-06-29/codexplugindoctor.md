---
title: "Esquetta/CodexPluginDoctor"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "JSON Schema", "MCP (Model Context Protocol)", "YAML", "npm", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["plugin validation", "MCP server testing", "security auditing", "Codex integration", "preflight checks"]
source: "https://github.com/Esquetta/CodexPluginDoctor"
discovered_at: "2026-06-29T07:30:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Plugin Doctor is a local CLI validator for Codex plugin packages, skills, and MCP server bundles. It performs static and runtime validation to catch packaging, metadata, security, and protocol issues before plugins are distributed or used in production environments.

## Key Features
- Static validation of plugin manifests, skills, and MCP server configurations
- Runtime validation of MCP server protocols (initialize, tools, resources, prompts)
- Security auditing for hard-coded secrets, path traversal risks, and shell command vulnerabilities
- Multiple output formats (JSON, Markdown, SARIF, badges) for CI/CD integration
- Deterministic attestation artifacts and runtime approval gating

## Why It Matters for RAG Builders
It ensures Codex plugins and MCP servers are secure, compliant, and functional before deployment, reducing runtime failures and security risks in AI applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
