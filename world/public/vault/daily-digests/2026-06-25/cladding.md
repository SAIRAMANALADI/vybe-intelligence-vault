---
title: qwerfunch/cladding
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- Node.js
- YAML
- Git Hooks
- CI/CD Pipelines
- Static Analysis
- Testing Frameworks
- MCP Server
- Plugin Architecture
quality_score: 9
rag_relevance: 10
tags:
- AI governance
- code verification
- drift detection
- LLM safety
- spec-driven development
source: https://github.com/qwerfunch/cladding
discovered_at: '2026-06-25T14:17:00Z'
evaluated_by: mistral-small-latest
---

## Summary
cladding is a governance layer for AI-generated code that ensures intent preservation, drift detection, and mechanical verification before and after code generation. It acts as a protective shell around host LLMs, enforcing strict verification standards to turn AI claims of 'done' into provable proof.

## Key Features
- 15-stage verification gate with deterministic and non-deterministic checks
- 37 drift detectors for spec-code-test alignment
- Intent preservation via sealed spec tiers (A-D hierarchy)
- Real-time blocking of AI-declared 'done' until verification passes
- Verification signatures and audit ledgers for immutable proof

## Why It Matters for RAG Builders
cladding provides the critical verification layer that turns AI-generated code claims into provable, auditable proof, ensuring reliability and trust in AI-coded software.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD Pipelines
Automated review identified **CI/CD Pipelines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Testing Frameworks
Automated review identified **Testing Frameworks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Plugin Architecture
Automated review identified **Plugin Architecture** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
