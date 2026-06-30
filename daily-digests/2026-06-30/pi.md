---
title: "sky-valley/pi"
category: "Agent Framework"
tech_stack: ["Go", "LLM API Integration", "Agent Framework", "SSE (Server-Sent Events)", "JSON-Schema", "Concurrency (goroutines, channels)"]
quality_score: 9
rag_relevance: 8
tags: ["Go", "LLM Agent", "Coding Agent", "Multi-Provider", "Streaming"]
source: "https://github.com/sky-valley/pi"
discovered_at: "2026-06-30T10:54:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A pure-Go port of the `@earendil-works/pi` agent harness and coding agent, providing a unified multi-provider LLM API, agent loop, and CLI tools without requiring a Node.js runtime. It mirrors the original pi's architecture with idiomatic Go implementations for streaming protocols, tool contracts, and coding agent functionality.

## Key Features
- Unified multi-provider LLM API with Anthropic, OpenAI, Google, and others
- Idiomatic Go implementation with channels, goroutines, and context for agent loops
- Built-in coding tools (read, write, edit, bash, ls, find, grep) with session persistence
- Streaming protocol and event system matching the original pi's architecture
- Embedded 999-model catalog with provider-specific auth and telemetry controls

## Why It Matters for RAG Builders
It enables Go-based AI engineering teams to natively integrate a high-fidelity, multi-provider LLM agent framework without Node.js dependencies, simplifying deployment and reducing runtime complexity.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM API Integration
Automated review identified **LLM API Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Framework
Automated review identified **Agent Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-Schema
Automated review identified **JSON-Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Concurrency (goroutines, channels)
Automated review identified **Concurrency (goroutines, channels)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
