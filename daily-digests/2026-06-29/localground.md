---
title: "Technically-A-Mechanical-Engineer/localground"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Claude Code", "MCP (Model Context Protocol)", "CLI", "Git", "JavaScript"]
quality_score: 9
rag_relevance: 7
tags: ["migration", "Claude Code", "cloud storage", "file sync", "project management"]
source: "https://github.com/Technically-A-Mechanical-Engineer/localground"
discovered_at: "2026-06-29T12:32:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A toolkit designed to help Claude Code users migrate projects off cloud-synced storage (e.g., OneDrive, Dropbox) with pre-migration verification, safe migration, post-migration health checks, and cleanup. Supports MCP server, CLI, and paste-and-run prompts for flexible usage.

## Key Features
- Pre-migration verification with seed markers and git tags
- Safe migration with chunked copying and verification
- Post-migration health checks (6 checks including git, sync status, and path-hash integrity)
- Multi-format support: MCP server, CLI, and paste-and-run prompts
- Platform-aware commands with auto-detection for Windows, macOS, and Linux

## Why It Matters for RAG Builders
It provides a critical safety net for AI engineers using Claude Code to migrate projects off unstable cloud-synced storage, ensuring data integrity and reducing debugging overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
