---
title: "arturkorb3/eva-evolutional-agent"
category: "Agent Framework"
tech_stack: ["Python", "Docker", "Shell Scripting", "LLM APIs (OpenAI-compatible)", "Mermaid.js (for diagrams)"]
quality_score: 8
rag_relevance: 7
tags: ["self-evolving agents", "sandboxed execution", "autonomous improvement", "gated evolution", "minimalist architecture"]
source: "https://github.com/arturkorb3/eva-evolutional-agent"
discovered_at: "2026-06-28T20:09:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
EVA is a minimal, self-evolving agent runtime that starts as a tiny kernel and iteratively rewrites, tests, and promotes improved versions of itself within a hardened Docker sandbox. It autonomously or directionally improves based on real-world friction, ensuring reversibility and safety through gated evolution.

## Key Features
- Micro agentic runtime with a tiny immutable kernel (`organism.py`) that seeds the first release and enforces safety gates.
- Directed (`improve`) and autonomous (`evolve`) self-modification with layered gating (supervisor and kernel gates) to ensure only provably-not-worse versions survive.
- Persistent friction backlog tracks real-world failures, driving targeted improvements and emergent capabilities.
- Hardened Docker sandbox with read-only filesystem, resource limits, and non-root execution to contain potential damage.
- Reversible evolution with rollback to `LAST_GOOD` and a ratchet mechanism that strengthens tests with each iteration.

## Why It Matters for RAG Builders
It demonstrates how minimal, self-improving agents can emerge from real-world friction while maintaining safety and reversibility, offering a novel approach to building adaptive AI systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenAI-compatible)
Automated review identified **LLM APIs (OpenAI-compatible)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
