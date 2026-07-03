---
title: "DylanMerigaud/ledgerloop"
category: "Orchestrator"
tech_stack: ["TypeScript", "Next.js", "Mastra", "Claude Sonnet 4.6 + Haiku 4.5", "Zod", "Supabase", "oRPC", "QuickBooks Online API", "BambooHR API"]
quality_score: 9
rag_relevance: 8
tags: ["procure-to-pay", "AI orchestration", "approval workflows", "invoice processing", "HRIS integration"]
source: "https://github.com/DylanMerigaud/ledgerloop"
discovered_at: "2026-07-03T22:06:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LedgerLoop is a procure-to-pay (P2P) product that automates invoice processing and approval workflows using AI for extraction, onboarding, and exception handling, while relying on deterministic code for core workflow execution. It derives approval workflows from HRIS data and allows conversational editing before execution.

## Key Features
- AI-driven onboarding to derive approval workflows from HRIS data with conversational editing and preview
- Deterministic core for invoice matching, workflow execution, and reconciliation to ensure auditability and repeatability
- Hybrid AI and deterministic logic: AI handles extraction, onboarding, and exception investigation, while code manages workflow routing and approval gates
- Real-time execution trace with live visualization of invoice processing steps and AI tool calls
- Seeded scenarios for testing edge cases in matching, exceptions, and approval routing

## Why It Matters for RAG Builders
LedgerLoop demonstrates a practical hybrid AI-deterministic architecture for financial workflows, showing how AI can automate edge tasks while ensuring core processes remain exact and auditable.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mastra
Automated review identified **Mastra** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Sonnet 4.6 + Haiku 4.5
Automated review identified **Claude Sonnet 4.6 + Haiku 4.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### oRPC
Automated review identified **oRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QuickBooks Online API
Automated review identified **QuickBooks Online API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BambooHR API
Automated review identified **BambooHR API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
