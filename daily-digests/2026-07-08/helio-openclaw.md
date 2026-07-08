---
title: "gethelio/helio-openclaw"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "HTTP sideband communication", "OpenClaw plugin system", "Helio governance proxy", "Jest/Vitest (testing)", "ESLint (linting)", "Prettier (formatting)", "TSUP (bundling)"]
quality_score: 8
rag_relevance: 9
tags: ["governance", "policy enforcement", "tool call auditing", "fail-closed security", "AI agent tooling"]
source: "https://github.com/gethelio/helio-openclaw"
discovered_at: "2026-07-08T17:24:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A plugin adapter for OpenClaw that integrates with Helio to enforce governance policies on in-process tool calls via a local HTTP sideband. It acts as a translator between OpenClaw hooks and Helio's policy decisions, ensuring fail-closed enforcement and audit trails for AI agent tool usage.

## Key Features
- Enforces Helio's policy decisions on OpenClaw tool calls via a local HTTP sideband
- Fail-closed design: blocks tool calls if Helio sideband is unreachable or misconfigured
- Supports evidence grounding for policy enforcement based on tool execution results
- Integrates with OpenClaw's plugin system for seamless deployment
- Provides audit trails and approval resolution tracking for governance compliance

## Why It Matters for RAG Builders
It enables fail-closed governance for in-process AI agent tool calls by integrating Helio's policy enforcement, ensuring security and compliance without requiring out-of-process proxies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP sideband communication
Automated review identified **HTTP sideband communication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw plugin system
Automated review identified **OpenClaw plugin system** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helio governance proxy
Automated review identified **Helio governance proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest/Vitest (testing)
Automated review identified **Jest/Vitest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESLint (linting)
Automated review identified **ESLint (linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prettier (formatting)
Automated review identified **Prettier (formatting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TSUP (bundling)
Automated review identified **TSUP (bundling)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
