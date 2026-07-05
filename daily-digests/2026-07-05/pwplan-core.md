---
title: "Protocol-Wealth/pwplan-core"
category: "UI Component"
tech_stack: ["React 19", "Vite 8", "TypeScript", "Tailwind CSS v4", "Zustand", "Cloudflare", "GCP Cloud Run"]
quality_score: 9
rag_relevance: 7
tags: ["privacy-by-construction", "financial planning", "de-identified data", "regime-adaptive", "PII-free"]
source: "https://github.com/Protocol-Wealth/pwplan-core"
discovered_at: "2026-07-05T19:09:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A privacy-first, open-source financial planning UI that processes de-identified planning variables (e.g., age, balances) without handling PII, enabling safe self-hosting and dual deployment paths (public demo or private production). It acts as a thin UI layer decoupled from quantitative logic, designed for regime-adaptive financial projections.

## Key Features
- PII-free contract enforcement via structural tripwires (e.g., `assertNoPII`) to prevent identity leakage in planning variables
- Dual deployment model: public demo (nexus-mcp) or private production (pw-api) with opaque `subjectRef` for client correlation
- 18 planning tools (e.g., Monte Carlo decumulation, tax-aware withdrawal, Roth conversion) surfaced in a unified UI
- Compliance-focused design with Apache-2.0 license and defensive patent posture (OIN member)
- Zero quantitative logic shipped; integrates with external engines (e.g., nexus-core) for projections

## Why It Matters for RAG Builders
It provides a privacy-preserving, PII-free UI layer for financial planning that can be safely integrated into RAG systems handling sensitive data without exposing identities.

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

### Cloudflare
Automated review identified **Cloudflare** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GCP Cloud Run
Automated review identified **GCP Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
