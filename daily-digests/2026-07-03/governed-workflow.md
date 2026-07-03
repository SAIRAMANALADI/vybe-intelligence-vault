---
title: "IgnatRozhkoTR/governed-workflow"
category: "Orchestrator"
tech_stack: ["Python", "Flask", "Claude Code", "MCP (Model Context Protocol)", "SQLite", "Mermaid.js", "Telegram Bot API"]
quality_score: 9
rag_relevance: 8
tags: ["Agentic Workflow", "Human-in-the-Loop", "Scope Enforcement", "Phase Validation", "Claude Code Integration"]
source: "https://github.com/IgnatRozhkoTR/governed-workflow"
discovered_at: "2026-07-03T04:02:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A zero-trust orchestration layer for Claude Code that enforces phase progression, scope constraints, and human approval gates on agentic coding sessions. It ensures every phase transition is validated server-side, with critical checkpoints requiring explicit human approval via an admin panel.

## Key Features
- Zero-trust phase progression with server-side validation for every transition
- Human approval gates at critical checkpoints (4 user gates) via admin panel
- Scope locking per execution sub-phase to restrict file edits
- Research proving with typed proofs and automated verification
- Telegram integration for remote session control and multi-session management

## Why It Matters for RAG Builders
It provides a robust framework for enforcing governance and security in agentic coding workflows, ensuring human oversight and preventing unauthorized or unvalidated changes.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask
Automated review identified **Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
