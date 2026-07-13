---
title: "junter1989k-ai/vietnam-payments-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "HMAC-SHA256", "HMAC-SHA512", "REST API", "JSON-RPC"]
quality_score: 8
rag_relevance: 7
tags: ["payment processing", "Vietnam", "MoMo", "VNPay", "AI agents"]
source: "https://github.com/junter1989k-ai/vietnam-payments-mcp"
discovered_at: "2026-07-08T19:16:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server that enables AI agents to accept payments in Vietnam via MoMo and VNPay gateways. It provides a stateless translation layer for creating payment links and querying payment status without holding funds or credentials.

## Key Features
- Supports MoMo wallet QR, ATM cards, and credit cards via MoMo hosted page
- Zero-setup demo using public MoMo sandbox (test money only)
- Stateless design with no database or credential storage
- Payment status check via pull-based queries (no webhooks required)
- Supports both MoMo and VNPay gateways with HMAC-SHA512 signing for VNPay

## Why It Matters for RAG Builders
It enables AI agents to seamlessly accept payments in Vietnam, expanding their functionality for real-world transactions in a critical market.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA512
Automated review identified **HMAC-SHA512** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
