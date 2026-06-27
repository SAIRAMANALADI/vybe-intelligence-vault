---
title: "Irvingouj/Browsergent"
category: "Agent Framework"
tech_stack: ["TypeScript", "Rust (compiled to WASM)", "Chrome Extension (Manifest V3)", "Preact", "Zustand", "Tailwind CSS", "Vitest", "Playwright", "Anthropic Messages API"]
quality_score: 8
rag_relevance: 7
tags: ["browser automation", "AI agent", "Chrome extension", "BYOK", "WASM"]
source: "https://github.com/Irvingouj/Browsergent"
discovered_at: "2026-06-27T21:58:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Browsergent is a Chrome extension that embeds an AI agent in a side panel to automate browser tasks using natural language. It leverages an LLM to generate JavaScript for interacting with web pages, executing actions like navigation, form filling, and reading content while maintaining user privacy with a BYOK (Bring Your Own Key) model.

## Key Features
- Natural language task execution with LLM reasoning and JavaScript generation
- Sandboxed runtime for safe page interactions via `@pi-oxide/extension-js`
- Multi-provider support for Anthropic, DeepSeek, GLM, or compatible APIs
- Built-in file management with OPFS-backed storage and attachments
- Detailed trace view for debugging and observing agent actions

## Why It Matters for RAG Builders
Browsergent provides a secure, user-controlled framework for automating browser tasks with AI, reducing the need for manual scripting while ensuring privacy through BYOK.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (compiled to WASM)
Automated review identified **Rust (compiled to WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extension (Manifest V3)
Automated review identified **Chrome Extension (Manifest V3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Preact
Automated review identified **Preact** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zustand
Automated review identified **Zustand** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Messages API
Automated review identified **Anthropic Messages API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
