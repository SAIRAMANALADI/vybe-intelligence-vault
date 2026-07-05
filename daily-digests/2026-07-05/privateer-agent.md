---
title: "privateer-agent/privateer-agent"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Vercel AI SDK", "MCP (Model Context Protocol)", "OpenRouter", "Anthropic", "OpenAI", "Ollama", "NEAR AI", "TEE (Trusted Execution Environment)", "React (TUI components)"]
quality_score: 9
rag_relevance: 8
tags: ["agent-framework", "multi-model", "terminal-ui", "extensible", "privacy-preserving"]
source: "https://github.com/privateer-agent/privateer-agent"
discovered_at: "2026-07-05T11:29:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Privateer is a provider-agnostic terminal-based coding agent that enables users to switch between multiple AI model providers (OpenRouter, Anthropic, OpenAI, Ollama, NEAR AI) seamlessly. Built on the Vercel AI SDK, it offers vendor-neutral tool-calling, streaming, and extensibility via MCP servers, custom commands, and lifecycle hooks.

## Key Features
- Provider-agnostic model switching with `/model` command, enabling seamless transitions between OpenRouter, Anthropic, OpenAI, Ollama, and NEAR AI without code changes.
- Built-in modal prompt with `/` commands, `@` file autocomplete, `!` shell passthrough, and `#` memory append, supporting Vim mode and history search.
- Zero model lock-in with pure Node.js implementation, no binary dependencies, and extensible architecture via MCP servers, lifecycle hooks, and custom slash commands.
- Privacy-preserving features including Zero-Data-Retention (ZDR) enforcement for OpenRouter and cryptographic attestation for NEAR AI's TEE-based inference.
- Advanced features like plan mode, checkpoint/rewind, background shells, structured compaction, image attachment, and bounded parallel sub-agents for complex workflows.

## Why It Matters for RAG Builders
Privateer eliminates vendor lock-in for AI agents by providing a unified, extensible terminal interface that works across multiple providers while preserving privacy and enabling seamless model switching.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel AI SDK
Automated review identified **Vercel AI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic
Automated review identified **Anthropic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NEAR AI
Automated review identified **NEAR AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TEE (Trusted Execution Environment)
Automated review identified **TEE (Trusted Execution Environment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (TUI components)
Automated review identified **React (TUI components)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
