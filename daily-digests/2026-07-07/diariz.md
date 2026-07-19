---
title: kenhayward/Diariz
category: daily-digests/2026-07-07
tech_stack:
- TypeScript
- C#
- Python
- WhisperX
- pyannote
- SpeechBrain
- PostgreSQL
- pgvector
- Electron
- React
- FastAPI
- ffmpeg
- OAuth 2.0
- Model Context Protocol (MCP)
quality_score: 9
rag_relevance: 9
tags:
- meeting transcription
- speaker diarization
- semantic search
- AI chat
- self-hosted
source: https://github.com/kenhayward/Diariz
discovered_at: '2026-07-07T16:26:32Z'
evaluated_by: mistral-small-latest
---

## Summary
Diariz is a self-hosted, multi-user platform for recording, transcribing, and analyzing meetings with speaker diarization, speaker identification, summarization, and AI-powered chat. It supports audio capture (mic, system loopback, or file upload), semantic search, and action item extraction, all while ensuring user data privacy and isolation.

## Key Features
- Multi-source audio capture (mic, loopback, file upload) with live monitoring and pause/resume functionality
- Server-side transcription with WhisperX and pyannote for speaker-labeled, timestamped segments and word-level accuracy
- Speaker identification across recordings using SpeechBrain ECAPA voiceprints and pgvector for cosine matching
- AI-powered chat with RAG (hybrid vector + trigram search) and built-in tools for action items, summaries, and semantic queries
- Multi-user RBAC with Google OAuth integration, calendar sync, and data isolation for privacy

## Why It Matters for RAG Builders
Diariz provides a comprehensive, self-hosted pipeline for transforming raw audio into structured, searchable, and actionable meeting data, making it essential for RAG builders who need accurate speaker attribution, semantic search, and AI-driven insights from conversational data.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhisperX
Automated review identified **WhisperX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyannote
Automated review identified **pyannote** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SpeechBrain
Automated review identified **SpeechBrain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ffmpeg
Automated review identified **ffmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
