---
title: "YarikRuuuu/hoodtrade"
category: "Tooling"
tech_stack: ["Python", "Solidity", "Ethereum RPC", "Uniswap", "Claude AI", "Arbitrum-Orbit", "ERC-20", "Poetry"]
quality_score: 8
rag_relevance: 7
tags: ["pre-trade safety", "smart contract analysis", "MEV protection", "liquidity risk", "Robinhood Chain"]
source: "https://github.com/YarikRuuuu/hoodtrade"
discovered_at: "2026-07-02T15:11:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hood Trade is a pre-trade safety scanner for Robinhood Chain that evaluates swap transactions before execution, providing a GO/CAUTION/NO-GO verdict with on-chain evidence. It operates read-only, never holding funds or signing transactions, and focuses on mitigating risks like liquidity removal, MEV, and token counterparty issues.

## Key Features
- Deterministic risk scoring engine with severity-based verdicts (GO/CAUTION/NO-GO)
- Checks for contract ownership, liquidity depth, and execution risks like MEV
- Claude-powered plain-language summaries (optional, offline fallback available)
- Read-only operation with no fund custody or transaction signing
- Configurable thresholds and RPC chain-id pinning for security

## Why It Matters for RAG Builders
It provides critical pre-trade risk assessment for users interacting with new or permissionless chains, reducing exposure to liquidity attacks, MEV, and token counterparty risks before transaction signing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solidity
Automated review identified **Solidity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethereum RPC
Automated review identified **Ethereum RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uniswap
Automated review identified **Uniswap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude AI
Automated review identified **Claude AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Arbitrum-Orbit
Automated review identified **Arbitrum-Orbit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERC-20
Automated review identified **ERC-20** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Poetry
Automated review identified **Poetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
