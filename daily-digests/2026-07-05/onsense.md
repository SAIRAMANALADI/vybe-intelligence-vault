---
title: "hufirst/onsense"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "HTTP", "mDNS", "AES-256-GCM encryption", "HMAC-SHA256 signing", "uv (package manager)", "Android (onSense app)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP broker", "Android integration", "local AI agents", "sensor data", "camera streaming"]
source: "https://github.com/hufirst/onsense"
discovered_at: "2026-07-05T15:12:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
onsense is a local MCP broker that enables PC AI agents to interact with an Android phone's camera, sensors, and files over Wi-Fi without cloud relay or ADB. It bridges the phone's HTTP provider with MCP-capable AI clients like Claude Code or Codex for real-time sensor and camera data access.

## Key Features
- Real-time camera frame capture and streaming to PC AI agents via MCP
- Access to phone sensors (battery, light, accelerometer) and settings (camera FPS)
- Bidirectional file and clipboard transfer between phone and PC
- Secure local network communication with HMAC signing and AES-256-GCM encryption
- Automatic mDNS discovery for phone IP changes and QR-code-based pairing

## Why It Matters for RAG Builders
It enables AI agents to directly interact with real-world data from mobile devices without cloud dependencies, enhancing RAG systems with live sensor and camera inputs for richer context.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mDNS
Automated review identified **mDNS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM encryption
Automated review identified **AES-256-GCM encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256 signing
Automated review identified **HMAC-SHA256 signing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android (onSense app)
Automated review identified **Android (onSense app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
