---
title: ishoplus/xitto-kernel
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- JavaScript
- Node.js
- TypeScript
- CLI
- TUI (Ink)
- Sandboxing (Seatbelt)
- NPM
quality_score: 9
rag_relevance: 9
tags:
- agent kernel
- domain-agnostic
- multi-model support
- sandboxing
- progressive trust
source: https://github.com/ishoplus/xitto-kernel
discovered_at: '2026-07-07T16:24:46Z'
evaluated_by: mistral-small-latest
---

## Summary
xitto-kernel is a domain-agnostic agent foundation library that provides a multi-step tool loop, guard chain, permissions/sandbox, and provider abstraction. It enables building agents for any domain (coding, data query, knowledge bases, etc.) by swapping pluggable DomainPacks while reusing the same kernel.

## Key Features
- Pluggable DomainPacks for any domain (coding, data query, patent, UI/UX, document generation, etc.)
- Multi-step tool loop with LLM-driven execution and verification
- Progressive trust system with per-pattern approvals and persistent trust storage
- Automatic experience sedimentation (playbooks, skills, episodes, memory extraction)
- Built-in sandboxing (Seatbelt) for safe command execution and rollback on failure

## Why It Matters for RAG Builders
It provides a reusable, verifiable, and extensible foundation for building domain-specific agents across models, domains, and deployment environments, critical for scalable RAG and AI agent systems.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Ink)
Automated review identified **TUI (Ink)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (Seatbelt)
Automated review identified **Sandboxing (Seatbelt)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
