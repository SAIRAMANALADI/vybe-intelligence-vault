---
title: bigduu/Zenith
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Rust
- Go
- TypeScript
- React
- Vite
- Tauri
- Git Submodules
- CI/CD (GitHub Actions)
- Mermaid.js
quality_score: 9
rag_relevance: 7
tags:
- AI agent
- monorepo
- local-first
- desktop application
- RAG infrastructure
source: https://github.com/bigduu/Zenith
discovered_at: '2026-07-07T18:58:35Z'
evaluated_by: mistral-small-latest
---

## Summary
Zenith is a monorepo coordinator for Bodhi AI, a local-first desktop agent that performs tasks using tools, maintains memory, and provides step-by-step transparency. It integrates a Tauri-based desktop shell, React/Vite UI, Rust agent runtime, Go backend, and documentation into a single recursive clone with synchronized releases.

## Key Features
- Synchronized release train across five submodules (Bamboo → Lotus → Bodhi) with dependency-aware publishing
- Modular architecture separating UI, runtime, backend, and documentation for independent evolution
- Daily nightly versioning with calendar-based auto-bumping (YYYY.M.N format)
- Submodule guard CI workflow to validate pointer integrity on every push/PR
- Clear routing for contributors to quickly access the right module (UI, runtime, backend, or docs)

## Why It Matters for RAG Builders
Zenith provides a structured, scalable foundation for building and deploying local-first AI agents with integrated tooling, memory, and transparency, essential for RAG builders seeking modular and maintainable architectures.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Submodules
Automated review identified **Git Submodules** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
