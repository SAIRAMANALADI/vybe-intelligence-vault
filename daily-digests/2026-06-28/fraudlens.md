---
title: "cognis-digital/fraudlens"
category: "Tooling"
tech_stack: ["Python", "CLI", "MCP (Model Context Protocol)", "Docker", "JSON/SARIF output", "Mermaid for architecture diagrams"]
quality_score: 9
rag_relevance: 7
tags: ["fraud detection", "transaction analysis", "CI/CD integration", "pluggable rules", "self-hosted"]
source: "https://github.com/cognis-digital/fraudlens"
discovered_at: "2026-06-28T12:20:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FRAUDLENS is a CLI tool that replays transaction streams against pluggable fraud detection rules and ML scorers, generating precision/recall metrics and alert volumes for fintech and payments security. It enables reproducible backtesting of fraud rules against historical transaction data.

## Key Features
- Replays transactions against customizable fraud rulesets for backtesting
- Generates precision/recall metrics and alert volumes with CI-ready outputs
- Supports MCP-native integration for AI agents and multi-language ports (Python, JS, Go, Rust)
- Self-hostable with Docker, pip, and other installation methods
- Enables CI gates with non-zero exit codes for regression detection

## Why It Matters for RAG Builders
FRAUDLENS provides a reproducible, scriptable way to validate fraud detection rules against historical data, enabling AI stack builders to integrate robust fraud detection without proprietary vendor lock-in.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/SARIF output
Automated review identified **JSON/SARIF output** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid for architecture diagrams
Automated review identified **Mermaid for architecture diagrams** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
