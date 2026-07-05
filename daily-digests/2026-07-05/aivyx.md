---
title: "Aivyx-Agent/aivyx"
category: "Agent Framework"
tech_stack: ["Rust", "LLM (Ollama, Anthropic, OpenAI)", "HMAC", "Argon2id", "HKDF", "ChaCha20-Poly1305", "Redb (embedded database)", "TUI (ratatui)", "Web UI (local-first, offline)", "Docker", "Unix sockets", "TOML"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "privacy-first", "capability-based security", "local-first", "auditability"]
source: "https://github.com/Aivyx-Agent/aivyx"
discovered_at: "2026-07-05T06:39:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Aivyx is a Rust-based, local-first autonomous agent framework designed for privacy, auditability, and capability-based security. It enables users to run AI agents on their own hardware while interacting with cloud LLMs using their own API keys, ensuring no data leaves the user's control.

## Key Features
- Runs entirely on user hardware with no hosted dependencies or data exposure
- Capability-based security and HMAC-chained audit logs for verifiable offline tracking
- Encrypted storage at rest with Argon2id, HKDF, and ChaCha20-Poly1305
- Self-learning agent identity and skills with operator-governed refinement and growth
- Graph-augmented memory with BM25, vector, and co-occurrence recall for compounding knowledge

## Why It Matters for RAG Builders
Aivyx provides a secure, privacy-preserving foundation for building autonomous AI agents that can be fully controlled and audited by users, making it essential for RAG stacks prioritizing data sovereignty and compliance.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Anthropic, OpenAI)
Automated review identified **LLM (Ollama, Anthropic, OpenAI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HKDF
Automated review identified **HKDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChaCha20-Poly1305
Automated review identified **ChaCha20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
