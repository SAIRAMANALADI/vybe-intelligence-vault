---
title: "RECTOR-LABS/conatus"
category: "Orchestrator"
tech_stack: ["Solidity", "Foundry", "Node.js", "Python", "Slither", "Claude Sonnet 4.6", "OpenRouter API", "IPFS", "Next.js", "Vercel", "Mantle (L2)", "ERC-8004"]
quality_score: 9
rag_relevance: 8
tags: ["on-chain AI audit", "deterministic scoring", "ERC-8004 identity", "Mantle L2", "smart contract security"]
source: "https://github.com/RECTOR-LABS/conatus"
discovered_at: "2026-07-02T02:44:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Conatus is an autonomous on-chain AI smart-contract audit agent that audits Solidity contracts, generates a risk score, and writes the verdict on-chain via Mantle. It combines static analysis, LLM triage, and deterministic scoring to produce verifiable, reproducible audit reports with an ERC-8004 agent identity.

## Key Features
- Autonomous audit loop combining static analysis (Slither) and LLM triage (Claude Sonnet) with deterministic scoring and on-chain anchoring
- On-chain verdicts written via AuditAttestation contract on Mantle, ensuring verifiable and reproducible results
- ERC-8004 agent identity (#115) with portable reputation system for audit quality dimensions (accuracy, coverage, actionability)
- Deterministic risk scoring rubric that can be recomputed from the pinned report, eliminating LLM hallucination in scoring
- IPFS pinning for report storage with fallback to deterministic data URIs, ensuring data integrity and accessibility

## Why It Matters for RAG Builders
Conatus provides a trustless, verifiable AI audit pipeline for smart contracts with on-chain anchoring, enabling developers to rely on immutable audit records rather than opaque API responses.

## Tech Stack Deep Dive
### Solidity
Automated review identified **Solidity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Foundry
Automated review identified **Foundry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slither
Automated review identified **Slither** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Sonnet 4.6
Automated review identified **Claude Sonnet 4.6** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IPFS
Automated review identified **IPFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mantle (L2)
Automated review identified **Mantle (L2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERC-8004
Automated review identified **ERC-8004** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
