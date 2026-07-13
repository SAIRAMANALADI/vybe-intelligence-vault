---
title: "HelgeSverre/sema"
category: "Agent Framework"
tech_stack: ["Rust", "Lisp (Scheme-like)", "LLM APIs (Anthropic, OpenAI, Google, Ollama, etc.)", "Bytecode VM", "WebAssembly", "CLI tools"]
quality_score: 9
rag_relevance: 8
tags: ["LLM agents", "Lisp DSL", "RAG tooling", "agent runtime", "prompt engineering"]
source: "https://github.com/HelgeSverre/sema"
discovered_at: "2026-06-22T23:24:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sema is a Scheme-like Lisp where LLM agents are first-class primitives, compiled to a fast bytecode VM and shipped as a single binary. It eliminates boilerplate agent scaffolding by embedding LLM calls, tool dispatch, and conversation state directly into the language runtime.

## Key Features
- First-class LLM primitives (prompts as s-expressions, conversations as persistent data structures)
- Built-in tool dispatch, cost tracking, and retry logic for agents
- Cross-provider support (Anthropic, OpenAI, Ollama, etc.) with automatic failover
- Vector store and reranking for RAG pipelines
- Compiles to standalone binaries for easy deployment

## Why It Matters for RAG Builders
Sema reduces agent development to a few lines of Lisp while providing production-grade features like cost tracking, tool dispatch, and RAG tooling, making it ideal for building and deploying robust LLM agents efficiently.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lisp (Scheme-like)
Automated review identified **Lisp (Scheme-like)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Anthropic, OpenAI, Google, Ollama, etc.)
Automated review identified **LLM APIs (Anthropic, OpenAI, Google, Ollama, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bytecode VM
Automated review identified **Bytecode VM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly
Automated review identified **WebAssembly** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
