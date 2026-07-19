---
title: SimonSaysGiveMeSmile/SoA-Web
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- JavaScript
- Node.js
- WebSocket
- node-pty
- xterm.js
- Cloudflare Tunnel
- ES Modules (Browser)
- HTTP/HTTPS
- Web Speech API
quality_score: 9
rag_relevance: 7
tags:
- terminal emulator
- web-based PTY
- real-time shell
- browser-native
- self-hosted
source: https://github.com/SimonSaysGiveMeSmile/SoA-Web
discovered_at: '2026-07-09T00:05:33Z'
evaluated_by: mistral-small-latest
---

## Summary
SoA-Web is a browser-native terminal UI that streams real PTY sessions over WebSocket, eliminating Electron dependencies. It reimagines the desktop 'Son of Anton' app as a web-based terminal accessible via modern browsers, with server-side PTY management and optional authentication.

## Key Features
- Browser-native terminal UI with no Electron dependencies
- Real-time PTY session streaming over WebSocket
- Multi-tenant isolation with configurable authentication (shared, open, none)
- Cloudflare Tunnel integration for easy remote access
- Supports split-deploy with Vercel for static hosting and tunneled backend

## Why It Matters for RAG Builders
It provides a lightweight, browser-native alternative to Electron-based terminal emulators, enabling real-time shell access without complex desktop dependencies, which is valuable for AI engineering stacks requiring interactive CLI tools.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### node-pty
Automated review identified **node-pty** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xterm.js
Automated review identified **xterm.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ES Modules (Browser)
Automated review identified **ES Modules (Browser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web Speech API
Automated review identified **Web Speech API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
