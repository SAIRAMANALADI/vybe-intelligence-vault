---
title: "hoodtrade/hoodtrade"
category: "Tooling"
tech_stack: ["Python", "Typer", "Pydantic", "Rich", "HTTPX", "Anthropic Claude (optional)", "Uniswap V3", "Robinhood Chain", "JSON-RPC"]
quality_score: 9
rag_relevance: 8
tags: ["pre-trade safety", "risk assessment", "smart contract analysis", "MEV detection", "DeFi security"]
source: "https://github.com/hoodtrade/hoodtrade"
discovered_at: "2026-07-02T17:42:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hood Trade is a pre-trade safety scanner for Robinhood Chain that evaluates swaps for risks like unverified tokens, rug pulls, honeypots, and MEV before execution. It provides a deterministic GO/CAUTION/NO-GO verdict with on-chain evidence, ensuring users can make informed decisions without signing or holding funds.

## Key Features
- 15 automated checks covering contract, pool, execution, and stock token risks
- Deterministic verdict engine with configurable thresholds for CAUTION/NO-GO
- Honeypot detection via simulated transfer/approve calls
- Optional AI-powered risk summaries using Claude Opus 4.8
- Fully offline mode with fallback templates for environments without API access

## Why It Matters for RAG Builders
It provides critical pre-trade risk validation for DeFi users on Robinhood Chain, reducing exposure to scams, honeypots, and MEV attacks before transaction signing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer
Automated review identified **Typer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rich
Automated review identified **Rich** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude (optional)
Automated review identified **Anthropic Claude (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uniswap V3
Automated review identified **Uniswap V3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Robinhood Chain
Automated review identified **Robinhood Chain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
