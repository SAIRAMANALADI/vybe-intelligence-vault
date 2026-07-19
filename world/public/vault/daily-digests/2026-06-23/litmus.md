---
title: polygraphso/litmus
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- pnpm
- tsup
- Docker
- MCP (Model Context Protocol)
- EAS (Ethereum Attestation Service)
- Jest
quality_score: 9
rag_relevance: 8
tags:
- MCP security
- behavioral testing
- adversarial evaluation
- agent safety
- litmus testing
source: https://github.com/polygraphso/litmus
discovered_at: '2026-06-23T10:40:31Z'
evaluated_by: mistral-small-latest
---

## Summary
Litmus is an open behavioral litmus harness for MCP servers that evaluates security robustness through dynamic and static probes, grading servers on tool-output injection, permission/egress, sensitive-data handling, and adversarial-input resilience. It also grades AI agent skills statically for prompt injection and dangerous commands.

## Key Features
- Dynamic and static security probes for MCP servers (C-01 to C-04 categories)
- Static grading of AI agent skills for prompt injection and dangerous commands (S-01, S-03, S-04)
- Sandboxed execution environment with default-deny permissions for hardened testing
- Deterministic grading with A-F and A/B/D/F scales for MCP servers and skills respectively
- Integration with npm, MCP registry, and deployment tools like Cursor and Smithery

## Why It Matters for RAG Builders
Litmus provides critical security validation for MCP servers and AI agent skills, ensuring robustness against adversarial attacks and data exfiltration in production environments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tsup
Automated review identified **tsup** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EAS (Ethereum Attestation Service)
Automated review identified **EAS (Ethereum Attestation Service)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
