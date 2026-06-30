---
title: "wilsonwang0713/clawleash"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Tailscale", "HTTP Server", "PWA (Progressive Web App)", "ntfy", "Bark (for push notifications)"]
quality_score: 9
rag_relevance: 7
tags: ["Claude Code", "permission approval", "remote control", "Tailscale", "self-hosted"]
source: "https://github.com/wilsonwang0713/clawleash"
discovered_at: "2026-06-30T03:44:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
clawleash is a self-hosted CLI tool that enables users to approve or deny Claude Code permission prompts from their mobile device, preventing autonomous runs from stalling when the user is away from their desk. It operates over Tailscale or local Wi-Fi with token-gated access and no cloud relay dependency.

## Key Features
- Token-gated mobile approval interface for Claude Code permission prompts
- Self-hosted with no cloud relay or subscription required
- Supports Tailscale for secure remote access or local Wi-Fi
- Optional push notifications via ntfy or Bark
- Fallback to terminal prompt if phone is offline or unresponsive

## Why It Matters for RAG Builders
clawleash eliminates workflow interruptions for AI engineers by enabling remote permission approvals, ensuring autonomous runs proceed without manual intervention.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailscale
Automated review identified **Tailscale** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PWA (Progressive Web App)
Automated review identified **PWA (Progressive Web App)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ntfy
Automated review identified **ntfy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bark (for push notifications)
Automated review identified **Bark (for push notifications)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
