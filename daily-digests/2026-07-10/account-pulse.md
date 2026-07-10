---
title: "me-Shahsavan/account-pulse"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Nylas v3 API", "Claude LLM", "React (UI)", "REST API", "Hosted Auth"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent", "email analysis", "calendar integration", "Nylas", "grounded responses"]
source: "https://github.com/me-Shahsavan/account-pulse"
discovered_at: "2026-07-10T06:15:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Account Pulse is an AI agent that analyzes real email threads and calendar availability to provide grounded summaries of relationships with contacts, draft follow-up emails, and propose meeting slots—all powered by Nylas v3 primitives and an LLM layer.

## Key Features
- Connects to Google/Microsoft accounts via Nylas Hosted Auth for unified access to email and calendar data
- Generates relationship summaries, action items, and meeting proposals grounded in real communication state
- Drafts follow-up emails with explicit human confirmation required before sending
- Uses tool-based LLM interactions to fetch threads, availability, and draft content
- Provides CLI and web UI interfaces for flexible interaction with the agent

## Why It Matters for RAG Builders
It demonstrates how to build an AI agent that safely interacts with real-world communication data to ground responses in actual user interactions, reducing hallucinations in RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nylas v3 API
Automated review identified **Nylas v3 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude LLM
Automated review identified **Claude LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (UI)
Automated review identified **React (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hosted Auth
Automated review identified **Hosted Auth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
