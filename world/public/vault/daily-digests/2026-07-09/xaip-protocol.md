---
title: "xkumakichi/xaip-protocol"
category: "Tooling"
tech_stack: ["TypeScript", "Ed25519 (cryptographic signing)", "Cloudflare Workers", "Cloudflare D1", "Node.js", "MCP (Model Context Protocol)", "Bayesian statistics", "REST APIs", "DID (Decentralized Identifiers)"]
quality_score: 9
rag_relevance: 8
tags: ["trust layer", "execution receipts", "agent tool calls", "delegation evidence", "Bayesian scoring"]
source: "https://github.com/xkumakichi/xaip-protocol"
discovered_at: "2026-07-09T21:18:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
XAIP provides a provider-neutral signed execution evidence layer for AI agent tool calls, enabling co-signed receipts that serve as independently verifiable proof of tool execution. It helps agents make trust-aware decisions before delegation by leveraging historical execution evidence and Bayesian trust scoring.

## Key Features
- Co-signed execution receipts (agent + caller) for tamper-proof evidence
- Provider-agnostic integration with MCP, LangChain, OpenAI-compatible tools, and HTTP-based tools
- Bayesian trust scoring with caller diversity weighting to prevent gaming
- Pre-delegation trust checks via `precheck()` SDK and `/v1/select` API
- Live trust dashboard and public API for real-time trust scores

## Why It Matters for RAG Builders
XAIP enables AI agents to make informed trust decisions before delegating tool calls by providing verifiable execution evidence, reducing risky or unscored tool selections.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 (cryptographic signing)
Automated review identified **Ed25519 (cryptographic signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare D1
Automated review identified **Cloudflare D1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bayesian statistics
Automated review identified **Bayesian statistics** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DID (Decentralized Identifiers)
Automated review identified **DID (Decentralized Identifiers)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
