---
title: "ryo-ebata/cc-audit"
category: "Tooling"
tech_stack: ["Rust", "Node.js", "npm", "Homebrew", "GitHub Actions", "Model Context Protocol (MCP)", "SARIF", "JSON/HTML/XML", "Cargo"]
quality_score: 9
rag_relevance: 8
tags: ["security-scanner", "AI-artifacts", "Claude-Code", "MCP-server", "supply-chain-security"]
source: "https://github.com/ryo-ebata/cc-audit"
discovered_at: "2026-07-01T05:26:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cc-audit is a security scanner designed to detect vulnerabilities in Claude Code artifacts (Skills, Hooks, MCP servers) before installation. It identifies risks like data exfiltration, privilege escalation, prompt injection, and overpermission issues in third-party AI coding tools.

## Key Features
- 100+ detection rules for exfiltration, privilege escalation, and prompt injection
- Multi-format output (JSON, HTML, SARIF, Markdown) for CI/CD integration
- Supports Skills, Hooks, MCP servers, Docker, and dependencies scanning
- Risk scoring (0-100) with baseline/drift detection to prevent rug pulls
- MCP proxy mode for runtime monitoring and auto-fix capabilities

## Why It Matters for RAG Builders
It proactively mitigates supply chain risks in AI coding tools by scanning third-party artifacts for critical vulnerabilities before installation, ensuring safer AI development environments.

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

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/HTML/XML
Automated review identified **JSON/HTML/XML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
