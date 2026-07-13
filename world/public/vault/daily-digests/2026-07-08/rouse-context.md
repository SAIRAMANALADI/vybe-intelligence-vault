---
title: "Monkopedia/rouse-context"
category: "Orchestrator"
tech_stack: ["Kotlin", "Android SDK", "Model Context Protocol (MCP)", "TLS/mTLS", "Firebase Cloud Messaging (FCM)", "Rust (Relay Server)", "ACME (Let's Encrypt/Google Trust Services)", "OAuth 2.0 (PKCE)", "Room Database (Audit Logging)", "Compose UI", "Koin (Dependency Injection)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "on-device AI", "privacy-first", "Android integration", "end-to-end encryption"]
source: "https://github.com/Monkopedia/rouse-context"
discovered_at: "2026-07-08T15:16:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Rouse Context is an Android app that transforms a user's smartphone into an on-demand MCP (Model Context Protocol) server, enabling AI assistants to securely access device-local context like health data, notifications, and app usage without cloud syncing. It uses end-to-end encrypted TLS and mTLS for secure, ephemeral sessions.

## Key Features
- Turns Android devices into secure MCP servers for AI assistants with per-integration TLS endpoints
- Supports 22 tools across 4 integrations (Health Connect, Notifications, Outreach, Usage Stats) with OAuth authorization
- End-to-end encrypted sessions via TLS passthrough and mTLS device authentication, ensuring no cloud sync of user data
- FCM push wake-up for ephemeral sessions with cold-start times under 3 seconds
- Local audit logging for every tool invocation with detailed metadata and response tracking

## Why It Matters for RAG Builders
It enables AI assistants to securely access real-time, device-local context without compromising user privacy, bridging the gap between on-device data and cloud-based AI interactions.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android SDK
Automated review identified **Android SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS/mTLS
Automated review identified **TLS/mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firebase Cloud Messaging (FCM)
Automated review identified **Firebase Cloud Messaging (FCM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (Relay Server)
Automated review identified **Rust (Relay Server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACME (Let's Encrypt/Google Trust Services)
Automated review identified **ACME (Let's Encrypt/Google Trust Services)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0 (PKCE)
Automated review identified **OAuth 2.0 (PKCE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Room Database (Audit Logging)
Automated review identified **Room Database (Audit Logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Compose UI
Automated review identified **Compose UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Koin (Dependency Injection)
Automated review identified **Koin (Dependency Injection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
