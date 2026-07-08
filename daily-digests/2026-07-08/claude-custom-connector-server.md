---
title: "wnkinc/claude-custom-connector-server"
category: "Orchestrator"
tech_stack: ["Python", "FastMCP", "Docker", "Cloudflare Tunnel", "Google OAuth", "Pulumi", "Squid Proxy", "Amazon Bedrock Guardrails", "LlamaFirewall"]
quality_score: 8
rag_relevance: 9
tags: ["MCP", "Claude integration", "secure connectors", "self-hosted", "AI tooling"]
source: "https://github.com/wnkinc/claude-custom-connector-server"
discovered_at: "2026-07-08T21:02:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted framework for deploying secure MCP (Model Context Protocol) servers to Claude apps via Cloudflare Tunnel, with Google OAuth authentication and optional guardrails. Supports local and cloud (AWS) deployments with a modular, containerized architecture.

## Key Features
- Modular MCP server deployment with per-tool isolation in containers
- Google OAuth authentication with verified-email allowlisting
- Cloudflare Tunnel for secure, internet-exposed access to tools
- Optional guardrails (local or Amazon Bedrock) for output screening
- Supports local and cloud (AWS) deployments with Pulumi automation

## Why It Matters for RAG Builders
It provides a secure, scalable way to integrate custom tools with Claude AI while maintaining strict access control and output safety for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google OAuth
Automated review identified **Google OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pulumi
Automated review identified **Pulumi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Squid Proxy
Automated review identified **Squid Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Amazon Bedrock Guardrails
Automated review identified **Amazon Bedrock Guardrails** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LlamaFirewall
Automated review identified **LlamaFirewall** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
