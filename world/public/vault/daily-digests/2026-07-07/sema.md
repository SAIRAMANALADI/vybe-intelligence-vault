---
title: sema-lisp/sema
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Rust
- Lisp
- LLM APIs
- Bytecode VM
- WebAssembly
- CLI Tools
quality_score: 9
rag_relevance: 8
tags:
- LLM agents
- Lisp dialect
- bytecode VM
- RAG tooling
- agent primitives
source: https://github.com/sema-lisp/sema
discovered_at: '2026-07-07T16:27:33Z'
evaluated_by: mistral-small-latest
---

## Summary
Sema is a Scheme-like Lisp designed for LLM agents, where prompts, conversations, and LLM calls are first-class language primitives. It compiles to a fast bytecode VM and ships as a single binary, eliminating boilerplate like retries, caching, and tool dispatch.

## Key Features
- LLM calls as language primitives (no SDK required)
- Persistent conversation state as immutable data structures
- Built-in vector store for semantic search and RAG pipelines
- Multi-provider support (Anthropic, OpenAI, Ollama, etc.) with automatic failover
- Single-binary deployment with sandboxed execution

## Why It Matters for RAG Builders
Sema reduces the complexity of building LLM-powered agents by embedding LLM interactions directly into the language runtime, enabling cleaner, more maintainable code for RAG and agentic systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lisp
Automated review identified **Lisp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs
Automated review identified **LLM APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bytecode VM
Automated review identified **Bytecode VM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly
Automated review identified **WebAssembly** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
