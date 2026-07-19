---
title: ZC89757/story-claw
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Node.js
- TypeScript
- ComfyUI
- LTX-2.3
- gpt-image-2
- TTS APIs
- '@mariozechner/pi-coding-agent'
- '@sinclair/typebox'
- VLM (Vision Language Model)
quality_score: 8
rag_relevance: 7
tags:
- novel-to-video
- AI automation
- video generation
- character consistency
- self-hosted
source: https://github.com/ZC89757/story-claw
discovered_at: '2026-07-07T16:24:42Z'
evaluated_by: mistral-small-latest
---

## Summary
Story Claw automates end-to-end novel-to-video adaptation by transforming novel chapters into narrated, scored, and sound-effected short-drama episodes. It handles script adaptation, character/scene art generation, shot composition, and video rendering in a single pipeline.

## Key Features
- Stage-aware character and scene evolution to avoid visual inconsistencies across long novels
- Automated VLM-based quality gating for video clips to ensure subject consistency and subtitle removal
- Persistent per-character TTS voice assignment for consistent narration throughout the episode
- Self-hosted ComfyUI + LTX-2.3 video generation pipeline to avoid per-second billing
- Modular configuration for LLM, image generation, TTS, and video rendering APIs

## Why It Matters for RAG Builders
It streamlines the novel-to-video pipeline by automating consistency checks and reducing manual oversight, making it essential for creators scaling AI-generated video content from long-form narratives.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ComfyUI
Automated review identified **ComfyUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LTX-2.3
Automated review identified **LTX-2.3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gpt-image-2
Automated review identified **gpt-image-2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TTS APIs
Automated review identified **TTS APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @mariozechner/pi-coding-agent
Automated review identified **@mariozechner/pi-coding-agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @sinclair/typebox
Automated review identified **@sinclair/typebox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VLM (Vision Language Model)
Automated review identified **VLM (Vision Language Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
