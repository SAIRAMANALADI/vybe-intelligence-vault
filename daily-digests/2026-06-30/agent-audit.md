---
title: "muhamedali7713/agent-audit"
category: "Tooling"
tech_stack: ["Python", "Static Analysis", "Windows Desktop Application"]
quality_score: 7
rag_relevance: 6
tags: ["security", "ai agents", "static analysis", "audit", "compliance"]
source: "https://github.com/muhamedali7713/agent-audit"
discovered_at: "2026-06-30T20:56:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-audit is a security tool designed to audit AI coding agents like Claude Code, Codex CLI, and OpenClaw by scanning project configurations, session histories, and manifests for potential security risks using 296 predefined rules.

## Key Features
- Scans for 296 security rules covering prompt injection, insecure file access, and misconfigurations
- Local-only execution to ensure code and logs remain private
- Customizable rule toggling and exclusion management
- Automatic detection of common agent folders (.claude-code, .codex, etc.)
- Offline mode support for rule updates

## Why It Matters for RAG Builders
It provides critical security auditing for AI coding agents, ensuring local development environments remain protected against common vulnerabilities and misconfigurations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Desktop Application
Automated review identified **Windows Desktop Application** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
