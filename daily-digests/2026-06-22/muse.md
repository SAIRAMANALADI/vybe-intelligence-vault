---
title: "wlsdks/Muse"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "React", "Fastify", "Ollama", "WhisperKit", "Qwen3-TTS", "Rust", "Swift", "OpenAI-compatible APIs", "MCP (Model Context Protocol)", "Telegram", "Discord", "Slack", "LINE"]
quality_score: 9
rag_relevance: 8
tags: ["personal AI", "local-first", "grounded recall", "multi-agent", "privacy-focused"]
source: "https://github.com/wlsdks/Muse"
discovered_at: "2026-06-22T23:22:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Muse is a local-first personal AI agent that builds a private model of the user from their own notes and files, reinforces what works, and forgets corrections. It operates entirely on-device, cites sources for every claim, and enforces strict boundaries like no autonomous actions or money movement.

## Key Features
- Builds a private model of the user from personal notes and files, reinforced by corrections and forgotten when needed.
- Operates entirely on-device with cloud egress refused by default, ensuring no data leaves the user's machine.
- Every claim cites a real source; weak grounding results in 'I'm not sure,' and un-groundable claims are dropped.
- Supports multi-agent orchestration, tool execution, and deterministic safety guards with fail-close policies.
- Provides a native macOS desktop companion with voice capabilities and a React-based web UI for interaction.

## Why It Matters for RAG Builders
Muse enables RAG builders to create deeply personalized, privacy-preserving AI systems that learn and adapt to individual users without compromising data security or relying on external models.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhisperKit
Automated review identified **WhisperKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-TTS
Automated review identified **Qwen3-TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram
Automated review identified **Telegram** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord
Automated review identified **Discord** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack
Automated review identified **Slack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LINE
Automated review identified **LINE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
