---
title: NG-Bullseye/speech-mcp
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- WhisperX
- ComfyUI
- Qwen3
- MCP (Model Context Protocol)
- ALSA (for microphone recording)
quality_score: 7
rag_relevance: 8
tags:
- speech-to-text
- text-to-speech
- MCP server
- WhisperX
- Qwen3
source: https://github.com/NG-Bullseye/speech-mcp
discovered_at: '2026-06-23T13:49:54Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that unifies speech-to-text (STT) and text-to-speech (TTS) capabilities. It integrates WhisperX for transcription and ComfyUI/Qwen3 for TTS, with optional HTTP wrapper support for broader accessibility.

## Key Features
- Unified STT/TTS MCP server for seamless audio processing
- Supports recording audio via USB microphone
- Transcription via WhisperX with high accuracy
- Text-to-speech via ComfyUI/Qwen3 endpoint
- Optional HTTP wrapper for broader integration

## Why It Matters for RAG Builders
It provides a critical bridge for AI systems requiring real-time speech processing, enabling RAG pipelines to handle audio inputs and outputs efficiently.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhisperX
Automated review identified **WhisperX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ComfyUI
Automated review identified **ComfyUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3
Automated review identified **Qwen3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ALSA (for microphone recording)
Automated review identified **ALSA (for microphone recording)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
