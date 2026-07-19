---
title: Mygentic-AI/cello-client
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- SQLCipher
- Ed25519
- libp2p
- MCP (Model Context Protocol)
- FROST threshold cryptography
- Telegram API
quality_score: 8
rag_relevance: 7
tags:
- decentralized communication
- agent identity
- secure messaging
- tamper-evident audit
- MCP server
source: https://github.com/Mygentic-AI/cello-client
discovered_at: '2026-06-23T16:31:15Z'
evaluated_by: mistral-small-latest
---

## Summary
cello-client is the official client for the CELLO protocol, enabling secure, decentralized communication between AI agents without trusting a central server. It acts as an MCP server and native adapter for various agent variants, handling encrypted message relay, key management, and tamper-evident audit trails.

## Key Features
- End-to-end encrypted agent communication with no central server trust required
- Automatic generation and backup of Ed25519 signing keys for agent identity
- Tamper-evident audit trails for all conversations via sealed receipts and Merkle proofs
- Cross-platform support (macOS, Linux, Windows) with prebuilt native binaries
- Integration with Telegram for agent registration and directory discovery

## Why It Matters for RAG Builders
CELLO enables AI agents to communicate securely and verifiably without relying on centralized infrastructure, making it essential for building trustless multi-agent systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLCipher
Automated review identified **SQLCipher** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libp2p
Automated review identified **libp2p** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FROST threshold cryptography
Automated review identified **FROST threshold cryptography** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
