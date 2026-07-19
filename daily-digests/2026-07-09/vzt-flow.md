---
title: vonzelle-vzt/vzt-flow
category: daily-digests/2026-07-09
tech_stack:
- Rust
- ONNX Runtime
- CoreML
- Metal API
- Llama.cpp
- Parakeet TDT (ASR)
- Qwen3 (LLM)
- ScreenCaptureKit (macOS)
- MCP (Model Context Protocol)
quality_score: 9
rag_relevance: 7
tags:
- local ASR
- offline dictation
- privacy-focused
- AI cleanup
- MCP integration
source: https://github.com/vonzelle-vzt/vzt-flow
discovered_at: '2026-07-09T21:19:00Z'
evaluated_by: mistral-small-latest
---

## Summary
VZT Flow is a local, private, on-device voice dictation tool that enables hands-free or hold-to-talk transcription with optional AI cleanup. It runs entirely offline using Parakeet TDT for ASR and Qwen3 for LLM-based text refinement, supporting macOS, Windows, and Linux with CLI and MCP integration for AI agents like Claude Code.

## Key Features
- 100% on-device transcription with Parakeet TDT 0.6B ASR model, supporting 25+ languages
- Optional local LLM cleanup with Qwen3-1.7B for grammar, formatting, and polishing
- Hold-to-talk and hands-free dictation modes with rolling transcription for long-form audio
- CLI and MCP tools for integration with AI agents like Claude Code
- Per-app profiles, custom dictionaries, and meeting transcription with speaker labeling

## Why It Matters for RAG Builders
It provides a zero-cost, privacy-preserving alternative to cloud-based dictation tools, enabling RAG builders to integrate reliable local voice input and transcription without network dependencies or subscription fees.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoreML
Automated review identified **CoreML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metal API
Automated review identified **Metal API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Llama.cpp
Automated review identified **Llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parakeet TDT (ASR)
Automated review identified **Parakeet TDT (ASR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3 (LLM)
Automated review identified **Qwen3 (LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ScreenCaptureKit (macOS)
Automated review identified **ScreenCaptureKit (macOS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
