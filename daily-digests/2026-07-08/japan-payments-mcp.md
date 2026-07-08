---
title: "junter1989k-ai/japan-payments-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "HTTP/JSON-RPC", "KOMOJU API"]
quality_score: 7
rag_relevance: 8
tags: ["payment processing", "MCP server", "Japan payments", "konbini", "KOMOJU"]
source: "https://github.com/junter1989k-ai/japan-payments-mcp"
discovered_at: "2026-07-08T15:17:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote Model Context Protocol (MCP) server enabling AI agents to generate payment links for Japanese payment methods (konbini, credit cards, PayPay, etc.) via KOMOJU's hosted checkout. It acts as a stateless translation layer between AI agents and Japanese payment rails.

## Key Features
- Supports multiple Japanese payment methods (konbini, credit cards, PayPay, bank transfer, etc.) via a single API
- Stateless design with no database or credential storage; funds flow directly between buyer and KOMOJU
- Provides tools for creating payment links and querying payment status without webhooks
- Zero runtime dependencies and MIT-licensed for easy integration
- Part of a family of regional payment MCP servers (Japan, Taiwan, Korea)

## Why It Matters for RAG Builders
It bridges the gap between AI agents and Japan's complex payment infrastructure, enabling seamless payment integration for AI-driven applications.

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
