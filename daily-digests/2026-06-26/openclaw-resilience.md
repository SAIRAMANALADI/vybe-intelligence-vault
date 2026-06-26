---
title: "leiJack-lo/openclaw-resilience"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "OpenClaw", "JSONL", "HTTP Dashboard", "NPM"]
quality_score: 9
rag_relevance: 8
tags: ["LLM API resilience", "automatic retry", "error classification", "task recovery", "monitoring dashboard"]
source: "https://github.com/leiJack-lo/openclaw-resilience"
discovered_at: "2026-06-26T13:08:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A resilience plugin for OpenClaw that provides LLM API error tracking, classification, automatic retry strategies, task recovery, and a local web monitoring dashboard. It mitigates common issues like rate limits, timeouts, and server overloads during LLM API calls.

## Key Features
- Automatic classification of 11 error types (rate limits, timeouts, server overloads, etc.)
- Flexible retry strategies (fixed, exponential backoff, custom schedules)
- Task recovery with context persistence and session recovery instructions
- Local web dashboard for real-time error monitoring and strategy management
- Multi-instance aggregation for unified monitoring across OpenClaw Gateways

## Why It Matters for RAG Builders
It provides essential resilience mechanisms for LLM API calls, ensuring robust error handling and task continuity in AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Dashboard
Automated review identified **HTTP Dashboard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
