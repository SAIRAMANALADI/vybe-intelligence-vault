---
title: "ttcd77/agent-browser-runtime"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Chrome DevTools Protocol (CDP)", "HTTP API", "Chrome Extensions", "Python (for companion attack harness)", "TypeScript (implicit via npm ecosystem)"]
quality_score: 9
rag_relevance: 9
tags: ["browser automation", "evidence capture", "anti-bot bypass", "security research", "AI agent tools"]
source: "https://github.com/ttcd77/agent-browser-runtime"
discovered_at: "2026-06-28T23:07:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Browser Runtime provides a DevTools-grade browser evidence runtime for AI agents, enabling real Chrome browser automation with 155 HTTP tools for navigation, evidence capture, and security research. It spawns isolated Chrome instances per profile to bypass anti-bot defenses while capturing F12-grade network/storage/console evidence.

## Key Features
- Spawns real Chrome instances per profile with `--user-data-dir` for anti-bot evasion
- 155 HTTP tools for navigation, interaction, evidence capture, and security research
- F12-grade network/storage/console evidence capture with on-disk body files
- Profile isolation and multi-Chrome routing for agent workflows
- Companion Python attack harness for advanced security primitives (JWT forge, intruder, OOB)

## Why It Matters for RAG Builders
It enables AI agents to interact with real-world websites while bypassing anti-bot defenses and capturing high-fidelity evidence, critical for security research and automated web interaction workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extensions
Automated review identified **Chrome Extensions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for companion attack harness)
Automated review identified **Python (for companion attack harness)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implicit via npm ecosystem)
Automated review identified **TypeScript (implicit via npm ecosystem)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
