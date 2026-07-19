---
title: Protocol-Wealth/pwplan-core
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- React 19
- Vite 8
- TypeScript
- Tailwind CSS v4
- Zustand
- Node.js
- GCP Cloud Run
- Cloudflare
quality_score: 8
rag_relevance: 7
tags:
- financial planning
- privacy-first
- de-identified data
- UI framework
- open source
source: https://github.com/Protocol-Wealth/pwplan-core
discovered_at: '2026-07-07T22:08:40Z'
evaluated_by: mistral-small-latest
---

## Summary
pwplan-core is an open-source, privacy-first financial planning UI that processes de-identified planning variables (e.g., age, balances) without handling PII. It serves as a thin UI layer compatible with two backends: a public nexus-core MCP gateway for self-hosted demos and a private pw-api for regulated environments.

## Key Features
- PII-free contract by construction with automated compliance checks to prevent identity leakage
- Dual-backend compatibility (public nexus-core MCP and private pw-api) via backend-agnostic gateway design
- Structured compliance guardrails (e.g., `assertNoPII`) to enforce de-identified data handling
- Modular planning tools (33 tools) covering retirement, tax, education, and cash flow analysis
- Zero quantitative or compliance logic shipped; designed for integration with private compliance systems

## Why It Matters for RAG Builders
It provides a privacy-preserving, de-identified financial planning UI that can integrate with RAG systems for compliance-sensitive applications while ensuring no PII is exposed in the planning process.

## Tech Stack Deep Dive
### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite 8
Automated review identified **Vite 8** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS v4
Automated review identified **Tailwind CSS v4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zustand
Automated review identified **Zustand** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GCP Cloud Run
Automated review identified **GCP Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare
Automated review identified **Cloudflare** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
