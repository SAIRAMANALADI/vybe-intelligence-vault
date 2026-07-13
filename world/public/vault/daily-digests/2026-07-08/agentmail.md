---
title: "kindrat86/agentmail"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "Mail.tm (for disposable email)", "5sim/Twilio (for SMS verification)", "OFAC SDN List (sanctions data)", "SQLite (local caching)"]
quality_score: 9
rag_relevance: 8
tags: ["compliance", "sanctions screening", "AI agent verification", "OFAC", "transaction risk scoring"]
source: "https://github.com/kindrat86/agentmail"
discovered_at: "2026-07-08T08:17:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agentmail is a compliance and verification toolkit designed for AI agents to screen transactions against OFAC sanctions lists, verify counterparties, and manage disputes. It provides disposable email/SMS inboxes for OTP verification and exposes functionality via MCP, HTTP API, and CLI.

## Key Features
- Real-time OFAC sanctions screening with 782 crypto wallets and 19,086 sanctioned names
- Pre-payment risk scoring for transactions (allow/review/decline recommendations)
- Disposable email and SMS inboxes for OTP/magic-link verification
- Multi-surface access: MCP tools, HTTP API, and CLI for integration flexibility
- Self-hosted with optional hosted API for uptime, audit logs, and rate limiting

## Why It Matters for RAG Builders
It ensures AI agents comply with sanctions regulations and mitigate financial fraud risks before autonomous transactions, filling a critical gap left by major payment infrastructures.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mail.tm (for disposable email)
Automated review identified **Mail.tm (for disposable email)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 5sim/Twilio (for SMS verification)
Automated review identified **5sim/Twilio (for SMS verification)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OFAC SDN List (sanctions data)
Automated review identified **OFAC SDN List (sanctions data)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (local caching)
Automated review identified **SQLite (local caching)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
