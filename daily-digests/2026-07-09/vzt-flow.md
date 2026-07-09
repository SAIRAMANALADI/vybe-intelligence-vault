---
title: "vonzelle-vzt/vzt-flow"
category: "Tooling"
tech_stack: ["Rust", "ONNX Runtime", "CoreML", "Metal", "llama.cpp", "Qwen3", "Parakeet TDT", "ScreenCaptureKit", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 7
tags: ["voice dictation", "local ASR", "offline transcription", "privacy-focused", "MCP integration"]
source: "https://github.com/vonzelle-vzt/vzt-flow"
discovered_at: "2026-07-09T19:31:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VZT Flow is a local, private, on-device voice dictation tool that enables hands-free or hold-to-talk transcription using Parakeet TDT ASR and optional Qwen3 LLM cleanup, all running 100% offline. It supports macOS, Windows, and Linux, and integrates as a CLI and MCP voice-input tool for agents like Claude Code.

## Key Features
- 100% on-device transcription with Parakeet TDT 0.6B ASR and optional Qwen3 1.7B cleanup
- Hold-to-talk and hands-free modes with configurable hotkeys and timeouts
- Long-form dictation with rolling transcription and automatic chunking to prevent OOM
- Meeting transcription with dual-stream speaker labeling and local summarization
- Code mode for deterministic spoken-form to identifier conversion without LLM overhead

## Why It Matters for RAG Builders
It provides a zero-cost, privacy-preserving alternative to cloud-based dictation tools, enabling RAG builders to integrate reliable local voice input for agent workflows without network dependencies.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoreML
Automated review identified **CoreML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metal
Automated review identified **Metal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3
Automated review identified **Qwen3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parakeet TDT
Automated review identified **Parakeet TDT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ScreenCaptureKit
Automated review identified **ScreenCaptureKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
