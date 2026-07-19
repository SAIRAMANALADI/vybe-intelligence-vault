---
title: HarperZ9/crucible
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- JSON
- CLI
- MCP (Model Context Protocol)
- Standard Library
quality_score: 9
rag_relevance: 7
tags:
- verification
- claim evaluation
- evidence-based reasoning
- deterministic verdicts
- refinement loop
source: https://github.com/HarperZ9/crucible
discovered_at: '2026-07-07T16:26:33Z'
evaluated_by: mistral-small-latest
---

## Summary
Crucible is a judgment engine that evaluates claims against evidence through a structured process of steelmanning, measurement, and refinement, producing verifiable verdicts (MATCH, DRIFT, UNVERIFIABLE) without relying on model opinions in the final verdict step.

## Key Features
- Pure-function verdicts recomputable from sealed records, ensuring tamper-proof assessments
- One-command runs with cleanroom review packets for verifier handoff and validation
- Registry with tamper detection and content-addressed claims for integrity
- CI regression gate for automated claim verification against baselines
- Extensible measurement and steelman seams with zero runtime dependencies

## Why It Matters for RAG Builders
It provides a rigorous, model-agnostic framework for evaluating claims against evidence, ensuring verifiable and reproducible verdicts critical for RAG and AI systems that require trustworthy validation of assertions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Standard Library
Automated review identified **Standard Library** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
