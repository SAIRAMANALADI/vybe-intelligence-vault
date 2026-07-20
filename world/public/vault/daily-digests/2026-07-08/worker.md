---
title: edycutjong/worker
category: daily-digests/2026-07-08
tech_stack:
- TypeScript
- Node.js
- Anthropic Claude (Haiku)
- CROO Constellation A2A
- Vitest
- Docker
quality_score: 9
rag_relevance: 8
tags:
- on-chain research
- multi-agent orchestration
- deterministic fallback
- A2A protocol
- sourced draft generation
source: https://github.com/edycutjong/worker
discovered_at: '2026-07-08T08:16:32Z'
evaluated_by: mistral-small-latest
---

## Summary
Worker is an on-chain research provider agent that transforms any topic into a structured, sourced research draft. It operates within the CROO Constellation A2A ecosystem, delivering `{ draft, sources }` to orchestrators like Maestro for grading and consolidation.

## Key Features
- Converts topics into structured research drafts with sources via LLM (when API key is available) or deterministic offline mode
- Integrates seamlessly with CROO Constellation A2A graph for on-chain agent hiring and delivery
- Supports self-correction loops by accepting reviewer context for improved drafts
- Always delivers a gradeable output, even in mock mode or without an LLM API key
- Containerized for easy deployment to any PaaS environment

## Why It Matters for RAG Builders
Worker is essential for RAG/AI stack builders as it provides the foundational research component that turns raw topics into structured, sourced drafts, enabling downstream agents to grade, vet, and refine the output for high-quality AI pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude (Haiku)
Automated review identified **Anthropic Claude (Haiku)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CROO Constellation A2A
Automated review identified **CROO Constellation A2A** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
