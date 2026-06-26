---
title: "igorrendulic/tg-customer-support-plugin"
category: "Tooling"
tech_stack: ["Python", "SQLite", "sqlite-vec", "Telegram API", "Playwright", "Sentence Transformers", "BAAI/bge-small-en-v1.5", "FTS5", "Chromium"]
quality_score: 9
rag_relevance: 8
tags: ["local-first", "Telegram integration", "hybrid search", "evidence-backed drafting", "operator-assist workflow"]
source: "https://github.com/igorrendulic/tg-customer-support-plugin"
discovered_at: "2026-06-26T16:11:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first support agent that integrates with Telegram to enable Codex or Claude to search support history, documentation, and repository evidence, draft evidence-backed replies, and post to Telegram only after explicit operator confirmation.

## Key Features
- Syncs Telegram support chats into a local SQLite profile for searchable metadata
- Hybrid search combining SQLite FTS5 and sqlite-vec for semantic and exact-term retrieval
- Supports crawling website/docs and indexing repository evidence for live context
- Drafts evidence-backed replies with explicit operator confirmation required before posting
- Local-first architecture ensuring all data and indexes remain on the operator's machine

## Why It Matters for RAG Builders
It provides a secure, local-first way for AI agents to retrieve support context and draft replies while maintaining strict operator control over sensitive actions like posting to Telegram.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-small-en-v1.5
Automated review identified **BAAI/bge-small-en-v1.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
