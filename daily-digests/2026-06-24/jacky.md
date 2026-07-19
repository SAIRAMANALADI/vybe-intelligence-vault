---
title: mdjakkariya/jacky
category: daily-digests/2026-06-24
tech_stack:
- Python
- Tauri (Rust)
- Ollama
- Whisper (STT)
- Piper (TTS)
- FastAPI
- SQLite
- macOS Permissions API
- WebSocket
- Pydantic
- Ruff
- Mypy
- Pytest
quality_score: 9
rag_relevance: 7
tags:
- voice-assistant
- on-device-ai
- macOS
- privacy-focused
- local-llm
source: https://github.com/mdjakkariya/jacky
discovered_at: '2026-06-24T20:45:04Z'
evaluated_by: mistral-small-latest
---

## Summary
A privacy-first, on-device voice assistant for macOS that operates entirely locally with opt-in cloud exceptions. It listens, understands, and executes commands like opening apps, managing files, or checking system status via a floating orb interface.

## Key Features
- Fully local execution with opt-in cloud LLM support (Ollama or Anthropic)
- Privacy-first design with no external data transmission by default
- Permission-gated tool execution with audit logging for security
- Swappable components (STT, TTS, LLM) via modular architecture
- Hands-free voice control with wake-word detection and barge-in support

## Why It Matters for RAG Builders
It provides a privacy-preserving, modular foundation for building on-device voice assistants that integrate with local LLMs and macOS system tools, critical for secure AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri (Rust)
Automated review identified **Tauri (Rust)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (STT)
Automated review identified **Whisper (STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Piper (TTS)
Automated review identified **Piper (TTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Permissions API
Automated review identified **macOS Permissions API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
