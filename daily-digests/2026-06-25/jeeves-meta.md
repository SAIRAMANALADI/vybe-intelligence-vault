---
title: karmaniverous/jeeves-meta
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- Fastify
- Node.js
- LLM
- OpenClaw
- Croner
- NSSM/systemd/launchd
quality_score: 9
rag_relevance: 9
tags:
- knowledge synthesis
- LLM pipeline
- self-improving feedback loops
- heterarchical mesh
- agent tooling
source: https://github.com/karmaniverous/jeeves-meta
discovered_at: '2026-06-25T07:26:59Z'
evaluated_by: mistral-small-latest
---

## Summary
jeeves-meta is a knowledge synthesis engine that transforms raw data archives into structured, queryable meta-analyses via a three-phase LLM pipeline (Architect → Builder → Critic). It operates as an HTTP service with a built-in scheduler, filesystem watcher integration, and OpenClaw plugin for agent tooling.

## Key Features
- Three-phase LLM synthesis pipeline (Architect, Builder, Critic) with independent phase tracking
- Built-in scheduler and phase-state machine for incremental, prioritized processing
- Heterarchical meta cross-references enabling organizational views across domains
- OpenClaw plugin providing 12 agent tools for dynamic interaction and control
- Self-improving feedback loops via archive history and surgical retry of failed phases

## Why It Matters for RAG Builders
It provides a robust, automated pipeline for transforming raw data into structured, queryable knowledge artifacts essential for RAG systems requiring high-quality, context-rich synthesis.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM
Automated review identified **LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Croner
Automated review identified **Croner** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NSSM/systemd/launchd
Automated review identified **NSSM/systemd/launchd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
