---
title: "RikepilB/read-video"
category: "Agent Framework"
tech_stack: ["Python", "Claude Code", "ffmpeg/ffprobe", "yt-dlp", "faster-whisper", "Whisper", "Groq API", "OpenAI API", "Gemini API", "trx"]
quality_score: 9
rag_relevance: 8
tags: ["video processing", "cost estimation", "transcription", "privacy-first", "Claude Code skill"]
source: "https://github.com/RikepilB/read-video"
discovered_at: "2026-06-24T22:13:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code skill that enables AI agents to 'read' videos by extracting frames and transcripts, with a cost pre-flight gate to preview expenses before processing. Supports local files and URLs (YouTube, Loom, etc.) and prioritizes privacy with local transcription backends.

## Key Features
- Extracts frames and transcripts from videos (local files or URLs) for AI agents to process
- Cost pre-flight gate with detailed pricing breakdown before any work begins
- Pluggable transcription backends with privacy-first defaults (local faster-whisper, URL captions)
- Supports adaptive frame selection and multiple transcription tiers (visual, audio, or both)
- Offline-resilient local transcription with fallback warnings and no silent degradation

## Why It Matters for RAG Builders
It enables AI agents to process video content by converting it into readable frames and transcripts while providing cost transparency and privacy controls, making it essential for RAG pipelines handling multimedia inputs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ffmpeg/ffprobe
Automated review identified **ffmpeg/ffprobe** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### faster-whisper
Automated review identified **faster-whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper
Automated review identified **Whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq API
Automated review identified **Groq API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### trx
Automated review identified **trx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
