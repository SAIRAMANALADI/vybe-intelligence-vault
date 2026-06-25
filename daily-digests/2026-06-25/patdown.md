---
title: "ryanda9910/patdown"
category: "Tooling"
tech_stack: ["Shell", "Markdown", "Claude Code", "Cursor", "Gemini CLI", "opencode"]
quality_score: 9
rag_relevance: 7
tags: ["security", "code review", "agent integration", "vulnerability scanning", "CI/CD"]
source: "https://github.com/ryanda9910/patdown"
discovered_at: "2026-06-25T05:04:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
patdown is a security-focused coding agent skill that audits code diffs for vulnerabilities like secrets, injection, SSRF, and weak crypto before a task is marked as complete. It integrates directly with AI coding agents (e.g., Claude Code, Cursor, Gemini CLI) to catch and fix security issues in real-time.

## Key Features
- Real-time diff auditing for security vulnerabilities before code ships
- Automated fixes for mechanical issues (e.g., parameterized queries, env secrets)
- Escalation of logic-based vulnerabilities (e.g., IDOR, authz gaps) for human review
- Multi-agent compatibility (Claude Code, Cursor, Gemini CLI, etc.)
- Lightweight and fast, focusing only on changed lines to avoid false positives

## Why It Matters for RAG Builders
It prevents security vulnerabilities from being introduced into production code by catching them at the earliest possible stage—during the agent's own review process—before they reach CI or human reviewers.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### opencode
Automated review identified **opencode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
