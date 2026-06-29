---
title: "kindrat86/agentmail"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "Mail.tm (for email inboxes)", "5sim/Twilio (for SMS verification)", "OFAC SDN List (sanctions data)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
tags: ["compliance", "sanctions screening", "AI agent verification", "OFAC", "transaction risk assessment"]
source: "https://github.com/kindrat86/agentmail"
discovered_at: "2026-06-29T21:24:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agentmail is a compliance and verification toolkit designed for AI agents to screen transactions against OFAC sanctions lists, verify identities via disposable email/SMS inboxes, and assess transaction risk. It provides real-time sanctions screening, Know-Your-Agent (KYA) verification, and dispute management through MCP tools, HTTP API, and CLI.

## Key Features
- Real-time OFAC sanctions screening with 782 crypto wallets and 19,086 sanctioned names
- Disposable email and SMS verification inboxes for OTP/magic link handling
- Transaction risk scoring and Know-Your-Agent (KYA) verification
- Multiple interfaces: MCP tools, HTTP API, and CLI for flexible integration
- Self-hosted or hosted API with audit logging and rate limiting

## Why It Matters for RAG Builders
It provides critical compliance and verification capabilities that AI agents lack, ensuring legal adherence and fraud prevention in autonomous transactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mail.tm (for email inboxes)
Automated review identified **Mail.tm (for email inboxes)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 5sim/Twilio (for SMS verification)
Automated review identified **5sim/Twilio (for SMS verification)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OFAC SDN List (sanctions data)
Automated review identified **OFAC SDN List (sanctions data)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
