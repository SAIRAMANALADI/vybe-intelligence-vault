---
title: "hoodtradeprofile/hoodtrade"
category: "Tooling"
tech_stack: ["Python", "Typer", "Pydantic", "Rich", "HTTPX", "Anthropic Claude (optional)", "Uniswap V3", "Robinhood Chain"]
quality_score: 9
rag_relevance: 8
tags: ["pre-trade safety", "DeFi risk assessment", "honeypot detection", "MEV protection", "Robinhood Chain"]
source: "https://github.com/hoodtradeprofile/hoodtrade"
discovered_at: "2026-07-02T19:16:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hood Trade is a pre-trade safety scanner for Robinhood Chain that evaluates swaps before execution by running a 15-check battery to detect risks like unverified tokens, rug pulls, honeypots, and MEV. It provides deterministic GO/CAUTION/NO-GO verdicts with on-chain evidence and optional AI summaries.

## Key Features
- 15 automated checks covering contract, pool, execution, and stock token risks
- Deterministic verdicts (GO/CAUTION/NO-GO) based on configurable thresholds
- Honeypot detection via simulated transfers and approvals
- Optional AI summaries (Claude) for risk explanations without overriding decisions
- Read-only operation with no fund custody or signing

## Why It Matters for RAG Builders
It provides critical pre-trade risk mitigation for DeFi users on Robinhood Chain by automating checks that prevent common scams and unsafe trades before execution.

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



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
