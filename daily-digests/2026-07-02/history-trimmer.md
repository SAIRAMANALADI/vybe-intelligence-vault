---
title: "aetox-skills/history-trimmer"
category: "Tooling"
tech_stack: ["TypeScript", "OpenCode", "LLM API Integration"]
quality_score: 9
rag_relevance: 8
tags: ["token optimization", "conversation history", "LLM cost reduction", "OpenCode plugin", "context management"]
source: "https://github.com/aetox-skills/history-trimmer"
discovered_at: "2026-07-02T12:09:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight OpenCode plugin that trims conversation history before LLM API calls to reduce token waste. It caps the number of messages sent per request while preserving critical context, saving significant costs for frequent API users.

## Key Features
- Caps conversation history to a configurable number of messages before each LLM API call
- Preserves system messages and recent user/assistant messages for context integrity
- Zero dependencies and minimal setup (single file, no config required)
- Dynamically adjusts message retention based on user-defined caps (MAX_USER_MSGS, HISTORY_KEEP)
- Ensures tool call/result pairs are not split to prevent API errors

## Why It Matters for RAG Builders
It directly reduces LLM API costs by eliminating redundant token waste from bloated conversation history, making AI workflows more efficient and cost-effective for developers.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM API Integration
Automated review identified **LLM API Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
