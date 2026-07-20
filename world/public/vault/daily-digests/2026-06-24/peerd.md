---
title: NotASithLord/peerd
category: daily-digests/2026-06-24
tech_stack:
- JavaScript (ES2024+)
- WebAssembly (WASM)
- WebRTC
- WebCrypto
- WebAuthn
- Chrome/Firefox Extensions (Manifest V3)
- Bun (for build scripts)
- GitHub Actions (CI/CD)
quality_score: 9
rag_relevance: 8
tags:
- browser-based AI agents
- sandboxed compute
- peer-to-peer networking
- BYOK model integration
- privacy-first architecture
source: https://github.com/NotASithLord/peerd
discovered_at: '2026-06-24T18:50:01Z'
evaluated_by: mistral-small-latest
---

## Summary
peerd is a Chrome/Firefox extension that runs a full AI agent loop entirely within the browser, enabling agents to read and drive existing tabs, execute sandboxed compute (JS notebooks, WASM Linux VMs), and share outputs peer-to-peer via WebRTC. It operates with no backend, no telemetry, and BYOK (Bring Your Own Keys) for model providers.

## Key Features
- Runs AI agents entirely in-browser with no backend or telemetry
- Sandboxed compute via WebAssembly Linux VMs and JS notebooks
- Peer-to-peer sharing of agent outputs via WebRTC (preview channel)
- BYOK (Bring Your Own Keys) for model providers (Anthropic, OpenRouter, Ollama)
- Security-first design with hardware-backed passkeys and vault encryption

## Why It Matters for RAG Builders
It enables fully local, privacy-preserving AI agent execution within the browser, eliminating the need for cloud backends and reducing latency while maintaining strong security guarantees.

## Tech Stack Deep Dive
### JavaScript (ES2024+)
Automated review identified **JavaScript (ES2024+)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly (WASM)
Automated review identified **WebAssembly (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebRTC
Automated review identified **WebRTC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebCrypto
Automated review identified **WebCrypto** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAuthn
Automated review identified **WebAuthn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome/Firefox Extensions (Manifest V3)
Automated review identified **Chrome/Firefox Extensions (Manifest V3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun (for build scripts)
Automated review identified **Bun (for build scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
