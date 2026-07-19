---
title: flowork-os/Flowork-OS
category: daily-digests/2026-06-25
tech_stack:
- Go
- WASM (wazero)
- SQLite (FTS5)
- Model Context Protocol (MCP)
- Alpine Linux
- Bubblewrap
- LUKS encryption
- dm-verity
- P2P mesh networking
quality_score: 9
rag_relevance: 8
tags:
- sovereign AI
- local-first agents
- WASM sandboxing
- self-hosted OS
- P2P mesh
source: https://github.com/flowork-os/Flowork-OS
discovered_at: '2026-06-25T05:04:38Z'
evaluated_by: mistral-small-latest
---

## Summary
Flowork-OS is a sovereign, self-hosted operating system for AI agents that runs locally on any machine or boots from a USB. It enables 24/7 autonomous agents with persistent memory, self-improvement, and offline capabilities, leveraging existing subscriptions like Claude without additional API keys.

## Key Features
- Microkernel architecture with frozen ABI and self-guarding core for tamper resistance
- Per-agent WASM sandboxing (wazero) with isolated SQLite memory (FTS5 + vector search)
- Plug-and-play modules (.fwpack) with hot-loading and runtime extensibility
- Sovereign P2P mesh for decentralized knowledge replication and offline operation
- Built-in security scanner (Threat Radar) and anti-hallucination mechanisms

## Why It Matters for RAG Builders
Flowork-OS provides a tamper-resistant, self-hosted foundation for AI agents that prioritizes data sovereignty, persistent learning, and offline resilience, making it critical for building trustworthy, production-grade RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (wazero)
Automated review identified **WASM (wazero)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5)
Automated review identified **SQLite (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alpine Linux
Automated review identified **Alpine Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap
Automated review identified **Bubblewrap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LUKS encryption
Automated review identified **LUKS encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dm-verity
Automated review identified **dm-verity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### P2P mesh networking
Automated review identified **P2P mesh networking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
