---
title: "Aivyx-Agent/aivyx"
category: "Agent Framework"
tech_stack: ["Rust", "LLM (Ollama, Anthropic, OpenAI)", "HMAC", "ChaCha20-Poly1305 (encryption)", "Argon2id (key derivation)", "Redb (embedded database)", "TUI (ratatui)", "Web UI (local-first, offline)", "Docker", "Unix sockets", "TOML (configuration)"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "privacy-first", "local inference", "capability-based security", "auditability"]
source: "https://github.com/Aivyx-Agent/aivyx"
discovered_at: "2026-07-05T09:41:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aivyx is a Rust-based, local-first autonomous agent framework designed for privacy and auditability. It enables users to run AI agents on their own hardware, interact with cloud LLMs using their own API keys, and maintain full control over data and security without relying on hosted services.

## Key Features
- Runs entirely on user hardware with no hosted dependencies or data sharing
- Capability-based security and HMAC-chained audit logs for verifiable offline tracking
- Encrypted at-rest storage with Argon2id key derivation and ChaCha20-Poly1305 encryption
- Self-learning agent identity with operator-governed persona and skill refinement
- Graph-augmented memory with BM25 lexical recall and multi-hop association for compounding knowledge

## Why It Matters for RAG Builders
It provides a privacy-preserving, auditable foundation for building autonomous AI agents that operate entirely under user control, critical for RAG stacks requiring trust and data sovereignty.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Anthropic, OpenAI)
Automated review identified **LLM (Ollama, Anthropic, OpenAI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChaCha20-Poly1305 (encryption)
Automated review identified **ChaCha20-Poly1305 (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id (key derivation)
Automated review identified **Argon2id (key derivation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redb (embedded database)
Automated review identified **Redb (embedded database)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (ratatui)
Automated review identified **TUI (ratatui)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web UI (local-first, offline)
Automated review identified **Web UI (local-first, offline)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (configuration)
Automated review identified **TOML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
