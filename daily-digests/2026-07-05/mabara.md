---
title: "zikorachukwuka/mabara"
category: "Agent Framework"
tech_stack: ["Python", "Claude Code Agent SDK", "Parakeet-TDT (ONNX)", "Piper TTS", "Whisper (fallback STT)", "Git", "keyboard (global hotkey)", "ONNX Runtime"]
quality_score: 9
rag_relevance: 7
tags: ["voice coding", "push-to-talk", "real-time AI", "code editing", "git integration"]
source: "https://github.com/zikorachukwuka/mabara"
discovered_at: "2026-07-05T20:54:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mabara is a push-to-talk voice coding agent that enables hands-free interaction with a codebase using local speech recognition and text-to-speech, powered by a cloud-based AI model (Claude). It allows real-time voice commands for code edits, git operations, and model switching, with built-in safety checks and resumable sessions.

## Key Features
- Push-to-talk interface with pre-roll buffer for seamless voice input
- Voice-gated tool safety requiring spoken approval for edits and commands
- Git safety net with automatic checkpoints and deterministic reverts
- Dual-model switching (Haiku/Sonnet) mid-conversation for quality/quota balance
- Real-time latency-optimized pipeline with local STT/TTS and cloud AI brain

## Why It Matters for RAG Builders
Mabara enables hands-free, voice-driven coding workflows that integrate local speech models with cloud AI, reducing friction for developers who prefer auditory interaction while maintaining strict safety and git-integrated version control.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Agent SDK
Automated review identified **Claude Code Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parakeet-TDT (ONNX)
Automated review identified **Parakeet-TDT (ONNX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Piper TTS
Automated review identified **Piper TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (fallback STT)
Automated review identified **Whisper (fallback STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### keyboard (global hotkey)
Automated review identified **keyboard (global hotkey)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
