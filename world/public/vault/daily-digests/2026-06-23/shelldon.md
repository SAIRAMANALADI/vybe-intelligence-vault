---
title: elliotboney/shelldon
category: daily-digests/2026-06-23
tech_stack:
- Python
- Raspberry Pi Zero 2W
- E-Ink Display (Waveshare)
- Telegram API
- SQLite
- GLM (Z.ai)
- Ollama
- OpenAI-compatible APIs
- Unix domain sockets
- systemd
- pytest
quality_score: 9
rag_relevance: 7
tags:
- AI pet
- E-Ink display
- local LLM
- self-extending tools
- Raspberry Pi
source: https://github.com/elliotboney/shelldon
discovered_at: '2026-06-23T02:48:17Z'
evaluated_by: mistral-small-latest
---

## Summary
shelldon is an AI-powered E-Ink pet for Raspberry Pi Zero 2W that interacts via chat, featuring an expressive face, memory, moods, and self-written tools. It runs locally with a remote LLM brain, prioritizing autonomy, safety, and hardware constraints.

## Key Features
- Pluggable chat transport (Telegram, CLI, etc.) with provider-agnostic LLM integration
- Self-written tools with automated testing and user approval for safe extension
- Memory system combining SQLite (conversation history) and markdown (curated knowledge)
- Ephemeral fork-server workers to prevent OOM crashes on constrained hardware
- Expressive E-Ink face with moods, idle animations, and reflexes running independently

## Why It Matters for RAG Builders
It demonstrates a robust, hardware-aware agent framework with self-extending capabilities and memory management, offering a template for building autonomous AI systems on resource-constrained devices.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Raspberry Pi Zero 2W
Automated review identified **Raspberry Pi Zero 2W** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### E-Ink Display (Waveshare)
Automated review identified **E-Ink Display (Waveshare)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GLM (Z.ai)
Automated review identified **GLM (Z.ai)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix domain sockets
Automated review identified **Unix domain sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
