---
title: "paulf280-ui/solana-safe-sniper-mcp-template"
category: "Tooling"
tech_stack: ["JavaScript", "TypeScript", "MCP (Model Context Protocol)", "Solana", "REST API", "Docker", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["Solana", "MCP", "Rug detection", "Trading agent", "On-chain analysis"]
source: "https://github.com/paulf280-ui/solana-safe-sniper-mcp-template"
discovered_at: "2026-07-01T21:24:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A drop-in MCP template for Solana trading agents (Claude, Cursor, ElizaOS) that integrates Cabal-Hunter, a real-time on-chain Solana token safety scanner. It detects coordinated wallet cabals, same-block Jito bundle buys, serial-rug deployers, and coordinated dumps to provide an Exit-Liquidity Risk verdict before executing trades.

## Key Features
- Pre-trade safety check for Solana tokens via MCP integration with Claude, Cursor, and ElizaOS
- Detects coordinated wallet cabals, same-block Jito bundle buys, and serial-rug deployers
- Provides a single Exit-Liquidity Risk verdict (LOW | ELEVATED | HIGH) synthesized from six detection layers
- Free tier of 100 queries/month with $0.01 USDC per query thereafter, paid natively on Solana
- Includes a live visual bubble map, REST API, and local Docker/Node.js MCP server deployment options

## Why It Matters for RAG Builders
It provides critical pre-trade safety checks for Solana trading agents by detecting coordinated wallet cabals and rug pulls, preventing costly mistakes before executing swaps.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
