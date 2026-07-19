---
title: dimitrilaouanis-tech/onyx-mcp
category: daily-digests/2026-06-24
tech_stack:
- Python
- MCP (Model Context Protocol)
- USDC (USD Coin)
- Base blockchain
- EIP-3009 (USDC authorization)
- FastAPI (implicitly via MCP)
- x402 protocol
quality_score: 9
rag_relevance: 8
tags:
- paid-mcp
- USDC-settlement
- x402-protocol
- AI-agent-billing
- on-chain-payments
source: https://github.com/dimitrilaouanis-tech/onyx-mcp
discovered_at: '2026-06-24T20:53:15Z'
evaluated_by: mistral-small-latest
---

## Summary
onyx-paid-mcp is a lightweight framework for building paid MCP (Model Context Protocol) servers that charge AI agents per call using USDC on the Base blockchain. It eliminates traditional payment gateways by leveraging the x402 protocol for direct wallet-to-wallet settlements.

## Key Features
- Enables per-call billing for MCP tools using USDC on Base blockchain
- Supports HTTP 402 payment gate for direct wallet-to-wallet settlements
- Provides streamable HTTP MCP endpoints for integration with Claude Desktop, Cursor, and other clients
- Includes a discoverable manifest at `/.well-known/x402.json` for Coinbase Bazaar indexing
- Offers REST endpoints for non-MCP agents and free introspection endpoints

## Why It Matters for RAG Builders
It enables scalable monetization of AI agent tools by allowing direct per-call payments via blockchain, eliminating traditional payment gateways and simplifying revenue generation for tool providers.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### USDC (USD Coin)
Automated review identified **USDC (USD Coin)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base blockchain
Automated review identified **Base blockchain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EIP-3009 (USDC authorization)
Automated review identified **EIP-3009 (USDC authorization)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implicitly via MCP)
Automated review identified **FastAPI (implicitly via MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 protocol
Automated review identified **x402 protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
