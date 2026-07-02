---
title: "alanpcf/brasil-data-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Zod", "Vitest", "GitHub Actions", "BrasilAPI"]
quality_score: 9
rag_relevance: 8
tags: ["Brazilian public data", "MCP server", "AI tooling", "natural language queries", "official data sources"]
source: "https://github.com/alanpcf/brasil-data-mcp"
discovered_at: "2026-07-02T15:14:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes Brazilian public data (CNPJ, CEP, banks, holidays, DDD, ISBN, economic rates, exchange rates, CVM brokers, IBGE states/municipalities, and .br domains) as tools for AI clients like Claude, Cursor, and Windsurf. Powered by BrasilAPI, it enables natural language queries without authentication or rate limits.

## Key Features
- 15+ MCP tools for Brazilian public data (CNPJ, CEP, banks, holidays, DDD, ISBN, economic rates, exchange rates, CVM brokers, IBGE states/municipalities, .br domains)
- Zero-code integration with AI clients (Claude, Cursor, Windsurf) via MCP
- Powered by BrasilAPI for official, up-to-date, and uncached data
- Supports MCP prompts for guided workflows (e.g., CNPJ analysis, economic snapshot)
- Open-source, MIT-licensed, and deployable via `npx` for instant use

## Why It Matters for RAG Builders
It provides a seamless way for AI engineers to integrate Brazilian public data into RAG pipelines without manual API calls or scraping, leveraging official sources via a standardized MCP interface.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BrasilAPI
Automated review identified **BrasilAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
