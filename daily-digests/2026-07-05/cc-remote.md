---
title: "sgomez/cc-remote"
category: "Orchestrator"
tech_stack: ["Docker", "Docker Compose", "Node.js", "JavaScript", "Caddy", "GitHub OAuth", "Let's Encrypt", "Claude Code CLI"]
quality_score: 9
rag_relevance: 7
tags: ["Claude Code", "VPS Deployment", "Remote Control", "Docker Sandbox", "GitHub Integration"]
source: "https://github.com/sgomez/cc-remote"
discovered_at: "2026-07-05T06:36:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Docker-based system for securely running Claude Code with Remote Control on a VPS, featuring a multi-session web manager, GitHub OAuth authentication, automatic HTTPS proxy, and isolated workspace volumes.

## Key Features
- Multi-session web-based manager for on-demand Claude Code sessions
- GitHub OAuth authentication with ACL security and whitelisted users
- Automatic HTTPS reverse proxy with Let's Encrypt certificates via Caddy
- Isolated workspace volumes for each session with GitHub repository cloning
- Sibling container architecture for secure, performant Docker API access

## Why It Matters for RAG Builders
It enables secure, scalable, and user-friendly deployment of Claude Code agents on VPS infrastructure with built-in authentication, isolation, and management capabilities.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub OAuth
Automated review identified **GitHub OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Let's Encrypt
Automated review identified **Let's Encrypt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
