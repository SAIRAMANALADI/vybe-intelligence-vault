---
title: "bounded-systems/prx"
category: "Orchestrator"
tech_stack: ["TypeScript", "Bun", "Node.js", "Git", "CUE (schema)", "Nix", "Homebrew", "Docker", "JSON-LD", "SLSA Provenance"]
quality_score: 9
rag_relevance: 8
tags: ["agent-orchestration", "content-addressed", "signed-git-commits", "work-unit-management", "PR automation"]
source: "https://github.com/bounded-systems/prx"
discovered_at: "2026-06-27T23:04:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
prx is a CLI tool and monorepo for managing agent-run work units through signed, content-addressed pipelines that drive work to merged PRs. It ensures git writes are verified against their owners and integrates with tools like L1 Claude and L2 Warp for configuration and execution.

## Key Features
- Signed and verified git operations ensuring traceability and ownership
- Content-addressed pipelines for reproducible work units
- Monorepo structure with `@bounded-systems/*` libraries for extensibility
- Multi-platform distribution via binaries, containers, and package managers (Homebrew, Nix)
- Governance and community docs generated from a single source of truth

## Why It Matters for RAG Builders
prx provides a secure, verifiable framework for orchestrating AI agent work units that require signed, auditable git operations, critical for building trustworthy RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUE (schema)
Automated review identified **CUE (schema)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-LD
Automated review identified **JSON-LD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA Provenance
Automated review identified **SLSA Provenance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
