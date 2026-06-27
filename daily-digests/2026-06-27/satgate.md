---
title: "SatGate-io/satgate"
category: "Orchestrator"
tech_stack: ["Go", "Python", "JavaScript/TypeScript", "MCP (Model Context Protocol)", "Macaroons (cryptographic tokens)", "Lightning Network (L402/x402)", "Docker", "Kubernetes"]
quality_score: 9
rag_relevance: 8
tags: ["economic governance", "agent budgeting", "MCP integration", "paid-rail enforcement", "cryptographic tokens"]
source: "https://github.com/SatGate-io/satgate"
discovered_at: "2026-06-27T21:01:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SatGate is an economic firewall for AI agents that enforces scoped authority, budgets, and paid-rail governance before allowing agent requests to execute. It acts as a lightweight proxy to validate capabilities, enforce hard budget limits, and provide cryptographic receipts for auditing.

## Key Features
- Capability tokens (Macaroons) for delegatable, scoped authority with built-in caveats like expiry and budget limits
- Hard budget enforcement that blocks requests when limits are reached, not just alerts
- MCP-aware governance that attributes costs to specific tool calls (e.g., search_database vs send_email)
- Paid-rail governance for L402, x402, API-key billing, and enterprise ledgers without centralizing control
- Default-deny security model requiring valid credentials for all routes unless explicitly public

## Why It Matters for RAG Builders
SatGate ensures AI agents operate within strict economic and policy boundaries, preventing unauthorized spending and providing auditable receipts for every action.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Macaroons (cryptographic tokens)
Automated review identified **Macaroons (cryptographic tokens)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lightning Network (L402/x402)
Automated review identified **Lightning Network (L402/x402)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
