---
title: yanacuti1121/Yana-AI
category: daily-digests/2026-07-09
tech_stack:
- Rust
- Python
- JavaScript/TypeScript
- Node.js
- Git
- Shell Scripting
- CI/CD (GitHub Actions)
quality_score: 9
rag_relevance: 8
tags:
- safety firewall
- AI agent protection
- command interception
- deterministic rules
- local execution
source: https://github.com/yanacuti1121/Yana-AI
discovered_at: '2026-07-09T11:53:37Z'
evaluated_by: mistral-small-latest
---

## Summary
Yana AI is a safety firewall designed to intercept and block dangerous or unintended commands from AI coding agents before they execute, preventing actions like `rm -rf`, force-pushing to Git, or SSRF attacks. It operates locally with deterministic rules and no LLM involvement in decision-making.

## Key Features
- Intercepts and blocks destructive commands (e.g., `rm -rf`, `git push --force`) before execution
- Supports 12+ AI coding tools (Claude Code, Cursor, Windsurf, Zed, etc.) via harness adapters
- Merkle audit logging for tamper-proof action tracking and compliance
- Rust-based runtime (`yana-rt`) for 1256x faster scanning compared to Python
- Human gate for irreversible actions requiring explicit confirmation

## Why It Matters for RAG Builders
Yana AI prevents catastrophic mistakes by AI coding agents, ensuring safer local execution without relying on external LLMs for decision-making.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
