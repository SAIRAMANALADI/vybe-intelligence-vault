---
title: mrslbt/xendit-mcp
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- JavaScript
- Node.js
- Model Context Protocol (MCP)
- Xendit API
- TypeScript (implied by npm package structure)
quality_score: 9
rag_relevance: 7
tags:
- payment gateway
- MCP server
- Southeast Asia
- financial transactions
- API integration
source: https://github.com/mrslbt/xendit-mcp
discovered_at: '2026-07-10T06:53:20Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server providing secure, read-only-by-default access to the Xendit payment API for invoices, disbursements, balances, and transactions across Southeast Asia. Features guided setup, safety gates, and human-in-the-loop approval for money-moving operations.

## Key Features
- Secure, read-only-by-default access to Xendit API with explicit opt-in for mutations
- Guided setup and configuration helpers for Claude Code/Desktop and Cursor
- Multi-tier safety gates for money-moving operations (disbursements)
- Human-in-the-loop approval flow for payouts via `confirm_disbursement`
- Support for invoices, balances, transactions, and payouts across Indonesia, Philippines, Thailand, Vietnam, and Malaysia

## Why It Matters for RAG Builders
It provides a secure, standardized way to integrate Xendit's payment API into AI workflows while enforcing financial safety controls, making it essential for RAG builders handling financial transactions in Southeast Asia.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xendit API
Automated review identified **Xendit API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by npm package structure)
Automated review identified **TypeScript (implied by npm package structure)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
