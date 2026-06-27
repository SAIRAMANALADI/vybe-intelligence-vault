---
title: "CommonlandsAbbe/commonlands-mcp"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Cloudflare Workers", "Model Context Protocol (MCP)", "Shopify API", "Cloudflare Analytics Engine"]
quality_score: 9
rag_relevance: 7
tags: ["MCP Server", "Precision Optics", "Lens Selection", "Field of View Calculation", "Shopify Integration"]
source: "https://github.com/CommonlandsAbbe/commonlands-mcp"
discovered_at: "2026-06-27T22:04:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Commonlands MCP is a Model Context Protocol (MCP) server that provides precision optics tools for selecting M12/C-mount lenses, calculating field of view (FoV), and verifying live Shopify product details. It enables AI agents to interact with lens catalogs, sensor specifications, and Shopify commerce data while enforcing strict safety boundaries for live transactions.

## Key Features
- Live Shopify product truth verification via `read_shopify_products` for accurate SKU, price, and inventory data
- Precision field of view (FoV) calculation tools (`compute_fov`, `compute_fov_catalog`) with strict safety rules against interpolation
- Strict safety boundaries preventing unauthorized Shopify writes, card data collection, or premature cart creation
- Observability via Cloudflare Analytics Engine for telemetry without exposing sensitive data
- Clear tool classification (fixture context vs. live truth) to guide AI agent workflows

## Why It Matters for RAG Builders
It provides a critical bridge between AI agents and live commerce/optics data, ensuring accurate lens selection and safe Shopify integrations while enforcing strict safety boundaries for RAG builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shopify API
Automated review identified **Shopify API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Analytics Engine
Automated review identified **Cloudflare Analytics Engine** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
