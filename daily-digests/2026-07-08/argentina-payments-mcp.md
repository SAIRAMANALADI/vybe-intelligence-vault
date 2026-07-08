---
title: "junter1989k-ai/argentina-payments-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Mercado Pago API", "Model Context Protocol (MCP)", "HTTP/JSON-RPC"]
quality_score: 7
rag_relevance: 8
tags: ["payments", "Mercado Pago", "AI agents", "Argentina", "MCP server"]
source: "https://github.com/junter1989k-ai/argentina-payments-mcp"
discovered_at: "2026-07-08T19:16:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server that enables AI agents to accept payments in Argentina via Mercado Pago's hosted checkout, supporting wallet, cards with installments, and cash payments. It acts as a stateless translation layer without storing funds or credentials.

## Key Features
- Stateless translation layer for secure payment processing in Argentina
- Supports Mercado Pago wallet, cards with installments, and cash payments (Rapipago/Pago Fácil)
- Zero runtime dependencies and no database (funds flow directly to merchant)
- Streamable HTTP and stateless JSON-RPC interface for AI agent integration
- Test and production modes via Mercado Pago access tokens

## Why It Matters for RAG Builders
It enables AI agents to seamlessly accept payments in Argentina, expanding their utility for real-world transactions without requiring complex payment infrastructure.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mercado Pago API
Automated review identified **Mercado Pago API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
