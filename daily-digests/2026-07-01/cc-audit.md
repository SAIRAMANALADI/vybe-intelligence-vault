---
title: "ryo-ebata/cc-audit"
category: "Tooling"
tech_stack: ["Rust", "Node.js", "npm", "Homebrew", "GitHub Actions", "CI/CD", "MCP (Model Context Protocol)", "SARIF", "JSON/HTML/Markdown", "Cargo"]
quality_score: 9
rag_relevance: 7
tags: ["security-scanner", "AI-artifacts", "supply-chain-security", "Claude-Code", "MCP-server"]
source: "https://github.com/ryo-ebata/cc-audit"
discovered_at: "2026-07-01T09:41:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cc-audit is a security scanner designed to detect vulnerabilities in Claude Code skills, hooks, and MCP servers before installation. It identifies risks like data exfiltration, privilege escalation, prompt injection, and overpermission in AI coding artifacts.

## Key Features
- 100+ detection rules for exfiltration, privilege escalation, and prompt injection
- Multi-format output (JSON, HTML, SARIF, Markdown) for integration with CI/CD pipelines
- Supports scanning Skills, Hooks, MCP servers, Docker, and dependencies
- Risk scoring with baseline/drift detection to prevent rug pull attacks
- MCP proxy mode for runtime monitoring and auto-fix capabilities

## Why It Matters for RAG Builders
It proactively mitigates security risks in AI coding ecosystems by scanning third-party artifacts before installation, reducing exposure to data breaches and supply chain attacks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/HTML/Markdown
Automated review identified **JSON/HTML/Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
