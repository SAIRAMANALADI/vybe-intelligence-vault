---
title: "ucsandman/DashClaw"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Python", "MCP (Model Context Protocol)", "REST API", "Vercel", "Neon (PostgreSQL)", "JWKS (OIDC)", "Remotion", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["AI governance", "agent safety", "policy enforcement", "audit trails", "risk mitigation"]
source: "https://github.com/ucsandman/DashClaw"
discovered_at: "2026-07-02T02:49:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DashClaw is a governance runtime for AI agents that intercepts risky actions, enforces declarative policies, routes human approvals, and records verifiable decision trails. It integrates with popular agent frameworks and runtimes via SDKs, MCP servers, plugins, or REST APIs.

## Key Features
- Intercepts and evaluates agent actions before execution using declarative policies
- Enforces identity verification via JWKS-verified OIDC bearer tokens with replay protection
- Routes pending approvals to dashboards, CLI, or third-party platforms (Telegram, Discord)
- Records verifiable decision trails with risk scores, matched policies, and terminal outcomes
- Prevents double-execution of terminal actions through durable, one-shot governance

## Why It Matters for RAG Builders
DashClaw is essential for RAG builders as it provides a critical governance layer to safely deploy AI agents in production environments, ensuring policy compliance, auditability, and human oversight for high-risk actions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neon (PostgreSQL)
Automated review identified **Neon (PostgreSQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWKS (OIDC)
Automated review identified **JWKS (OIDC)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Remotion
Automated review identified **Remotion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
