---
title: "jurislm/hetzner-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Bun", "MCP (Model Context Protocol)", "Hetzner Cloud API", "SSH"]
quality_score: 9
rag_relevance: 7
tags: ["MCP server", "Hetzner Cloud", "infrastructure automation", "Claude Code integration", "cloud management"]
source: "https://github.com/jurislm/hetzner-mcp"
discovered_at: "2026-07-08T08:17:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that provides 40 tools to manage Hetzner Cloud infrastructure directly from Claude Code, including servers, SSH keys, Cloud Volumes, Storage Boxes, and live metrics. It enables programmatic control over Hetzner resources via API tokens.

## Key Features
- 40+ tools for managing Hetzner Cloud resources (servers, volumes, SSH keys, Storage Boxes)
- Real-time metrics and RAM monitoring via SSH for servers
- Support for both Hetzner Cloud API and unified Storage Box API
- Secure token-based authentication with environment variable configuration
- Comprehensive security hardening and input validation

## Why It Matters for RAG Builders
It streamlines Hetzner Cloud infrastructure management within AI workflows, enabling automated resource provisioning and monitoring for RAG pipelines and agentic systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hetzner Cloud API
Automated review identified **Hetzner Cloud API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
