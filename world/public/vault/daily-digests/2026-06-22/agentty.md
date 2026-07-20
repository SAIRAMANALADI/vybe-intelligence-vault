---
title: 1ay1/agentty
category: daily-digests/2026-06-22
tech_stack:
- C++26
- Bubblewrap (bwrap)
- Sandbox-exec (macOS)
- SOCKS5-over-SSH
- CMake
- GitHub Actions (for releases)
- JSON (for thread storage)
quality_score: 9
rag_relevance: 8
tags:
- terminal AI
- sandboxed execution
- C++26
- SSH airgap
- Agent Skills
source: https://github.com/1ay1/agentty
discovered_at: '2026-06-22T23:21:36Z'
evaluated_by: mistral-small-latest
---

## Summary
agentty is a high-performance, drop-in alternative to claude-code written in C++26, designed for sub-millisecond cold starts and minimal resource usage. It provides a terminal-based AI agent with sandboxed execution, SSH airgap support, and full compatibility with Agent Skills standards.

## Key Features
- Sub-millisecond cold start with a static 8.8 MB binary, eliminating Node/Python dependencies
- Default sandboxed execution via bwrap/sandbox-exec to restrict filesystem and network access
- One-command SSH airgap support for running agents on internet-restricted hosts
- Full compatibility with Agent Skills standard for reusable, project-specific AI behaviors
- Inline terminal rendering with preserved scrollback and real-time streaming

## Why It Matters for RAG Builders
It provides a lightweight, high-performance alternative to traditional AI agent frameworks, enabling faster, safer, and more portable AI-driven workflows in terminal environments.

## Tech Stack Deep Dive
### C++26
Automated review identified **C++26** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap (bwrap)
Automated review identified **Bubblewrap (bwrap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandbox-exec (macOS)
Automated review identified **Sandbox-exec (macOS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SOCKS5-over-SSH
Automated review identified **SOCKS5-over-SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CMake
Automated review identified **CMake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (for releases)
Automated review identified **GitHub Actions (for releases)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (for thread storage)
Automated review identified **JSON (for thread storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
