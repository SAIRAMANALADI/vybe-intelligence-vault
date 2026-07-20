---
title: rstfulzz/nebula
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Bun
- Casper Network
- OpenAI-compatible models
- casper-js-sdk
- Zod
- Biome
- Rust (Odra framework, roadmap)
- Next.js (web console)
quality_score: 9
rag_relevance: 8
tags:
- AI treasury assistant
- policy-aware agent
- Casper Network
- on-chain verification
- deterministic controls
source: https://github.com/rstfulzz/nebula
discovered_at: '2026-06-23T08:59:03Z'
evaluated_by: mistral-small-latest
---

## Summary
Nebula is a policy-aware AI treasury assistant built for the Casper Network, enabling secure on-chain operations like transfers and staking. It combines an AI advisory layer with a deterministic policy engine to enforce hard-coded fund controls, ensuring actions are verified on-chain and cannot be overridden by the model.

## Key Features
- Policy engine enforcing hard caps, allowlists, and autonomy tiers with pure, auditable code
- On-chain execution verification for all value-moving actions (e.g., transfers, staking)
- Split advisory (AI) and control (deterministic code) layers to prevent model overrides
- Supports native CSPR operations (transfers, staking, balance checks) with configurable risk thresholds
- Monorepo architecture with modular plugins for Casper, system tools, Telegram, and web console

## Why It Matters for RAG Builders
Nebula demonstrates a critical security-first approach for AI agents managing treasuries by separating advisory and control logic, ensuring on-chain verified execution and auditable policy enforcement.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Casper Network
Automated review identified **Casper Network** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible models
Automated review identified **OpenAI-compatible models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### casper-js-sdk
Automated review identified **casper-js-sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Biome
Automated review identified **Biome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (Odra framework, roadmap)
Automated review identified **Rust (Odra framework, roadmap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js (web console)
Automated review identified **Next.js (web console)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
