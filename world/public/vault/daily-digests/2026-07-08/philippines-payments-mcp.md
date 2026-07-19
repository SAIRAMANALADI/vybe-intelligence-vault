---
title: junter1989k-ai/philippines-payments-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Model Context Protocol (MCP)
- JavaScript
- Node.js
- PayMongo API
- HTTP/JSON-RPC
quality_score: 8
rag_relevance: 7
tags:
- MCP server
- payment processing
- Philippines payments
- GCash
- PayMongo
source: https://github.com/junter1989k-ai/philippines-payments-mcp
discovered_at: '2026-07-08T19:17:10Z'
evaluated_by: mistral-small-latest
---

## Summary
A remote MCP server enabling AI agents to accept payments in the Philippines via GCash, Maya (PayMaya), GrabPay, and credit/debit cards through PayMongo. It provides stateless payment link creation and status checks without holding funds or credentials.

## Key Features
- Supports GCash, Maya (PayMaya), GrabPay, and credit/debit cards via PayMongo
- Stateless design with no database or credential storage
- Payment status checks via session ID without webhooks
- Hosted MCP endpoint for immediate integration with AI agents
- Test and production modes via PayMongo secret keys

## Why It Matters for RAG Builders
It enables AI agents to seamlessly accept local payment methods in the Philippines, expanding their utility for real-world transactions.

## Tech Stack Deep Dive
### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PayMongo API
Automated review identified **PayMongo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
