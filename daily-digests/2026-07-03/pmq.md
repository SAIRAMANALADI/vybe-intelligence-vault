---
title: "crp4222/pmq"
category: "Tooling"
tech_stack: ["Python", "Polymarket CLOB V2 API", "Ethereum (ERC-1271, ERC-1167)", "PyPI packaging", "MCP (Model Context Protocol) server", "mypy (static typing)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
tags: ["Polymarket", "CLOB V2", "execution library", "fail-closed", "deposit wallet"]
source: "https://github.com/crp4222/pmq"
discovered_at: "2026-07-03T15:08:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pmq is a Python library for fail-closed execution and market data access to Polymarket's CLOB V2, providing local signing, exchange-confirmed fills, and deposit-wallet (POLY_1271) support. It ensures safe trading by validating orders against exchange responses and includes tools like pmq-doctor for diagnosing setup issues.

## Key Features
- Local signing for Polymarket CLOB V2 with fail-closed execution to prevent unconfirmed orders
- Exchange-confirmed fill contract ensuring only validated trades are booked
- Support for Polymarket's deposit wallet (POLY_1271) with correct signature_type handling
- Built-in reconciliation tool (pmq-doctor) to diagnose setup issues like collateral visibility and wallet type mismatches
- MCP server for agent integration with optional live trading tools

## Why It Matters for RAG Builders
It provides a critical, production-tested layer for safely interacting with Polymarket's CLOB V2, addressing common pitfalls in live trading and ensuring exchange-confirmed fills for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Polymarket CLOB V2 API
Automated review identified **Polymarket CLOB V2 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethereum (ERC-1271, ERC-1167)
Automated review identified **Ethereum (ERC-1271, ERC-1167)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI packaging
Automated review identified **PyPI packaging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) server
Automated review identified **MCP (Model Context Protocol) server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy (static typing)
Automated review identified **mypy (static typing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
