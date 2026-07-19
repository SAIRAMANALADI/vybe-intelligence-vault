---
title: topness-msft/callwright
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- JavaScript
- Node.js
- MCP (Model Context Protocol)
- Retell API
- Docker
- Stripe (for Retell payments)
quality_score: 9
rag_relevance: 8
tags:
- voice agent
- MCP server
- Retell integration
- multilingual calls
- PII minimization
source: https://github.com/topness-msft/callwright
discovered_at: '2026-07-06T23:03:29Z'
evaluated_by: mistral-small-latest
---

## Summary
Callwright is an MCP server that enables AI assistants (e.g., Claude, ChatGPT) to place real phone calls on behalf of users for tasks like reservations, appointments, or inquiries. It integrates with Retell for outbound calling and supports multilingual, extensible call handling with runtime language additions and PII-minimized data sharing.

## Key Features
- MCP-compatible server enabling AI assistants to place phone calls via Retell's outbound calling API
- Supports dynamic language additions at runtime (e.g., Japanese, English) with translated prompts and native voices
- PII-minimized data handling with explicit consent and footprint disclosure for each call
- Automated learning from call outcomes to enrich user profiles and improve future interactions
- Fire-and-forget call placement with dry-run confirmation and bounded retry logic to prevent spam

## Why It Matters for RAG Builders
Callwright bridges AI assistants with real-world actions by enabling secure, context-aware phone calls, making it essential for AI stacks requiring human interaction automation.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Retell API
Automated review identified **Retell API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe (for Retell payments)
Automated review identified **Stripe (for Retell payments)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
