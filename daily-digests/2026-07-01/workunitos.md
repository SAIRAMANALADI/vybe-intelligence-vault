---
title: "haya10hikawa-hub/workunitOS"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Cloudflare Workers", "REST APIs", "SHA-256 hashing", "Tenant isolation", "Regression testing"]
quality_score: 8
rag_relevance: 9
tags: ["work orchestration", "AI work OS", "approval workflow", "dry-run verification", "tenant isolation"]
source: "https://github.com/haya10hikawa-hub/workunitOS"
discovered_at: "2026-07-01T05:22:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WorkUnit OS is an AI work operating system that ingests scattered work signals (e.g., Slack, GitHub, Calendar) and normalizes them into reviewable WorkUnit Nodes. It provides a secure preparation loop for work approval, preview, and dry-run verification without executing real external actions.

## Key Features
- Multi-source signal ingestion (Slack, GitHub, Calendar) with normalization into WorkUnit candidates
- Secure approval loop: draft → preview → approval → dry-run verification with SHA-256 hashing
- Server-side approval records with tenant isolation and execution readiness gating
- Dry-run execution verification without side effects or real external calls
- Regression-tested internal alpha flow with 34+ test cases

## Why It Matters for RAG Builders
It provides a critical safety layer for AI-driven work orchestration by ensuring work actions are previewed, approved, and verified before execution, reducing risks in automated workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 hashing
Automated review identified **SHA-256 hashing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tenant isolation
Automated review identified **Tenant isolation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regression testing
Automated review identified **Regression testing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
