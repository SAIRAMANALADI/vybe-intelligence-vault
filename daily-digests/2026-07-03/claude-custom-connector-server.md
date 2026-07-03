---
title: "wnkinc/claude-custom-connector-server"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Docker", "Cloudflare Tunnel", "Google OAuth", "Squid Proxy", "Linux"]
quality_score: 8
rag_relevance: 7
tags: ["MCP", "Claude", "self-hosted", "authentication", "containerized"]
source: "https://github.com/wnkinc/claude-custom-connector-server"
discovered_at: "2026-07-03T22:09:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted framework for deploying custom Model Context Protocol (MCP) servers for Claude applications, enabling secure, portable tool containers with Google OAuth authentication and Cloudflare Tunnel integration for local or cloud deployment.

## Key Features
- Portable tool containers with FastMCP for uniform local/cloud deployment
- Google OAuth authentication with verified-email allowlist
- Cloudflare Tunnel integration for secure public access
- Squid proxy sidecar for controlled egress traffic
- Modular tool selection via Docker Compose profiles

## Why It Matters for RAG Builders
It provides a secure, modular framework for building and deploying custom MCP servers for Claude, ensuring consistent authentication and deployment across environments.

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

### Squid Proxy
Automated review identified **Squid Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
