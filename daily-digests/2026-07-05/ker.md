---
title: "benitolopez/ker"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "OpenAI API", "HTTP/REST", "SSE (Server-Sent Events)", "JWT/OAuth"]
quality_score: 7
rag_relevance: 6
tags: ["minimal agent", "conversation daemon", "OpenAI integration", "streaming responses", "early-stage"]
source: "https://github.com/benitolopez/ker"
discovered_at: "2026-07-05T20:52:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ker is a minimalistic coding agent framework that provides a long-lived daemon for managing conversations and streaming model replies via HTTP. It currently supports OpenAI's Responses API or ChatGPT subscriptions for single-turn interactions without tools or persistent sessions.

## Key Features
- Long-lived daemon for conversation persistence across terminals
- Streaming model replies via HTTP/SSE with retry logic
- Support for both OpenAI API keys and ChatGPT subscriptions
- Modular monorepo structure with separate packages for core components
- Basic CLI client for sending prompts and receiving responses

## Why It Matters for RAG Builders
It provides a lightweight foundation for building conversational agents with persistent memory and streaming capabilities, which can be extended for RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT/OAuth
Automated review identified **JWT/OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
