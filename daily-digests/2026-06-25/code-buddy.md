---
title: "phuetz/code-buddy"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Electron", "Ollama", "LLM Providers (GPT, Grok, Claude, etc.)", "Rust (for buddy-sense)", "Python (for buddy-vision)", "WebSocket", "Vitest (testing)", "MCP (Model Context Protocol)", "Telegram Bot API"]
quality_score: 9
rag_relevance: 10
tags: ["AI coding agent", "multi-provider LLM", "local-first", "multi-AI fleet", "voice/vision companion"]
source: "https://github.com/phuetz/code-buddy"
discovered_at: "2026-06-25T19:51:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Code Buddy is an open-source, multi-provider AI coding agent that runs locally on Ollama for free or integrates with 15+ LLM providers (e.g., GPT, Grok, Claude) with automatic failover. It supports terminal TUI, desktop app, HTTP/WebSocket server, and messaging channels like Telegram, offering ~110 tools, multi-AI fleet collaboration, and optional voice/vision companion features.

## Key Features
- Runs entirely locally on Ollama (~$0.0001) or integrates with 15+ LLM providers with automatic failover
- Supports terminal TUI, desktop app (Cowork), HTTP/WebSocket server, and messaging channels (e.g., Telegram)
- Features ~110 tools including file editing, shell commands, web search, browser automation, and MCP connectors
- Multi-AI fleet collaboration with peer observation, tool delegation, and live load balancing
- Optional voice and vision companion layer with local speech-to-text, text-to-speech, and camera perception

## Why It Matters for RAG Builders
Code Buddy provides a flexible, local-first AI agent framework with multi-provider support and extensive tooling, making it essential for RAG builders who need autonomous, multi-modal, and multi-AI collaboration capabilities.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (GPT, Grok, Claude, etc.)
Automated review identified **LLM Providers (GPT, Grok, Claude, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for buddy-sense)
Automated review identified **Rust (for buddy-sense)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for buddy-vision)
Automated review identified **Python (for buddy-vision)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest (testing)
Automated review identified **Vitest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
