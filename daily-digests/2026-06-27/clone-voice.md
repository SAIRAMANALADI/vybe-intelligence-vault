---
title: "haoyiyin/clone-voice"
category: "Agent Framework"
tech_stack: ["Python", "PyTorch", "Transformers", "Qwen3-TTS", "HuggingFace", "soundfile", "accelerate"]
quality_score: 8
rag_relevance: 7
tags: ["voice cloning", "offline TTS", "agent skill", "Qwen3-TTS", "multi-language"]
source: "https://github.com/haoyiyin/clone-voice"
discovered_at: "2026-06-27T15:14:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An offline zero-shot voice cloning agent skill that enables AI coding agents to clone a voice from a reference audio sample and synthesize speech in that voice. Powered by Alibaba's Qwen3-TTS 0.6B model, it requires no cloud APIs or GPUs and supports 10 languages.

## Key Features
- Zero-shot voice cloning with a single reference audio sample
- Supports 10 languages with auto-detection
- CPU/MPS/CUDA compatible, no GPU required
- Agent-agnostic and integrates with any agent platform
- Auto-downloads model weights on first run

## Why It Matters for RAG Builders
It enables AI agents to generate natural, cloned speech from reference audio, enhancing multimodal interactions without relying on cloud-based TTS services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers
Automated review identified **Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-TTS
Automated review identified **Qwen3-TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HuggingFace
Automated review identified **HuggingFace** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### soundfile
Automated review identified **soundfile** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### accelerate
Automated review identified **accelerate** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
