---
title: "junter1989k-ai/thailand-payments-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "Opn Payments (Omise) API", "HTTP/JSON-RPC"]
quality_score: 8
rag_relevance: 7
tags: ["payment processing", "Thailand", "PromptPay", "AI agents", "MCP server"]
source: "https://github.com/junter1989k-ai/thailand-payments-mcp"
discovered_at: "2026-07-08T19:16:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server enabling AI agents to accept payments in Thailand via PromptPay QR, credit/debit cards, TrueMoney wallet, and internet banking. It integrates with Opn Payments (Omise) for hosted checkout and provides stateless payment link creation and status checks.

## Key Features
- Supports PromptPay QR, credit/debit cards, TrueMoney wallet, and internet banking in Thailand
- Stateless translation layer with no fund storage or credential handling
- Payment status checks via `query_payment_status` without webhooks
- Integration with Opn Payments (Omise) for hosted checkout
- Zero runtime dependencies and MIT licensed

## Why It Matters for RAG Builders
It enables AI agents to seamlessly accept payments in Thailand, expanding their utility for real-world transactions in a major Southeast Asian market.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Opn Payments (Omise) API
Automated review identified **Opn Payments (Omise) API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
