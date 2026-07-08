---
title: "hufirst/onsense"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP/REST", "mDNS", "AES-256-GCM encryption", "HMAC-SHA256 signing", "uv (package manager)", "Android (Java/Kotlin for the app)"]
quality_score: 9
rag_relevance: 9
tags: ["MCP broker", "Android integration", "local AI agents", "sensor data", "camera access"]
source: "https://github.com/hufirst/onsense"
discovered_at: "2026-07-08T02:07:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
onsense is a local MCP broker that enables PC AI agents to interact with an Android phone's camera, sensors, and files over the same Wi-Fi network. It bridges MCP-capable AI clients (e.g., Claude Code, Codex) to the onSense Android app, providing real-time access to phone data without cloud relays or ADB.

## Key Features
- Enables MCP-capable AI agents to access phone camera frames, sensors, and files via a local Wi-Fi network without cloud relays or ADB
- Supports bidirectional file and clipboard transfers between phone and PC with optional encryption
- Automatic discovery via mDNS and pairing via QR code for seamless setup
- Security features include HMAC request signing, AES-256-GCM encryption, and local network-only access
- Compatible with multiple MCP clients (Claude Code, Codex, Claude Desktop) and supports custom stdio MCP clients

## Why It Matters for RAG Builders
It enables AI agents to directly interact with real-world data from mobile devices, expanding the capabilities of RAG systems with live camera feeds, sensor inputs, and file access while maintaining strict local network security.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mDNS
Automated review identified **mDNS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM encryption
Automated review identified **AES-256-GCM encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256 signing
Automated review identified **HMAC-SHA256 signing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android (Java/Kotlin for the app)
Automated review identified **Android (Java/Kotlin for the app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
