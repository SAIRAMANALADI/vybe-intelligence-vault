---
title: danlkv/codette
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- JavaScript
- Node.js
- Express
- WebSocket
- Svelte
- EC P-256 (ECDSA)
- AES-GCM-256
- JWT
- HMAC
- OIDC (optional)
quality_score: 9
rag_relevance: 7
tags:
- Claude Code
- remote control
- end-to-end encryption
- self-hosted
- multi-device
source: https://github.com/danlkv/codette
discovered_at: '2026-06-25T07:24:17Z'
evaluated_by: mistral-small-latest
---

## Summary
Codette enables remote control of Anthropic's Claude Code via a mobile-friendly, self-hosted web UI with end-to-end encryption. It consists of a host (local machine), server (relay), and client (browser) for real-time prompt execution and output streaming over the public internet.

## Key Features
- Mobile-friendly Svelte SPA client for remote Claude Code control
- End-to-end encryption (AES-GCM-256) for all session data and file contents
- Multi-host and multi-device support via a central relay server
- HMAC-based authentication with JWT for secure host-client communication
- Supports OIDC integration for external identity providers

## Why It Matters for RAG Builders
Codette provides a secure, self-hosted way to remotely control Claude Code from any device, making it essential for developers who need mobile access to AI-powered coding assistants without compromising security.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express
Automated review identified **Express** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Svelte
Automated review identified **Svelte** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EC P-256 (ECDSA)
Automated review identified **EC P-256 (ECDSA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-GCM-256
Automated review identified **AES-GCM-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC (optional)
Automated review identified **OIDC (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
