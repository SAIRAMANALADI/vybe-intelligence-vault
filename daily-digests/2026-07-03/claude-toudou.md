---
title: "Zhangshuzz/claude-toudou"
category: "Tooling"
tech_stack: ["Node.js", "Git", "JavaScript", "GitHub Actions", "Telegram API", "Slack API", "Discord API", "ntfy.sh"]
quality_score: 8
rag_relevance: 7
tags: ["Claude Code", "session continuity", "multi-machine sync", "git-based handoff", "AI context persistence"]
source: "https://github.com/Zhangshuzz/claude-toudou"
discovered_at: "2026-07-03T03:55:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-toudou enables persistent memory and session continuity for Claude Code across multiple machines using a git-based handoff protocol. It synchronizes AI context between nodes (e.g., home/office PCs) via a private relay repository, ensuring seamless task continuation without context loss.

## Key Features
- Git-based persistent memory across machines using a private relay repository
- Concurrent node operation with pull-before-push safety rules to prevent context conflicts
- Optional always-on hub node for scheduled synchronization without manual intervention
- Pre-compaction hooks to preserve cumulative context and prevent amnesia in long sessions
- Multi-platform notification routing via GitHub Actions for services like Telegram, Slack, or Discord

## Why It Matters for RAG Builders
It solves the critical problem of context loss when switching between machines during AI-driven development workflows, enabling seamless continuity for Claude Code users.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ntfy.sh
Automated review identified **ntfy.sh** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
