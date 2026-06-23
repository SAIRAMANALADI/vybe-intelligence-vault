---
title: "he-yufeng/FlightBox"
category: "Tooling"
tech_stack: ["Python", "SQLite", "OpenAI SDK", "Anthropic SDK", "LiteLLM", "CLI", "Markdown", "HTML"]
quality_score: 9
rag_relevance: 8
tags: ["LLM debugging", "agent testing", "session replay", "deterministic testing", "evidence generation"]
source: "https://github.com/he-yufeng/FlightBox"
discovered_at: "2026-06-23T16:29:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FlightBox is a local-first black-box flight recorder for AI agents that records, replays, and diffs LLM calls deterministically. It provides debugging trails, redacted evidence reports, and exportable test skeletons for AI agent interactions.

## Key Features
- Records LLM calls (OpenAI, Anthropic, LiteLLM) with context for debugging
- Replays recorded sessions deterministically for reproducible testing
- Diffs two runs to identify behavioral or performance differences
- Exports redacted evidence reports (Markdown/HTML) and test skeletons (JSONL/pytest)
- Local-first storage in SQLite with CLI for inspection and management

## Why It Matters for RAG Builders
FlightBox enables AI engineers to debug, test, and document agent behavior reliably by capturing and replaying LLM interactions locally without external dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI SDK
Automated review identified **OpenAI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML
Automated review identified **HTML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
