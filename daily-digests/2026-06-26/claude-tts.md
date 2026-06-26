---
title: "chendrizzy/claude-tts"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Ollama", "OpenAI-compatible APIs", "Edge TTS", "Kokoro (MLX)", "System TTS (espeak, say)", "Unix sockets", "JSONL logging", "uv (package manager)", "launchd/systemd"]
quality_score: 9
rag_relevance: 7
tags: ["real-time audio feedback", "agent monitoring", "local LLM integration", "TTS synthesis", "noise filtering"]
source: "https://github.com/chendrizzy/claude-tts"
discovered_at: "2026-06-26T10:21:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-tts is a local-first plugin that filters and vocalizes a Claude Code agent's work in real-time, speaking only meaningful events like errors, test results, and final answers while suppressing noise. It integrates a local LLM for intelligent summarization and supports multiple TTS engines for cross-platform audio output.

## Key Features
- Intelligent event filtering to vocalize only meaningful agent outputs (errors, test results, final answers) while suppressing noise like file reads or edits.
- Modular architecture with swappable LLM providers (Ollama, OpenAI-compatible, or deterministic null provider) and TTS engines (Edge TTS, Kokoro, system TTS).
- Local-first design with optional LLM dependency, ensuring token-free operation by default.
- Real-time spoken log with per-session JSONL storage and statusline integration for live feedback.
- Cross-platform support for macOS, Linux, and Windows (via WSL2/Docker), with automatic service management (launchd/systemd).

## Why It Matters for RAG Builders
claude-tts enhances AI agent workflows by providing real-time, hands-free feedback through audio, reducing cognitive load and improving productivity for developers using coding agents like Claude Code.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Edge TTS
Automated review identified **Edge TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kokoro (MLX)
Automated review identified **Kokoro (MLX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### System TTS (espeak, say)
Automated review identified **System TTS (espeak, say)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL logging
Automated review identified **JSONL logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### launchd/systemd
Automated review identified **launchd/systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
