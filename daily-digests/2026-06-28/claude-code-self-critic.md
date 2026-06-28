---
title: "nadimtuhin/claude-code-self-critic"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Bash", "LLM (Haiku)", "JSON", "jq"]
quality_score: 9
rag_relevance: 7
tags: ["self-critic", "agent safety", "hallucination prevention", "Claude Code", "deterministic validation"]
source: "https://github.com/nadimtuhin/claude-code-self-critic"
discovered_at: "2026-06-28T18:02:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight, zero-dependency framework that adds real-time self-critique and stuck-detection hooks to Claude Code, preventing hallucinations and infinite loops by validating agent claims against deterministic evidence before escalating to a minimal LLM veto.

## Key Features
- Deterministic fact-gating to validate agent claims against evidence (e.g., test results, file reads) before any LLM call
- PreToolUse stuck-detector to prevent repeated commands or file edits within a single turn
- Minimal LLM involvement: only a Haiku model for vetoing false positives, never authoring critiques
- Fail-open design: any hook error allows the turn to proceed, ensuring reliability
- Zero-config defaults with episode caps and timeouts to prevent infinite critique loops

## Why It Matters for RAG Builders
It provides a critical safety layer for AI agents by validating their claims and preventing stuck loops, reducing hallucinations and improving reliability in production workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Haiku)
Automated review identified **LLM (Haiku)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jq
Automated review identified **jq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
