---
title: "esterhuizen/opensidekick"
category: "Agent Framework"
tech_stack: ["JavaScript", "Chrome Extension (Manifest V3)", "Service Workers", "Content Scripts", "OpenAI-compatible API", "Anthropic Messages API", "Model Context Protocol (MCP)", "Ollama", "LM Studio", "Node.js (for development scripts)"]
quality_score: 9
rag_relevance: 8
tags: ["AI Agent", "Browser Automation", "Provider-Agnostic", "Local LLM Support", "Chrome Extension"]
source: "https://github.com/esterhuizen/opensidekick"
discovered_at: "2026-07-03T07:00:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenSidekick is an open-source, provider-agnostic AI agent delivered as a Chrome extension that operates in the browser's side panel. It reads the current webpage, performs agentic actions like clicking, typing, and navigating, and can work across multiple tabs while allowing users to bring their own LLM provider or local model.

## Key Features
- Agentic browser control with DOM-based actions (clicks, typing, navigation, etc.)
- Provider-agnostic LLM integration (OpenRouter, OpenAI, Anthropic, local models via Ollama/LM Studio)
- Multi-tab support and workflow recording/replay for task automation
- Safety layers including plan-first approval, sensitive-site protections, and prompt-injection awareness
- MCP tool server integration for extending agent capabilities beyond the browser

## Why It Matters for RAG Builders
OpenSidekick enables AI engineers to build agentic browser automation tools with full control over LLM providers and local model integration, reducing vendor lock-in and enhancing privacy for RAG and AI stack implementations.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extension (Manifest V3)
Automated review identified **Chrome Extension (Manifest V3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Service Workers
Automated review identified **Service Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Content Scripts
Automated review identified **Content Scripts** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Messages API
Automated review identified **Anthropic Messages API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (for development scripts)
Automated review identified **Node.js (for development scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
