---
title: "rafaself/aws-mcp-gateway"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Cloudflare Workers", "AWS SDK", "Model Context Protocol (MCP)", "Cloudflare KV", "OAuth", "Wrangler"]
quality_score: 9
rag_relevance: 9
tags: ["AWS", "MCP", "ChatGPT", "Security", "Cost Monitoring"]
source: "https://github.com/rafaself/aws-mcp-gateway"
discovered_at: "2026-06-23T21:37:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security-focused Model Context Protocol (MCP) server that enables ChatGPT to read selected AWS account data through explicit, read-only tools. It runs as a Cloudflare Worker, enforces strict authentication, input validation, and least-privilege AWS permissions while normalizing responses for AI clients.

## Key Features
- Manifest-backed tool registry with 21 predefined MCP tools for AWS data retrieval
- Strict authentication via OAuth or bearer tokens with rate limiting
- Least-privilege IAM policies and input validation for AWS API calls
- Cloudflare KV caching for normalized AWS responses to reduce API costs
- Policy gate enforcing tool packs, cost controls, and risk-level limits

## Why It Matters for RAG Builders
It provides a secure, controlled bridge between AI clients like ChatGPT and AWS data, enabling AI-driven observability and cost monitoring without exposing broad AWS credentials or generic API access.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SDK
Automated review identified **AWS SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare KV
Automated review identified **Cloudflare KV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler
Automated review identified **Wrangler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
