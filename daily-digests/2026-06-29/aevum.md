---
title: "aevum-labs/aevum"
category: "Orchestrator"
tech_stack: ["Python", "Ed25519", "SHA3-256", "COSE_Sign1", "RFC 3161", "Rekor", "Cedar Policy", "PostgreSQL", "Oxigraph", "RDF", "ML-DSA-65"]
quality_score: 9
rag_relevance: 10
tags: ["AI governance", "tamper-evident logging", "agent audit trails", "compliance", "verifiable records"]
source: "https://github.com/aevum-labs/aevum"
discovered_at: "2026-06-29T19:02:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aevum provides an independent, tamper-evident black box for AI agents, recording every action into a cryptographically signed, hash-chained ledger with portable signed receipts. It enables auditors, regulators, or courts to independently verify agent activity without trusting the operator, model provider, or cloud infrastructure.

## Key Features
- Cryptographically signed, hash-chained ledger (sigchain) for tamper-evident records
- Portable signed receipts with RFC 3161 trusted timestamps for independent verification
- Five unconditional safety barriers enforced in the kernel path (e.g., crisis detection, consent checks)
- Hybrid Ed25519 + ML-DSA-65 post-quantum signatures by default for fail-closed security
- Adapters for LangGraph, Anthropic, LangChain, OpenAI Agents, CrewAI, MCP, Google ADK, and Microsoft Agent Framework

## Why It Matters for RAG Builders
It provides defensible, independently verifiable evidence of AI agent actions, critical for regulatory compliance and legal defensibility in high-stakes environments.

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

### Rekor
Automated review identified **Rekor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cedar Policy
Automated review identified **Cedar Policy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oxigraph
Automated review identified **Oxigraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDF
Automated review identified **RDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ML-DSA-65
Automated review identified **ML-DSA-65** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
