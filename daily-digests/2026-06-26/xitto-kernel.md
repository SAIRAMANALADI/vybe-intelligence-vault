---
title: "ishoplus/xitto-kernel"
category: "Agent Framework"
tech_stack: ["JavaScript", "Node.js (>=20)", "ES Modules (ESM)", "macOS Seatbelt (sandboxing)", "LLM Provider Abstraction (pi-ai)", "CLI Tools", "TypeScript (implied by type definitions)"]
quality_score: 9
rag_relevance: 9
tags: ["agent framework", "domain-agnostic", "sandboxing", "multi-step tool loops", "pluggable architecture"]
source: "https://github.com/ishoplus/xitto-kernel"
discovered_at: "2026-06-26T18:28:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
xitto-kernel provides a domain-agnostic agent kernel that can be extended via pluggable DomainPacks to create specialized AI agents for any use case, such as coding, data querying, or knowledge management. It abstracts core agent functionality like multi-step tool loops, guard chains, sandboxing, and provider abstraction into a reusable package.

## Key Features
- Domain-agnostic kernel that can host any specialized agent via DomainPacks
- Real macOS Seatbelt sandboxing for security isolation
- Guard chain system for enforcing safety and permission policies
- Multi-step tool loops with streaming support for LLM interactions
- Modular architecture enabling independent agent projects that import the kernel

## Why It Matters for RAG Builders
It provides a reusable, secure, and extensible foundation for building domain-specific AI agents without reinventing core agent infrastructure.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=20)
Automated review identified **Node.js (>=20)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ES Modules (ESM)
Automated review identified **ES Modules (ESM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Seatbelt (sandboxing)
Automated review identified **macOS Seatbelt (sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Provider Abstraction (pi-ai)
Automated review identified **LLM Provider Abstraction (pi-ai)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by type definitions)
Automated review identified **TypeScript (implied by type definitions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
