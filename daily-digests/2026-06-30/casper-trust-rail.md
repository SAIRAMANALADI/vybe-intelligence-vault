---
title: "manny-uncharted/casper-trust-rail"
category: "Orchestrator"
tech_stack: ["TypeScript", "Rust", "Odra (Casper smart contract framework)", "Casper blockchain", "LLM (for risk assessment)", "SHA-256 (for attestations)", "ed25519 (for cryptographic signing)", "x402 (Casper-native pay-per-read protocol)", "Bun (package manager & runtime)"]
quality_score: 9
rag_relevance: 9
tags: ["RWA oracle", "autonomous agents", "Casper blockchain", "x402 pay-per-read", "verifiable reputation"]
source: "https://github.com/manny-uncharted/casper-trust-rail"
discovered_at: "2026-06-30T18:55:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Trust Rail is an autonomous AI agent that publishes verified real-world-asset (RWA) data, such as tokenized US T-bill yields, on-chain to Casper. It enforces verifiable identities, accuracy-based reputation, sanctions screening, and cryptographic attestations for every data post, with pay-per-read settlement via Casper-native x402.

## Key Features
- Autonomous AI agent pipeline: fetch → risk-assess → sanctions-screen → attest → post on-chain → confirm → score → reputation
- Verifiable on-chain identity and cryptographic attestations for every data post
- Accuracy-based reputation system enforced by smart contracts
- Sanctions screening with fail-closed policy for compliance
- Pay-per-read settlement via Casper-native x402 protocol

## Why It Matters for RAG Builders
Trust Rail provides a critical infrastructure layer for RAG builders by enabling verifiable, reputation-gated, and compliant real-world data feeds on-chain, essential for trustworthy AI applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Odra (Casper smart contract framework)
Automated review identified **Odra (Casper smart contract framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Casper blockchain
Automated review identified **Casper blockchain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (for risk assessment)
Automated review identified **LLM (for risk assessment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 (for attestations)
Automated review identified **SHA-256 (for attestations)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ed25519 (for cryptographic signing)
Automated review identified **ed25519 (for cryptographic signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 (Casper-native pay-per-read protocol)
Automated review identified **x402 (Casper-native pay-per-read protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun (package manager & runtime)
Automated review identified **Bun (package manager & runtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
