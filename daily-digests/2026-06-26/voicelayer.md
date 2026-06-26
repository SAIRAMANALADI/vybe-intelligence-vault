---
title: "EtanHey/voicelayer"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Swift", "whisper.cpp", "edge-tts", "Silero VAD", "Model Context Protocol (MCP)", "socat", "launchd", "NDJSON"]
quality_score: 9
rag_relevance: 7
tags: ["voice interface", "local STT/TTS", "MCP integration", "AI agent tools", "real-time audio"]
source: "https://github.com/EtanHey/voicelayer"
discovered_at: "2026-06-26T22:12:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VoiceLayer provides local-first voice input/output capabilities for AI coding assistants via the Model Context Protocol (MCP). It enables real-time speech-to-text and text-to-speech interactions with AI agents while ensuring no data leaves the user's machine.

## Key Features
- Local-first voice I/O with whisper.cpp for STT and edge-tts for TTS, ensuring no cloud API dependencies
- Daemon-based architecture with Unix socket IPC for efficient resource management and stability
- 11 MCP tools (2 core + 9 aliases) with ToolAnnotations for seamless AI agent integration
- Silero VAD for speech detection and configurable recording controls (push-to-talk, timeout, VAD thresholds)
- Cross-platform support via socat shims and macOS VoiceBar app with global hotkey (F5) and visual feedback

## Why It Matters for RAG Builders
VoiceLayer enables AI agents to interact via voice locally, reducing latency and privacy concerns while providing a seamless hands-free experience for developers.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whisper.cpp
Automated review identified **whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### edge-tts
Automated review identified **edge-tts** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Silero VAD
Automated review identified **Silero VAD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### socat
Automated review identified **socat** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### launchd
Automated review identified **launchd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON
Automated review identified **NDJSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
