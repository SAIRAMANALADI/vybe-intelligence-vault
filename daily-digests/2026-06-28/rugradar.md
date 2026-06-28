---
title: "cognis-digital/rugradar"
category: "Tooling"
tech_stack: ["Python", "Solidity", "Docker", "MCP (Model Context Protocol)", "SARIF", "JSON"]
quality_score: 9
rag_relevance: 4
tags: ["smart-contract security", "token risk scanner", "honeypot detection", "CI/CD integration", "self-hosted"]
source: "https://github.com/cognis-digital/rugradar"
discovered_at: "2026-06-28T16:12:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RUGRADAR is a self-hostable token contract risk scanner designed to detect honeypots, hidden mint/blacklist functions, owner backdoors, and unlocked liquidity in Solidity contracts or ABIs. It provides prioritized findings with exit codes for CI integration and supports multiple output formats.

## Key Features
- Detects honeypots, hidden mint/blacklist functions, and owner backdoors in token contracts
- Supports scanning Solidity source code, ABIs, or stdin input with auto-detection
- Provides machine-readable JSON output and SARIF for CI/CD pipelines
- MCP-native for AI agent integration and polyglot ports (Python, JavaScript, Go, Rust)
- Exit codes for CI gating and configurable severity thresholds

## Why It Matters for RAG Builders
It enables AI stack builders to integrate automated smart contract risk detection into their workflows, ensuring safer interactions with token contracts.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solidity
Automated review identified **Solidity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
