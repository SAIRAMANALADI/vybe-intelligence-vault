---
title: osauer/ibkr
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Go
- MCP (Model Context Protocol)
- IBKR TWS API
- CLI
- JSON
- GitHub Actions
quality_score: 9
rag_relevance: 8
tags:
- IBKR integration
- portfolio analysis
- MCP server
- trading tools
- agentic workflows
source: https://github.com/osauer/ibkr
discovered_at: '2026-07-08T05:46:16Z'
evaluated_by: mistral-small-latest
---

## Summary
ibkr is a local Go-based MCP server and CLI tool that bridges Interactive Brokers (IBKR) TWS or IB Gateway to enable agentic portfolio analysis, market research, and trading workflows. It provides read-only access to account data, quotes, options, scanners, and risk metrics while ensuring no broker orders are placed.

## Key Features
- Read-only access to IBKR account data (positions, P&L, Greeks, deltas) via CLI or MCP server
- Market regime analysis, risk canary, and dealer gamma calculations for trading decisions
- Local watchlist management, scanners, and position sizing tools with preview-only order drafting
- Supports multiple MCP hosts (Claude Desktop, Cursor, Continue, Zed) and Go library integration
- Strict safety controls preventing broker order placement while enabling agent-driven analysis

## Why It Matters for RAG Builders
It enables AI agents to perform real-time, agentic portfolio analysis and trading research using live broker data without exposing write capabilities, making it essential for secure, automated financial workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IBKR TWS API
Automated review identified **IBKR TWS API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
