---
title: mrdushidush/claudette
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Rust
- Ollama
- LM Studio
- Local LLM
- Telegram API
- Git
- Bash
- Embeddings
- Whisper (STT)
- Edge-TTS
quality_score: 9
rag_relevance: 8
tags:
- air-gapped
- local LLM
- coding agent
- offline AI
- autonomous coding
source: https://github.com/mrdushidush/claudette
discovered_at: '2026-06-25T07:24:32Z'
evaluated_by: mistral-small-latest
---

## Summary
Claudette is an air-gapped AI coding agent and personal assistant that runs entirely on local hardware using a single Rust binary and a local model via Ollama or LM Studio. It enforces strict offline operation, preventing any network egress, and includes features like autonomous code pipelines, multi-tool support, and a fullscreen TUI.

## Key Features
- Strict air-gapped operation with enforced offline mode blocking all network egress
- Autonomous code pipeline (Forge) with built-in verification (build/test passes) before PR submission
- Multi-modal support including image attachments and voice via Telegram bot
- Tiered model selection with reliability scoring for local LLMs
- Extensive tooling (80+ tools) with granular permissions and opt-in groups

## Why It Matters for RAG Builders
Claudette provides a secure, offline-first framework for building AI agents that can safely interact with local codebases and tools without exposing data to external networks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local LLM
Automated review identified **Local LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (STT)
Automated review identified **Whisper (STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Edge-TTS
Automated review identified **Edge-TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
