---
title: "wnkinc/claude-custom-connector-server"
category: "Agent Framework"
tech_stack: ["Python", "FastMCP", "Docker", "Cloudflare Tunnel", "Google OAuth", "Pulumi", "Squid Proxy", "Amazon Bedrock Guardrails", "LlamaFirewall"]
quality_score: 8
rag_relevance: 9
tags: ["MCP", "Claude integration", "self-hosted", "secure tooling", "cloud deployment"]
source: "https://github.com/wnkinc/claude-custom-connector-server"
discovered_at: "2026-07-08T22:15:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted MCP server framework that enables secure, custom tool integration for Claude applications via Google OAuth authentication and Cloudflare Tunnel. It deploys locally or on cloud infrastructure (e.g., AWS EC2) using Pulumi for provisioning.

## Key Features
- Secure MCP server framework with per-tool isolation via Docker containers
- Google OAuth authentication with verified-email allowlist for access control
- Cloudflare Tunnel for secure, internet-facing exposure of tools
- Local or cloud deployment (AWS EC2 via Pulumi) with consistent stack
- Guardrail and approval services for prompt injection prevention and human-in-the-loop gating

## Why It Matters for RAG Builders
It provides a secure, scalable foundation for building custom AI agent tools that integrate with Claude while enforcing strict access controls and deployment flexibility.

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
