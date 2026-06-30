---
title: "japananh/aimonitor"
category: "Tooling"
tech_stack: ["Go", "SQLite", "macOS Keychain", "Linux libsecret", "Argon2id", "AES-256-GCM", "GitHub Actions", "Swift (for macOS app)", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 7
tags: ["Claude Code", "Anthropic API", "Multi-account management", "Token monitoring", "Automated switching"]
source: "https://github.com/japananh/aimonitor"
discovered_at: "2026-06-30T13:13:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aimonitor is a multi-account Claude Code usage monitor and silent account switcher for macOS and Linux, designed to optimize Anthropic API usage by tracking 5h/7d token consumption and automatically switching accounts when thresholds are reached.

## Key Features
- Real-time 5h/7d usage tracking per account with trend analysis
- Silent account switching via OAuth token refresh without manual login
- Auto-swap functionality at configurable thresholds (80% by default)
- MCP server for Slack and ClickUp integration with Claude Code
- Secure credential storage using OS keyrings and passphrase-encrypted exports

## Why It Matters for RAG Builders
It streamlines multi-account Anthropic API usage for AI engineers by automating monitoring and switching, reducing downtime and manual intervention.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Keychain
Automated review identified **macOS Keychain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux libsecret
Automated review identified **Linux libsecret** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift (for macOS app)
Automated review identified **Swift (for macOS app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
