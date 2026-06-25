---
title: "askalf/hands"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "PowerShell", "AppleScript", "xdotool", "ydotool", "whisper.cpp", "Anthropic API", "Claude CLI"]
quality_score: 9
rag_relevance: 10
tags: ["computer-use agent", "local LLM control", "cross-platform automation", "privacy-first", "shell integration"]
source: "https://github.com/askalf/hands"
discovered_at: "2026-06-24T18:51:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
hands is a local computer-use agent that enables LLMs to control your OS natively via shell commands (PowerShell, AppleScript, xdotool/ydotool) or screenshots, with optional voice input. It prioritizes local execution and privacy, routing through your existing Anthropic subscription or API key to avoid additional hosted tiers.

## Key Features
- Native OS control via platform-specific shells (PowerShell, AppleScript, xdotool/ydotool) for faster, cheaper execution than screenshot loops
- Zero-cost operation by routing through existing Anthropic subscriptions (Claude Max) or local proxies like dario
- Optional voice input using local whisper.cpp for private, offline transcription
- Comprehensive audit logging to ~/.hands/audit.jsonl for all tool calls and actions
- Dry-run mode to preview actions without execution, ensuring safety and predictability

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to integrate secure, cost-effective, and private computer-use automation into their workflows without relying on third-party hosted services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AppleScript
Automated review identified **AppleScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xdotool
Automated review identified **xdotool** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ydotool
Automated review identified **ydotool** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whisper.cpp
Automated review identified **whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude CLI
Automated review identified **Claude CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
