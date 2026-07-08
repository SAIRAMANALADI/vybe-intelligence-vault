---
title: "junter1989k-ai/india-payments-mcp"
category: "Tooling"
tech_stack: ["Node.js", "Model Context Protocol (MCP)", "Razorpay API", "HTTP/JSON-RPC", "JavaScript"]
quality_score: 8
rag_relevance: 9
tags: ["payments", "UPI", "Razorpay", "MCP server", "AI agents"]
source: "https://github.com/junter1989k-ai/india-payments-mcp"
discovered_at: "2026-07-08T19:17:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Remote MCP server enabling AI agents to accept payments in India via UPI, cards, netbanking, and wallets using Razorpay Payment Links. Stateless, stateless, and never holds funds or credentials, with a hosted payment page for seamless transactions.

## Key Features
- Supports UPI (Google Pay, PhonePe, Paytm), cards, netbanking, and wallets via Razorpay Payment Links
- Stateless translation layer with no database or credential storage
- Payment status check via pull-based queries (no webhooks required)
- Optional Razorpay SMS/email delivery of payment links to customers
- Zero runtime dependencies, Node.js ≥ 18 required

## Why It Matters for RAG Builders
It bridges the gap between AI agents and India's fragmented payment ecosystem, enabling seamless UPI and card transactions without requiring agent-side payment integration.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Razorpay API
Automated review identified **Razorpay API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
