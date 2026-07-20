---
title: zikorachukwuka/mabara
category: daily-digests/2026-07-07
tech_stack:
- Python
- Claude Code Agent SDK
- Piper TTS
- Parakeet-TDT (STT)
- ONNX runtime
- Git
- Windows API (hotkey handling)
quality_score: 9
rag_relevance: 8
tags:
- voice coding
- push-to-talk
- local AI
- real-time agent
- git-integrated
source: https://github.com/zikorachukwuka/mabara
discovered_at: '2026-07-07T16:25:40Z'
evaluated_by: mistral-small-latest
---

## Summary
Mabara is a push-to-talk voice coding agent that enables hands-free interaction with a codebase using local speech recognition and text-to-speech, powered by Claude Code's Agent SDK. It allows real-time voice-driven edits, approvals, and git operations with CPU-only execution.

## Key Features
- Push-to-talk voice interface with pre-roll buffer for seamless interaction
- Streaming speech synthesis and barge-in capabilities for low-latency responses
- Voice-gated tool safety with git checkpoints and approval workflows
- Multi-session awareness and per-repo resumable sessions with error reporting
- Dynamic model switching (e.g., Sonnet to Haiku) mid-conversation for performance/quality trade-offs

## Why It Matters for RAG Builders
Mabara demonstrates how voice-driven, real-time agents can integrate with local and cloud-based AI systems to enable hands-free coding with safety checks and git integration, crucial for accessibility and productivity in AI engineering workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Agent SDK
Automated review identified **Claude Code Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Piper TTS
Automated review identified **Piper TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parakeet-TDT (STT)
Automated review identified **Parakeet-TDT (STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX runtime
Automated review identified **ONNX runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows API (hotkey handling)
Automated review identified **Windows API (hotkey handling)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
