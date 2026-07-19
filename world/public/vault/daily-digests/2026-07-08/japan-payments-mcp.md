---
title: junter1989k-ai/japan-payments-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- JavaScript
- Node.js
- Model Context Protocol (MCP)
- HTTP/JSON-RPC
- KOMOJU API
quality_score: 7
rag_relevance: 8
tags:
- payment processing
- MCP server
- Japan payments
- konbini
- AI agent integration
source: https://github.com/junter1989k-ai/japan-payments-mcp
discovered_at: '2026-07-08T19:17:14Z'
evaluated_by: mistral-small-latest
---

## Summary
A remote MCP server enabling AI agents to generate and manage payment links for Japan, supporting konbini (convenience store) payments, credit cards, PayPay, and other local payment methods via KOMOJU's hosted checkout. It acts as a stateless translation layer between AI agents and Japanese payment rails.

## Key Features
- Supports multiple Japanese payment methods (konbini, credit cards, PayPay, etc.) via KOMOJU
- Stateless design with no storage of funds or credentials
- Provides tools for creating payment links and querying payment status
- Zero runtime dependencies and MIT-licensed
- Part of a family of regional payment MCP servers

## Why It Matters for RAG Builders
It bridges AI agents with Japan's complex payment infrastructure, enabling seamless integration of local payment methods like konbini without requiring webhook handling or manual processes.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KOMOJU API
Automated review identified **KOMOJU API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
