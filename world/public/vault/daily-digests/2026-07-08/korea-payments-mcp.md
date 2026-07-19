---
title: junter1989k-ai/korea-payments-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- JavaScript
- Node.js
- Model Context Protocol (MCP)
- Toss Payments API
- HTTP/JSON-RPC
quality_score: 8
rag_relevance: 9
tags:
- MCP server
- Korean payments
- Toss Payments
- AI agent integration
- payment gateway
source: https://github.com/junter1989k-ai/korea-payments-mcp
discovered_at: '2026-07-08T19:17:13Z'
evaluated_by: mistral-small-latest
---

## Summary
A remote MCP server that enables AI agents to generate and manage payment links for Korean payment methods (card, KakaoPay, NaverPay, virtual accounts, etc.) via Toss Payments. It acts as a stateless translation layer between AI agents and Korean payment gateways.

## Key Features
- Supports multiple Korean payment methods (card, KakaoPay, NaverPay, virtual accounts, bank transfer, carrier billing)
- Stateless and secure—never stores funds or credentials, only acts as a translation layer
- Provides tools for creating payment links, querying payment status, and confirming payments
- Compatible with AI agents (Claude, ChatGPT, Cursor) via MCP protocol
- Zero runtime dependencies and MIT-licensed

## Why It Matters for RAG Builders
It enables AI agents to seamlessly integrate Korean payment methods, bridging the gap between AI-driven automation and localized payment infrastructure.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Toss Payments API
Automated review identified **Toss Payments API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
