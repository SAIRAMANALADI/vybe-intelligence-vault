---
title: "Ecocitizenz/ecz-id-mcp-verifier"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "npm", "GitHub Actions", "MCP (Model Context Protocol)", "JSON", "SARIF"]
quality_score: 9
rag_relevance: 7
tags: ["verification", "resolver posture", "MCP", "privacy-first", "deterministic"]
source: "https://github.com/Ecocitizenz/ecz-id-mcp-verifier"
discovered_at: "2026-07-01T17:55:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first, privacy-first tool for verifying the public ECZ-ID Resolver posture of targets (e.g., ECZ-IDs, MCP servers, GitHub repos) via CLI, CI, or MCP host. It classifies targets, checks resolver posture, and reports deterministic results without writing truth or uploading data.

## Key Features
- Deterministic classification of targets (ECZ-ID, MCP server, GitHub repo, etc.) without LLM or network calls
- Read-only public ECZ-ID Resolver posture checks via GET requests (no data upload or telemetry)
- Deterministic result reporting with machine-readable JSON and optional human-readable soft reports
- Support for CLI, CI (GitHub Action), MCP host, and Node library integration
- Local policy enforcement (OPEN, PREFER, REQUIRE) for CI/CD pipelines

## Why It Matters for RAG Builders
It provides a lightweight, privacy-preserving way to verify resolver posture for AI agents and MCP hosts, ensuring trust without exposing sensitive data or requiring sign-ins.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
