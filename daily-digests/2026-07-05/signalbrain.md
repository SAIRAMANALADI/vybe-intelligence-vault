---
title: "whitestone1121-web/signalbrain"
category: "Tooling"
tech_stack: ["Python", "CLI", "GitHub Actions", "MCP (Model Context Protocol)", "JSON/JSONL", "Mermaid.js (for diagrams)"]
quality_score: 9
rag_relevance: 8
tags: ["trust layer", "governance", "receipts", "calibrated autonomy", "fail-closed"]
source: "https://github.com/whitestone1121-web/signalbrain"
discovered_at: "2026-07-05T23:04:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SignalBrain provides a trust layer for AI-modified software by introducing executable receipts, objective re-scoring, and per-class calibrated trust metrics. It ensures autonomy is earned through verifiable, byte-identical claims rather than self-reported assertions, enabling fail-closed governance in CI/CD pipelines and agent workflows.

## Key Features
- Executable receipts: Signed, re-runnable claims tied to human-merged changes
- Objective re-scoring: Re-executes measurement commands to verify claims, recording held/failed status
- Per-class trust metrics: Tracks earned autonomy by change class with revocable thresholds
- Fail-closed design: Nonzero exit codes block CI/CD workflows or halt agent actions on integrity breaches
- Agent- and model-neutral: Works with any agent (Claude Code, Cursor, etc.) and model via MCP server

## Why It Matters for RAG Builders
SignalBrain ensures AI agents and tools cannot self-report unverified claims, providing a critical trust layer for RAG and AI stack builders to enforce governance and integrity in automated workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
