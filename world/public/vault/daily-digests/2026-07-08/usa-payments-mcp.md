---
title: junter1989k-ai/usa-payments-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- JavaScript
- Node.js
- Stripe API
- Model Context Protocol (MCP)
- HTTP/JSON-RPC
quality_score: 7
rag_relevance: 8
tags:
- payments
- Stripe
- MCP
- AI agents
- checkout
source: https://github.com/junter1989k-ai/usa-payments-mcp
discovered_at: '2026-07-08T19:16:22Z'
evaluated_by: mistral-small-latest
---

## Summary
A remote MCP server that enables AI agents to accept payments in the United States via Stripe's hosted checkout. It acts as a stateless translation layer, ensuring funds flow directly from buyer to Stripe without holding credentials or storing data.

## Key Features
- Stateless payment processing via Stripe hosted checkout
- Supports multiple payment methods (cards, Apple Pay, Google Pay)
- Zero runtime dependencies and no database storage
- Remote MCP server with stateless JSON-RPC over HTTP
- Test and production modes via Stripe secret keys

## Why It Matters for RAG Builders
It enables AI agents to seamlessly integrate payment acceptance in the US, expanding their functionality for real-world transactions.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe API
Automated review identified **Stripe API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
