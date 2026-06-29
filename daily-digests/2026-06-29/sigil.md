---
title: "Sigil-Trade/sigil"
category: "Tooling"
tech_stack: ["Solana", "Anchor Framework", "TypeScript", "SPL Token", "TEE (Trusted Execution Environment)", "Jupiter", "Flash Trade"]
quality_score: 9
rag_relevance: 8
tags: ["on-chain security", "AI agent guardrails", "Solana vaults", "policy enforcement", "transaction sandboxing"]
source: "https://github.com/Sigil-Trade/sigil"
discovered_at: "2026-06-29T21:22:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sigil provides on-chain guardrails for AI agents operating on Solana by enforcing spending caps, protocol allowlists, and agent permissions through Solana validators. It uses a three-layer security model combining client-side checks, TEE key custody, and on-chain PDA vault enforcement to prevent unauthorized transactions.

## Key Features
- On-chain spending caps and protocol allowlists enforced by Solana validators
- Client-side fast-deny checks and TEE key custody for agent private keys
- Atomic transaction composition to avoid Solana CPI depth limits
- Rolling 24h spend tracking with no midnight reset vulnerabilities
- Timelocked policy changes and kill switch for emergency vault freezing

## Why It Matters for RAG Builders
Sigil ensures AI agents on Solana cannot bypass spending limits or unauthorized actions by enforcing policies at the blockchain level, providing critical security for RAG/AI stack builders integrating with DeFi protocols.

## Tech Stack Deep Dive
### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anchor Framework
Automated review identified **Anchor Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPL Token
Automated review identified **SPL Token** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TEE (Trusted Execution Environment)
Automated review identified **TEE (Trusted Execution Environment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jupiter
Automated review identified **Jupiter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flash Trade
Automated review identified **Flash Trade** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
