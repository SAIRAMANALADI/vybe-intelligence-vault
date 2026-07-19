---
title: aevum-labs/aevum
category: daily-digests/2026-07-06
tech_stack:
- Python
- Ed25519
- SHA3-256
- COSE_Sign1
- RFC 3161
- Rekor v2
- RFC 8785 (JCS)
- RFC 6962 (Merkle Tree)
- Cedar Policy
- PostgreSQL
- Oxigraph
- ML-DSA-65 (post-quantum)
quality_score: 9
rag_relevance: 10
tags:
- AI governance
- tamper-evident logging
- regulatory compliance
- agent audit trails
- cryptographic verification
source: https://github.com/aevum-labs/aevum
discovered_at: '2026-07-06T23:02:37Z'
evaluated_by: mistral-small-latest
---

## Summary
Aevum provides an independent, tamper-evident black box for AI agents, recording every action into a cryptographically signed, hash-chained ledger with portable signed receipts. It enables verifiable, auditor-defensible records for regulatory compliance and legal challenges.

## Key Features
- Cryptographically signed, hash-chained ledger (sigchain) for tamper-evident records
- Portable signed receipts with RFC 3161 trusted timestamps for independent verification
- Five unconditional safety barriers enforced in the kernel path (e.g., crisis detection, consent checks)
- Multi-framework adapters (LangGraph, Anthropic, LangChain, OpenAI Agents, CrewAI, MCP, Google ADK, Microsoft Agent Framework)
- Machine-verifiable conformance suite with 11 invariants for regulatory alignment

## Why It Matters for RAG Builders
Aevum provides the critical infrastructure for building defensible, auditor-approved AI agent records that survive legal and regulatory scrutiny.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA3-256
Automated review identified **SHA3-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### COSE_Sign1
Automated review identified **COSE_Sign1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RFC 3161
Automated review identified **RFC 3161** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rekor v2
Automated review identified **Rekor v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RFC 8785 (JCS)
Automated review identified **RFC 8785 (JCS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RFC 6962 (Merkle Tree)
Automated review identified **RFC 6962 (Merkle Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cedar Policy
Automated review identified **Cedar Policy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oxigraph
Automated review identified **Oxigraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ML-DSA-65 (post-quantum)
Automated review identified **ML-DSA-65 (post-quantum)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
